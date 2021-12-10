import { $ } from '../../utils/selector.js';
import { COIN_LIST, ID, LOCAL_DB } from '../../constants/index.js';
import { getRandomCoinArray } from '../../utils/makeCoinArray.js';
import {
  chargeInputTemplate,
  totalChargeTemplate,
} from '../../utils/template/chargeTemplate.js';
import { isValidChargeInput } from '../../utils/valid.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import Coin from '../../classes/Coin.js';

class ChargeInput {
  constructor($inputContainer, $totalContainer, state) {
    this.$inputContainer = $inputContainer;
    this.$totalContainer = $totalContainer;
    this.state = state;

    this.render();
  }

  render() {
    this.addTemplate();
    this.showTotalCharge();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$inputContainer.innerHTML = chargeInputTemplate();
  }

  showTotalCharge() {
    this.$totalContainer.innerHTML = totalChargeTemplate();
  }

  selectDom() {
    this.$chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    this.$chargeButton = $(`#${ID.VENDING_MACHINE_CHARGE_BUTTON}`);
  }

  addEvent() {
    this.$chargeButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton() {
    const amount = Number(this.$chargeInput.value);
    if (!isValidChargeInput(amount)) {
      return;
    }

    this.updateLocalStorage(amount);
    this.updateView();
  }

  updateLocalStorage(amount) {
    const coinStorage = getLocalStorage(LOCAL_DB.COIN);
    if (!coinStorage.length) {
      COIN_LIST.forEach(name => {
        coinStorage.push(new Coin(name));
      });
    }

    const coinArray = getRandomCoinArray(amount);
    coinArray.forEach((v, i) => (coinStorage[i].count += v));
    saveLocalStorage(LOCAL_DB.COIN, coinStorage);
  }

  updateView() {
    this.showTotalCharge();
    this.state.updateState();
  }
}

export default ChargeInput;
