import ProductPurchaseController from "../controllers/ProductPurchaseController.js";
import { productPurchaseTemplete, renderAblePurchaseProductList, renderCharge } from "../utils/dom/productPurchaseTemplete.js";
import { moneyAddValidate } from "../utils/validation/moneyAdd.js";

export default class ProductPurchaseView extends ProductPurchaseController {

  render() {
    this.productPurchaseField.innerHTML = productPurchaseTemplete;
    this.$app.append(this.productPurchaseField);
  }

  setEvent() {
    this.productPurchaseField.querySelector('#charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      const insertMoney  = this.productPurchaseField.querySelector('input').value;
      moneyAddValidate(insertMoney) 
      ? (this.validInsertMoney = insertMoney, this.renderMoney(), this.getInsertMoney())
      : "";
    })
  }

  renderMoney() {
    const $moneyWrap = document.querySelector('#charge-amount');
    this.puchaseMoneyResult 
    ? $moneyWrap.innerText = this.puchaseMoneyResult
    : this.loacalTotalInsertMoney && !this.validInsertMoney ? $moneyWrap.innerText = this.loacalTotalInsertMoney : "";
    !this.loacalTotalInsertMoney && this.validInsertMoney ? $moneyWrap.innerText = this.validInsertMoney : "";
    this.loacalTotalInsertMoney && this.validInsertMoney ? $moneyWrap.innerText = (Number(this.validInsertMoney) + Number(this.loacalTotalInsertMoney)) : ""; 
  }

  renderLocalPurchase() {
    const $produtAblePurchaseWrap = document.querySelector('#product-purchase-wrap');
    $produtAblePurchaseWrap.innerHTML = "";
    this.purchaseProductResult
    ? this.purchaseProductResult.map(productInfo => $produtAblePurchaseWrap.append(renderAblePurchaseProductList(productInfo)))
    : this.localProductList.map(v => $produtAblePurchaseWrap.append(renderAblePurchaseProductList(v)));
  }

  setPurchaseEvent() {
    this.productPurchaseField.querySelector('#product-purchase-wrap').addEventListener('click', ({ target }) => {
      if (target.classList.contains('purchase-button')) {
        this.purchaseProduct = [...target.closest('tr').childNodes]
        .map(info => info.dataset)
        .filter(info => info !== undefined)
        .map(info => info.productName || info.productPrice || info.productQuantity)
        .filter(info => info !== undefined);
      }
      this.purchaseProductEvent();
    })
  }

  setReutrnEvent() {
    const $chargeReturnButton = document.querySelector('#coin-return-button');
    $chargeReturnButton.addEventListener('click', (e) => {
      this.returnCharge();
    })
  }
  
  renderChargeResult() {
    this.chargeResult && renderCharge(this.chargeResult);
    this.localReturnCharge && renderCharge(this.localReturnCharge);
    this.renderMoney();
  }

}