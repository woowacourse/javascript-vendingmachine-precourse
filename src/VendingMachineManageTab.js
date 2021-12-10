import { coinList } from './constants/index.js';
import { coinIndex } from './utils/index.js';
import { getVendingMachineCharge, setVendingMachineCharge } from './utils/localStorage.js';
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
    console.log(this.vendingMachineCharge);
  }

  initInputElements() {
    this.vendingMachineChargeInput = document.querySelector('#vending-machine-charge-input');
  }

  setButtonClickEvent() {
    const vendingMachineChargeButton = document.querySelector('#vending-machine-charge-button');
    vendingMachineChargeButton.addEventListener('click', this.onClickVendingMachineChargeButton.bind(this));
  }

  onClickVendingMachineChargeButton(e) {
    e.preventDefault();
    const amountToAdd = Number(this.vendingMachineChargeInput.value);
    const amount = this.vendingMachineCharge.amount + amountToAdd;
    const coinQuantity = this.generateCoinsRandomly(amountToAdd)
      .map((quantity, idx) => quantity + this.vendingMachineCharge.coinQuantity[idx]);
    this.vendingMachineCharge = { amount, coinQuantity };
    setVendingMachineCharge(this.vendingMachineCharge);
    console.log(this.vendingMachineCharge);
    this.clearInputValue();
  }

  generateCoinsRandomly(amount) {
    let leftMoney = amount;
    const coinQuantity = [0, 0, 0, 0];
    while (leftMoney) {
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
