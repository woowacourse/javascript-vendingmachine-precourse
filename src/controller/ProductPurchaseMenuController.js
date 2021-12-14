import { getData, setData } from "../utils/localStorage.js";
import ProductPurchaseMenuView from "../views/ProductPurchaseMenuView.js";

export default class VendingMachineManageMenuController {
  constructor() {
    this.productPurchaseMenuView = new ProductPurchaseMenuView();
  }

  initialize() {
    this.money = getData("money");
    this.btnClickEvent();
  }

  btnClickEvent() {
    const chargeButton = document.querySelector("#charge-button");
    chargeButton.addEventListener("click", this.onClickChargeButton.bind(this));
  }

  onClickChargeButton(e) {
    e.preventDefault();
    const chargeInput = document.querySelector("#charge-input");
    const newMoney = Number(chargeInput.value);
    const money = this.money + newMoney;
    let postData = getData("money");
    postData = money;
    setData("money", postData);
    this.productPurchaseMenuView.render(getData("products"), getData("money"));
    this.initialize();
  }
}

// localStorage.setItem("money", 3000)
