import { $, isEquals, roundDown } from '../common/helper.js';
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
    this.$props = { ...this.$props, tabData };
    this.$eventBus.addEvent('form', 'button', 'click', this, this.eventValidate);
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
  }

  eventValidate(event, scope) {
    event.preventDefault();
    const { component } = scope.$props;
    const storageItem = scope.$storage.read(component);
    const targets = scope.contentInputs();
    const checkedInputs = scope.checkToInputs(targets, storageItem);

    if (!isEquals(checkedInputs.length, targets.length)) return scope.clearInput(targets);

    scope.parseItem(component, checkedInputs, storageItem);

    scope.clearInput(targets);
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
        let parsed = roundDown(data.value);
        while (parsed > 0) {
          const pickUnit = pickNumberInList(CHARGE_UNIT);
          const restCharge = parsed - pickUnit;
          if (restCharge >= 0) [parsed, items] = this.countItems(restCharge, pickUnit, items);
        }
        return this.$storage.create(component, items);
      }
      case 'product-purchase-menu': {
        const [{ value: charge }] = data;
        return { charge };
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
