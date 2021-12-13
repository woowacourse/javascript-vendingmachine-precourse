import ProductPurchase from '../elements/ProductPurchase.js';
import { checkPurchasePrice, checkPurchaseQuantity } from '../utils/validators/checkPurchase.js';
import { ALERT, PRODUCT_PURCHASE } from '../constants.js';
import ProductAdd from '../elements/ProductAdd.js';

export default class PurchaseBtnHandler {
  constructor(tableRow) {
    this.tableRow = tableRow;
    this.purchaseBtn();
    this.productPurchase = new ProductPurchase();
    this.productAdd = new ProductAdd();
  }

  purchaseBtn() {
    const btn = this.tableRow.querySelector('.purchase-button');
    btn.addEventListener('click', e => {
      e.preventDefault();
      console.log('물품 구매');
      this.getPurchaseProduct(btn);
    });
  }

  getPurchaseProduct(b) {
    const productTr = b.parentNode;
    console.log(productTr);
    const name = productTr.querySelector('.product-purchase-name').dataset.productName;
    const price = productTr.querySelector('.product-purchase-price').dataset.productPrice;
    const quantityElement = productTr.querySelector('.product-purchase-quantity');
    const quantity = quantityElement.dataset.productQuantity;
    this.checkPurchase(quantityElement, name, price, quantity);
  }

  checkPurchase(element, name, price, quantity) {
    this.getCoinAmount();
    if (checkPurchasePrice(this.coinAmount, price) && checkPurchaseQuantity(quantity)) {
      this.coinAmount -= price;
      this.renderCoinAmount(this.coinAmount);
      quantity -= 1;
      element.innerHTML = quantity;
      element.dataset.productQuantity = quantity;
      this.renderProductAddTable(name, quantity);
    }
  }

  getCoinAmount() {
    const coin = Number(document.querySelector('#charge-amount').dataset.amount);
    console.log(coin);
    if (!coin) {
      alert(ALERT.NO_PRICE);
      return;
    }
    this.coinAmount = coin;
  }

  renderProductAddTable(name, quantity) {
    const addTh = this.productAdd.tableBody.querySelectorAll('.product-manage-name');
    let addThQuantityTag = '';
    for (let th of addTh) {
      if (th.dataset.addName == name) {
        addThQuantityTag = th.parentNode.querySelector('.product-manage-quantity');
      }
    }
    console.log(addThQuantityTag);
    addThQuantityTag.innerHTML = quantity;
    addThQuantityTag.dataset.addQuantity = quantity;
  }

  renderCoinAmount(coinAmount) {
    this.productPurchase.amount.innerHTML = PRODUCT_PURCHASE.COIN_STORAGE + coinAmount;
    this.productPurchase.amount.setAttribute('data-amount', coinAmount);
  }
}
