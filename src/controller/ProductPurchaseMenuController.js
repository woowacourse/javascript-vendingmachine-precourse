import { getData, setData } from "../utils/localStorage.js";
import ProductPurchaseMenuView from "../views/ProductPurchaseMenuView.js";

export default class VendingMachineManageMenuController {
  constructor() {
    this.productPurchaseMenuView = new ProductPurchaseMenuView();
    this.products = getData("products");
    this.money = getData("money");
  }

  initialize() {
    this.money = getData("money");
    this.btnClickEvent();
  }

  btnClickEvent() {
    const chargeButton = document.querySelector("#charge-button");
    chargeButton.addEventListener("click", this.onClickChargeButton.bind(this));
    this.purchaseBtnClickEvent();
  }

  purchaseBtnClickEvent() {
    const purchaseButtons = document.querySelectorAll(".purchase-button");
    purchaseButtons.forEach((button) => {
      button.addEventListener("click", this.onClickPurchaseButton.bind(this));
    });
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

  onClickPurchaseButton(e) {
    const { productName, productPrice, productQuantity } = e.target.dataset;
    const productIndex = this.products.findIndex(
      (product) => product.name === productName
    );
    if (this.money >= productPrice) {
      this.money -= productPrice;
      this.products[productIndex] = {
        ...this.products[productIndex],
        quantity: productQuantity - 1,
      };
    }
    this.saveAmount(productIndex);
    this.initialize();
  }

  saveAmount(productIndex) {
    const postData = getData("products");
    postData[productIndex].quantity = this.products[productIndex].quantity;
    setData("products", postData);
    this.productPurchaseMenuView.render(getData("products"), getData("money"));
  }
}
