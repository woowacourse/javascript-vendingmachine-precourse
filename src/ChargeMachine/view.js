import { createContainer } from '../utils/createElementUtils.js';
import {
  ID_MACHINE_TAB,
  ID_MACHINE_CHARGE_AMOUNT,
  ID_MACHINE_CHARGE_INPUT,
  ID_MACHINE_CHARGE_SUBMIT,
  ID_MACHINE_COIN_500_QUANTITY,
  ID_MACHINE_COIN_100_QUANTITY,
  ID_MACHINE_COIN_50_QUANTITY,
  ID_MACHINE_COIN_10_QUANTITY,
} from './constants.js';
import {
  ChargeFormSection,
  ChargeFormSubmit,
  ChargeFormTitle,
  ChargeInput,
  ChargeSumLabel,
  ChargeSumSpan,
  CoinTableSection,
  CoinTableTitle,
  CoinTableWithRows,
} from './components.js';
import handleChargeInput from './eventhandler.js';
import { getChargeAmount } from './models.js';
import { getFromStorage } from '../store.js';
import {
  STRING_COIN_10,
  STRING_COIN_100,
  STRING_COIN_50,
  STRING_COIN_500,
} from '../globalConstants.js';

export default class ChargeMachine {
  constructor() {
    this.section = this.chargeMachineTab();
    this.DOMs = {};
    this.handleDOMs();
    this.renderChargeAmount(getChargeAmount());
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

  addDOM(key, id) {
    this.DOMs[key] = this.section.querySelector(`#${id}`);
  }

  handleDOMs() {
    this.addDOM('charge', ID_MACHINE_CHARGE_INPUT);
    this.addDOM('chargeSubmit', ID_MACHINE_CHARGE_SUBMIT);
    this.addDOM('chargeSum', ID_MACHINE_CHARGE_AMOUNT);
    this.addDOM(STRING_COIN_500, ID_MACHINE_COIN_500_QUANTITY);
    this.addDOM(STRING_COIN_100, ID_MACHINE_COIN_100_QUANTITY);
    this.addDOM(STRING_COIN_50, ID_MACHINE_COIN_50_QUANTITY);
    this.addDOM(STRING_COIN_10, ID_MACHINE_COIN_10_QUANTITY);
  }

  createFormContainer() {
    const container = ChargeFormSection();

    const button = ChargeFormSubmit();
    button.addEventListener('click', handleChargeInput.bind(this));
    const chargeSum = ChargeSumLabel;
    chargeSum.appendChild(ChargeSumSpan);

    container.appendChild(ChargeFormTitle);
    container.appendChild(ChargeInput);
    container.appendChild(button);
    container.appendChild(chargeSum);

    return container;
  }

  static createCoinContainer() {
    const container = CoinTableSection;
    const table = CoinTableWithRows;

    container.appendChild(CoinTableTitle);
    container.appendChild(table);

    return container;
  }

  renderChargeAmount(chargeAmount) {
    this.DOMs.chargeSum.innerText = chargeAmount;
    this.fillCoinGrids();
  }

  fillCoinGrids() {
    const coinObj = getFromStorage('coins') || {};
    Object.keys(coinObj).forEach((coin) => {
      this.DOMs[coin].innerText = `${coinObj[coin]}개`;
    });
  }

  clearForm() {
    this.DOMs.charge.value = '';
  }
}
