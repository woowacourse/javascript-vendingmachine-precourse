import { $, $closest, isEquals, roundDown } from '../common/helper.js';
import { isValidate } from '../common/validations.js';
import { CHARGE_UNIT, DEFAULT_VALUES, EMPTY } from '../constants/index.js';
import Content from '../presentational/Content.js';
import Component from './root/Component.js';

/* eslint-disable no-undef */
const { pickNumberInList } = MissionUtils.Random;

export default class Main extends Component {
  initialized() {
    let tabData = this.$storage.read(this.$props.component);
    if (this.$props.component === 'vending-machine-manage-menu' && tabData.length === 0) {
      const initItems = DEFAULT_VALUES[this.$props.component];
      this.$storage.create(this.$props.component, initItems);
      tabData = initItems;
    }
    if (this.$props.component === 'product-purchase-menu') {
      const initItems = {
        'product-add-menu': this.$storage.read('product-add-menu'),
        'vending-machine-manage-menu': this.$storage.read('vending-machine-manage-menu'),
        'charge-amount': this.$storage.read('product-purchase-menu')['charge-amount'],
      };
      tabData = initItems;
    }
    this.$props = { ...this.$props, tabData };
    // form 버튼
    this.$eventBus.addEvent('form', 'button', 'click', this, this.formButtonEvent);
    // td 버튼
    this.$eventBus.addEvent('table', 'button', 'click', this, this.tableButtonEvent);
    // div 버튼
    this.$eventBus.addEvent('.changes', 'button', 'click', this, this.divButtonEvent);
  }

  template() {
    return `
    <div data-component=${this.$props.component}>
      ${Content(this.$props)}
    <div>
    `;
  }

  mount() {
    this.$eventBus.dispatch('form', 'button', 'click');
    this.$eventBus.dispatch('table', 'button', 'click');
    this.$eventBus.dispatch('.changes', 'button', 'click');
  }

  formButtonEvent(event, scope) {
    event.preventDefault();
    const { component } = scope.$props;
    const storageItem = scope.$storage.read(component);
    const targets = scope.contentInputs();
    const checkedInputs = scope.checkToInputs(targets, storageItem);
    if (!isEquals(checkedInputs.length, targets.length)) return scope.clearInput(targets);
    scope.parseItem(component, checkedInputs, storageItem);
    scope.clearInput(targets);
  }

  coinExchange(changes, charges) {
    const copy = [...charges];
    let leftChanges = changes;
    let index = 0;
    while (leftChanges > 0 && index < charges.length) {
      const [description, count] = copy[index];
      const temp =
        count - Math.floor(leftChanges / +description) < 0
          ? count
          : Math.floor(leftChanges / +description);
      if (description > leftChanges) index += 1;
      else if (temp === 0) index += 1;
      else if (count < 1) index += 1;
      else if (temp < 0) index += 1;
      else {
        leftChanges -= +description * temp;
        copy[index][1] = count - temp;
      }
    }

    return [
      copy.reduce((result, item) => [...result, { description: item[0], count: item[1] }], []),
      leftChanges,
    ];
  }

  tableButtonEvent({ target }, scope) {
    const amount = scope.$props.tabData['charge-amount'];
    const { textContent: name } = $('[data-product-name]', $closest(target, 'tr'));
    const { textContent: quantity } = $('[data-product-quantity]', $closest(target, 'tr'));
    if (quantity < 1) return alert('재고가 없습니다!');
    const { textContent: price } = $('[data-product-price]', $closest(target, 'tr'));
    const product = scope.$props.tabData['product-add-menu'].map(item => {
      if (item.name === name) return { ...item, quantity: quantity - 1 };
      return item;
    });
    const changes = +amount - +price;
    if (changes < 0) return alert('투입한 금액보다 비싼 가격입니다.');
    const tabData = {
      ...scope.$props.tabData,
      'product-add-menu': product,
      'charge-amount': changes,
    };

    scope.$storage.creation('product-purchase-menu', tabData);
  }

  divButtonEvent(event, scope) {
    const charges = scope.$props.tabData['vending-machine-manage-menu'].reduce(
      (result, item) => [...result, [item.description, item.count]],
      [],
    );

    const [changes, leftChanges] = scope.coinExchange(
      scope.$props.tabData['charge-amount'],
      charges,
    );
    const tabData = {
      ...scope.$props.tabData,
      'vending-machine-manage-menu': [...changes],
      'charge-amount': leftChanges,
    };
    scope.$storage.creation('product-purchase-menu', tabData);
  }

  contentInputs() {
    const children = $('form').childNodes;
    const childrens = Array.from(children);
    return childrens.reduce((result, node) => {
      if (node instanceof HTMLInputElement) return [...result, node];
      return result;
    }, []);
  }

  checkToInputs(targets, storageItem) {
    return Array.from(targets).reduce((result, target, _, array) => {
      if (!isValidate(target, storageItem)) {
        array.splice(1);
        return [...result];
      }
      return [...result, target];
    }, []);
  }

  countItems(charge, unit, obj) {
    return [
      charge,
      obj.map(({ description, count }) => {
        if (isEquals(description, unit)) return { description, count: count + 1 };
        return { description, count };
      }),
    ];
  }

  parseItem(component, data, storageItem) {
    switch (component) {
      case 'product-add-menu': {
        const [{ value: name }, { value: price }, { value: quantity }] = data;
        return this.$storage.add(component, { name, price, quantity });
      }
      case 'vending-machine-manage-menu': {
        let items = [...storageItem];
        const [{ value }] = data;
        let parsed = roundDown(value);
        while (parsed > 0) {
          const pickUnit = pickNumberInList(CHARGE_UNIT);
          const restCharge = parsed - pickUnit;
          if (restCharge >= 0) [parsed, items] = this.countItems(restCharge, pickUnit, items);
        }
        return this.$storage.create(component, items);
      }
      case 'product-purchase-menu': {
        const [{ value: charge }] = data;
        const currentAmount = storageItem['charge-amount'] || 0;
        return this.$storage.update(component, 'charge-amount', +charge + +currentAmount);
      }
      default:
        return {};
    }
  }

  clearInput(targets) {
    const shallowTargets = Array.from(targets);
    shallowTargets.forEach((_, index) => {
      shallowTargets[index].value = EMPTY;
    });
  }
}
