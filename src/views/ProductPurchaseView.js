import ProductPurchaseController from "../controllers/ProductPurchaseController.js";
import { productPurchaseTemplete } from "../utils/dom/productPurchaseTemplete.js";

export default class ProductPurchaseView extends ProductPurchaseController {

  render() {
    this.productPurchaseField.innerHTML = productPurchaseTemplete;
    this.$app.append(this.productPurchaseField);
  }

  setEvent() {
    this.productPurchaseField.querySelector('#charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.insertMoney = this.productPurchaseField.querySelector('input').value;
      this.renderMoney();
    })
  }

  renderMoney() {
    const $moneyWrap = document.querySelector('#charge-amount');
    $moneyWrap.innerText = this.insertMoney;
  }

}