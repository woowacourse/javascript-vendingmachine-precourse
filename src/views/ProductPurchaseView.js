import ProductPurchaseController from "../controllers/ProductPurchaseController.js";
import { ERROR_MESSAGE, NOTHING, NUMBER } from "../utils/constants.js";
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
      ? (this.validInsertMoney = insertMoney, this.getInsertMoney())
      : NOTHING;
      this.validInsertMoney = NUMBER.ZERO;
    })
  }

  renderMoney() {
    const $moneyWrap = document.querySelector('#charge-amount');
    this.loacalTotalInsertMoney ? $moneyWrap.innerText = this.loacalTotalInsertMoney : NOTHING;
    !this.loacalTotalInsertMoney && this.validInsertMoney ? $moneyWrap.innerText = this.validInsertMoney : NOTHING;
    !this.loacalTotalInsertMoney && !this.validInsertMoney ? $moneyWrap.innerText = "0" : NOTHING;
  }

  renderLocalPurchase() {
    const $produtAblePurchaseWrap = document.querySelector('#product-purchase-wrap');
    $produtAblePurchaseWrap.innerHTML = NOTHING;
    this.purchaseProductResult
    ? this.purchaseProductResult.map(productInfo => $produtAblePurchaseWrap.append(renderAblePurchaseProductList(productInfo)))
    : this.localProductList.map(product => $produtAblePurchaseWrap.append(renderAblePurchaseProductList(product)));
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
    $chargeReturnButton.addEventListener('click', () => {
      this.getRandomCoin();
      this.localRandomCoin.find(coin => coin !== NUMBER.ZERO)
      ? this.getReturnCharge()
      : alert(ERROR_MESSAGE.NOCOIN_IN_MACHINE);
      this.getRandomCoin();
    })
  }

  
  renderChargeResult() {
    !this.localReturnCharge && this.chargeResult ? renderCharge(this.chargeResult) : NOTHING;
    this.localReturnCharge && renderCharge(this.localReturnCharge);
    this.renderMoney();
  }

}