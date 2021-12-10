import {
  clearInput,
  isEquals,
  getChildInput,
  coinExchange,
  setStorage,
  applyProduct,
} from '../common/helper.js';
import { isValidateInput, purchaseValidate } from '../common/validations.js';
import { CHARGE_AMOUNT, MACHINE_MANAGE, PRODUCT_ADD, PURCHASE_MENU } from '../constants/index.js';
import Content from '../presentational/Content/index.js';
import Component from './root/Component.js';

function formButtonEvent(event) {
  event.preventDefault();

  const storageItem = this.itemGetter(this.$props.component);
  const targetInputs = getChildInput('form');
  const checkedInputs = isValidateInput(targetInputs, storageItem);

  if (!isEquals(checkedInputs.length, targetInputs.length)) return clearInput(targetInputs);

  setStorage[this.$props.component](this.$storage, checkedInputs, storageItem);

  clearInput(targetInputs);
}

function tableButtonEvent({ target }) {
  const { name, quantity, product, changes } = applyProduct(target, this.$props.tabData);

  if (!purchaseValidate({ quantity, changes }, name)) return;

  this.$storage.creation(PURCHASE_MENU, {
    ...this.$props.tabData,
    [PRODUCT_ADD]: product,
    [CHARGE_AMOUNT]: changes,
  });
}

function divButtonEvent() {
  const { tabData } = this.$props;
  const [changes, leftChanges] = coinExchange(tabData[CHARGE_AMOUNT], tabData[MACHINE_MANAGE]);

  this.$storage.creation(PURCHASE_MENU, {
    ...tabData,
    [MACHINE_MANAGE]: [...changes],
    [CHARGE_AMOUNT]: leftChanges,
  });
}

export default class Main extends Component {
  initialized() {
    this.$props = { ...this.$props, tabData: this.itemGetter(this.$props.component) };
    this.$eventBus.addEvent('form', 'button', 'click', formButtonEvent.bind(this));
    this.$eventBus.addEvent('table', 'button', 'click', tableButtonEvent.bind(this));
    this.$eventBus.addEvent('.changes', 'button', 'click', divButtonEvent.bind(this));
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
}
