import VendingMachineManageView from './vendingMachineManageView.js';
import LocalStorageUtils from '../utils/localStorageUtils.js';
import ValidateUtils from '../utils/validateUtils.js';
import { BUTTON, INPUT } from './vendingMachineManageViewInfo.js';
import { $ } from '../utils/common.js';

export default class VendingMachineManageComponent {
  constructor() {
    this.vendingMachineManageView = new VendingMachineManageView();
  }

  render() {
    this.vendingMachineManageView.render();
    this.configureButton();
    this.renderAmountText();
  }

  configureButton() {
    $(`#${BUTTON.ID}`).addEventListener('click', this.onClickButton);
  }

  onClickButton = () => {
    const inputCoin = Number($(`#${INPUT.ID}`).value);

    if (ValidateUtils.checkInputAmount(inputCoin)) {
      this.saveRamdomCoins(inputCoin);
      this.renderAmountText();
      this.vendingMachineManageView.showCoinCount();
    }
  };

  generateRandomNumber(remain) {
    const numberList = [500, 100, 50, 10];
    let randomNumber = MissionUtils.Random.pickNumberInList(numberList);
    if (randomNumber > remain) {
      randomNumber = this.generateRandomNumber(remain);
    }
    return randomNumber;
  }

  saveRamdomCoins(coin) {
    let coinStatus = LocalStorageUtils.getMachineManageTableItem();

    while (coin) {
      const randomCoin = this.generateRandomNumber(coin);
      coinStatus[randomCoin] += 1;
      coin -= randomCoin;
    }

    LocalStorageUtils.setMachineManageTableItem(coinStatus);
  }

  calculateAmount() {
    let coinStatus = LocalStorageUtils.getMachineManageTableItem();
    let totalAmount = Object.entries(coinStatus).reduce((prev, curr) => {
      return prev + Number(curr[0]) * curr[1];
    }, 0);

    return totalAmount;
  }

  renderAmountText() {
    const amount = this.calculateAmount();
    this.vendingMachineManageView.showAmountText(amount);
  }
}
