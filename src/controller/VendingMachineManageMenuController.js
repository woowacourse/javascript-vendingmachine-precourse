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
    console.log(coinArray);
  }
}

// localStorage.setItem("coins", JSON.stringify({"amount": 0, "500": 0, "100": 0, "50": 0, "10": 0}))
