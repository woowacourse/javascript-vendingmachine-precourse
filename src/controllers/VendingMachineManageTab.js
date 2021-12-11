import { coinList } from '../constants/index.js';
import { coinIndex } from '../utils/index.js';
import { isValidChargeAmount } from '../utils/validations.js';
import VendingMachineManageTabView from '../views/VendingMachineManageTabView.js';

export default class VendingMachineManageTab {
  constructor(storage) {
    this.view = new VendingMachineManageTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.render(this.storage.vendingMachineCharge);
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
    if (!isValidChargeAmount(amountToAdd)) return;
    const newCoinQuantity = this.generateCoinsRandomly(amountToAdd)
      .map((quantity, idx) => quantity + this.storage.vendingMachineCharge.coinQuantity[idx]);
    const newAmount = this.storage.vendingMachineCharge.amount + amountToAdd;
    this.storage.setVendingMachineCharge({ amount: newAmount, coinQuantity: newCoinQuantity });
    this.view.updateVendingMachineChargeValues(this.storage.vendingMachineCharge);
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
