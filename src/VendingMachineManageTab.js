import { coinList } from './constants/index.js';
import { coinIndex } from './utils/index.js';
import { getVendingMachineCharge, setVendingMachineCharge } from './utils/localStorage.js';
import { isValidVendingMachineChargeAmount } from './utils/validations.js';
import VendingMachineManageTabView from './views/VendingMachineManageTabView.js';

export default class VendingMachineManageTab {
  constructor() {
    this.view = new VendingMachineManageTabView();
  }

  initialize() {
    this.vendingMachineCharge = getVendingMachineCharge();
    this.view.render(this.vendingMachineCharge);
    this.initInputElements();
    this.setButtonClickEvent();
  }

  initInputElements() {
    this.vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input');
  }

  setButtonClickEvent() {
    const vendingMachineChargeButton = document.querySelector('#vending-machine-charge-button');
    vendingMachineChargeButton.addEventListener('click', this.onClickVendingMachineCharging.bind(this));
  }

  onClickVendingMachineCharging(e) {
    e.preventDefault();
    const amountToAdd = Number(this.vendingMachineChargeInput.value);
    if (!isValidVendingMachineChargeAmount(amountToAdd)) return;
    const newCoinQuantity = this.generateCoinsRandomly(amountToAdd)
      .map((quantity, idx) => quantity + this.vendingMachineCharge.coinQuantity[idx]);
    const newAmount = this.vendingMachineCharge.amount + amountToAdd;
    this.vendingMachineCharge = { amount: newAmount, coinQuantity: newCoinQuantity };
    setVendingMachineCharge(this.vendingMachineCharge);
    this.view.updateVendingMachineChargeValues(this.vendingMachineCharge);
    this.clearInputValue();
  }

  generateCoinsRandomly(amount) {
    let leftMoney = amount;
    const coinQuantity = [0, 0, 0, 0];
    while (leftMoney > 0) {
      const randomCoin = MissionUtils.Random.pickNumberInList(coinList);
      if (randomCoin <= leftMoney) {
        leftMoney -= randomCoin;
        coinQuantity[coinIndex(randomCoin)] += 1;
      }
    }
    return coinQuantity;
  }

  clearInputValue() {
    this.vendingMachineChargeInput.value = '';
  }
}
