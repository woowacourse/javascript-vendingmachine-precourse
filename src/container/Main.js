import { $, $closest, getChangesCount, isEquals, roundDown } from '../common/helper.js';
import { isValidate } from '../common/validations.js';
import {
  CHARGE_AMOUNT,
  CHARGE_UNIT,
  EMPTY,
  MACHINE_MANAGE,
  PRODUCT_ADD,
  PURCHASE_MENU,
} from '../constants/index.js';
import Content from '../presentational/Content.js';
import Component from './root/Component.js';

/* eslint-disable no-undef */
const { pickNumberInList } = MissionUtils.Random;

export default class Main extends Component {
  initialized() {
    this.$props = { ...this.$props, tabData: this.itemGetter(this.$props.component) };
    // form 버튼
    this.$eventBus.addEvent('form', 'button', 'click', this.formButtonEvent.bind(this));
    // td 버튼
    this.$eventBus.addEvent('table', 'button', 'click', this.tableButtonEvent.bind(this));
    // div 버튼
    this.$eventBus.addEvent('.changes', 'button', 'click', this.divButtonEvent.bind(this));
  }

  template() {
    return `
    <div data-component=${this.$props.component}>
      ${Content(this.$props)}
    <div>
    `;
  }

  mount() {
    this.$eventBus.delegation('form', 'button', 'click');
    this.$eventBus.delegation('table', 'button', 'click');
    this.$eventBus.delegation('.changes', 'button', 'click');
  }

  formButtonEvent(event) {
    event.preventDefault();
    const { component } = this.$props;
    const storageItem = this.itemGetter(component);
    const targets = this.contentInputs();
    const checkedInputs = this.checkToInputs(targets, storageItem);
    if (!isEquals(checkedInputs.length, targets.length)) return this.clearInput(targets);
    this.parseItem(component, checkedInputs, storageItem);
    this.clearInput(targets);
  }

  coinExchange(changes, charges) {
    const copy = [...charges];
    let leftChanges = changes;
    let index = 0;
    while (leftChanges > 0 && index < charges.length) {
      const [description, count] = copy[index];
      const temp = getChangesCount(count, leftChanges, +description);
      if (temp <= 0) index += 1;
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

  tableButtonEvent({ target }) {
    const { textContent: name } = $('[data-product-name]', $closest(target, 'tr'));
    const { textContent: price } = $('[data-product-price]', $closest(target, 'tr'));
    const { textContent: quantity } = $('[data-product-quantity]', $closest(target, 'tr'));
    if (quantity < 1) return alert('재고가 없습니다!');
    const product = this.$props.tabData[PRODUCT_ADD].map(item => {
      if (isEquals(item.name, name)) return { ...item, quantity: quantity - 1 };
      return item;
    });
    const changes = +this.$props.tabData[CHARGE_AMOUNT] - +price;
    if (changes < 0) return alert('투입한 금액보다 비싼 가격입니다.');
    const tabData = {
      ...this.$props.tabData,
      [PRODUCT_ADD]: product,
      [CHARGE_AMOUNT]: changes,
    };

    this.$storage.creation(PURCHASE_MENU, tabData);
  }

  divButtonEvent() {
    const charges = this.$props.tabData[MACHINE_MANAGE].reduce(
      (result, item) => [...result, [item.description, item.count]],
      [],
    );

    const [changes:[MACHINE_MANAGE], leftChanges] = this.coinExchange(this.$props.tabData[CHARGE_AMOUNT], charges);
    const tabData = {
      ...this.$props.tabData,
      [MACHINE_MANAGE]: [...changes],
      [CHARGE_AMOUNT]: leftChanges,
    };
    this.$storage.creation(PURCHASE_MENU, tabData);
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
      case PRODUCT_ADD: {
        const [{ value: name }, { value: price }, { value: quantity }] = data;
        return this.$storage.add(component, { name, price, quantity });
      }
      case MACHINE_MANAGE: {
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
      case PURCHASE_MENU: {
        const [{ value: charge }] = data;
        const currentAmount = storageItem[CHARGE_AMOUNT] || 0;
        return this.$storage.update(component, CHARGE_AMOUNT, +charge + +currentAmount);
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
