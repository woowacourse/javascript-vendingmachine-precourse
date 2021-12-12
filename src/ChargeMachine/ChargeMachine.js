import {
  createAmountP,
  createContainer,
  createElements,
  createGridDiv,
  customCreateElement,
} from '../CreateElementUtils.js';
import {
  CHARGE_MACHINE_FORM_CONTAINER_ITEMS,
  COIN_IN_MACHINE_ITEMS,
  ID_MACHINE_TAB,
  ID_MACHINE_CHARGE_AMOUNT,
  ID_MACHINE_COIN_STATUS,
  STRING_CHARGE_AMOUNT_LABEL,
  TITLE_COIN_IN_MACHINE,
  VAL_GRID_COLUMN_SIZE,
  ID_MACHINE_CHARGE_INPUT,
  ID_MACHINE_CHARGE_SUBMIT,
  ID_MACHINE_COIN_500_QUANTITY,
  ID_MACHINE_COIN_100_QUANTITY,
  ID_MACHINE_COIN_50_QUANTITY,
  ID_MACHINE_COIN_10_QUANTITY,
  STRING_COIN_500,
  STRING_COIN_50,
  STRING_COIN_100,
  STRING_COIN_10,
} from './ChargeMachine.constant.js';
import MachineOperations from '../MachineOperations/MachineOperation.js';
import { getAllCoins } from '../Utils.js';

export default class ChargeMachine {
  constructor() {
    this.section = this.chargeMachineTab();
    this.DOMs = {};
    this.section.addEventListener('load', this.handleDOMs());
  }

  chargeMachineTab() {
    const formContainer = this.createFormContainer();
    const coinStatusContainer = this.constructor.createCoinContainer();

    return createContainer(
      document.createElement('section'),
      [formContainer, coinStatusContainer],
      ID_MACHINE_TAB,
    );
  }

  handleDOMs() {
    this.addDOM('charge', ID_MACHINE_CHARGE_INPUT);
    this.addDOM('chargeSubmit', ID_MACHINE_CHARGE_SUBMIT);
    this.addDOM('chargeSum', ID_MACHINE_CHARGE_AMOUNT);
    this.addDOM(STRING_COIN_500, ID_MACHINE_COIN_500_QUANTITY);
    this.addDOM(STRING_COIN_100, ID_MACHINE_COIN_100_QUANTITY);
    this.addDOM(STRING_COIN_50, ID_MACHINE_COIN_50_QUANTITY);
    this.addDOM(STRING_COIN_10, ID_MACHINE_COIN_10_QUANTITY);

    // render charge amount
    this.renderCharged();
  }

  addDOM(key, id) {
    this.DOMs[key] = this.section.querySelector(`#${id}`);
  }

  createFormContainer() {
    const formContainer = createContainer(
      document.createElement('div'),
      createElements(CHARGE_MACHINE_FORM_CONTAINER_ITEMS),
    );
    formContainer.children[formContainer.children.length - 1].addEventListener(
      'click',
      this.handleChargeSubmit.bind(this),
    );

    formContainer.append(
      createAmountP(STRING_CHARGE_AMOUNT_LABEL, ID_MACHINE_CHARGE_AMOUNT),
    );

    return formContainer;
  }

  handleChargeSubmit() {
    const chargeInput = this.DOMs.charge.value * 1;
    const registered = MachineOperations.registerCoin(chargeInput);

    if (registered) {
      this.renderCharged();
      this.DOMs.charge.value = '';
    }
  }

  renderCharged() {
    this.DOMs.chargeSum.innerText = MachineOperations.getChargeSum();
    this.constructor.fillCoinGrids.bind(this)();
  }

  static fillCoinGrids() {
    const coinObj = getAllCoins() || {};
    Object.keys(coinObj).forEach((coin) => {
      this.DOMs[coin].innerText = coinObj[coin];
    });
  }

  static createCoinContainer() {
    const grid = createContainer(
      document.createElement('div'),
      [createGridDiv(VAL_GRID_COLUMN_SIZE, COIN_IN_MACHINE_ITEMS)],
      ID_MACHINE_COIN_STATUS,
    );

    return createContainer(document.createElement('section'), [
      customCreateElement({
        tag: 'h2',
        value: TITLE_COIN_IN_MACHINE,
      }),
      grid,
    ]);
  }
}
