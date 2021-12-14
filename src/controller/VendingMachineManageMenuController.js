import { getData, setData } from "../utils/localStorage.js";
import VendingMachineManageMenuView from "../views/VendingMachineManageMenuView.js";
import { getRandomCoinArray } from "../utils/random.js";

export default class VendingMachineManageMenuController {
  constructor() {
    this.vendingMachineManageMenuView = new VendingMachineManageMenuView();
  }

  initialize() {
    this.coins = getData("coins");
    this.btnClickEvent();
  }

  btnClickEvent() {
    const vendingMachineChargeButton = document.querySelector(
      "#vending-machine-charge-button"
    );
    vendingMachineChargeButton.addEventListener(
      "click",
      this.onClickVendingMachineChargeButton.bind(this)
    );
  }

  onClickVendingMachineChargeButton(e) {
    e.preventDefault();
    const vendingMachineChargeInput = document.querySelector(
      "#vending-machine-charge-input"
    );
    const newAmount = Number(vendingMachineChargeInput.value);
    this.saveAmount(newAmount);
    this.saveCoins(newAmount);
    this.initialize();
  }

  saveAmount(newAmount) {
    const amount = this.coins.amount + newAmount;
    const postData = getData("coins");
    postData.amount = amount;
    setData("coins", postData);
    this.vendingMachineManageMenuView.render(getData("coins"));
  }

  saveCoins(newAmount) {
    const coinArray = getRandomCoinArray(newAmount);
    const postData = getData("coins");
    postData.coin10Quantity += coinArray[0];
    postData.coin50Quantity += coinArray[1];
    postData.coin100Quantity += coinArray[2];
    postData.coin500Quantity += coinArray[3];
    setData("coins", postData);
    this.vendingMachineManageMenuView.render(getData("coins"));
  }
}

// localStorage.setItem("coins", JSON.stringify({"amount": 0, "500": 0, "100": 0, "50": 0, "10": 0}))
