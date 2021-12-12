import { $, ID, CLASS } from '../utils/dom.js';
import { productPurchaseMenuTemplate } from '../utils/templates.js';
import { LS_KEY } from '../utils/constants.js';

const LS_KEY_CHARGE_AMOUNT = LS_KEY.PRODUCT_PURCHASE_CHARGE_AMOUNT;

export default class ProductPurchase {
  constructor() {
    this.chargeAmount = 0;
    this.availableProducts = [];
    this.coinToBeReturned = [
      { coinType: 500, quantity: 0 },
      { coinType: 100, quantity: 0 },
      { coinType: 50, quantity: 0 },
      { coinType: 10, quantity: 0 },
    ];
    this.init();
  }

  init = () => {
    this.paintTemplate();
    this.loadChargeAmount();
    this.loadAvailableProducts();

    this.paintChargeAmount();
    this.paintAvailableProducts();
    this.paintCoinToBeReturned();

    $('form').addEventListener('submit', this.handleProductPurchaseSubmit);
  };

  loadChargeAmount = () => {
    const loadedChargeAmount = localStorage.getItem(LS_KEY_CHARGE_AMOUNT);
    if (!loadedChargeAmount) {
      return;
    }
    const parsedChargeAmount = JSON.parse(loadedChargeAmount);
    this.chargeAmount = parsedChargeAmount;
    return;
  };

  loadAvailableProducts = () => {
    const loadedAvailableProducts = localStorage.getItem(LS_KEY.PRODUCT_ADD_PRODUCTS);
    if (!loadedAvailableProducts) {
      return;
    }
    const parsedAvailableProducts = JSON.parse(loadedAvailableProducts);
    this.availableProducts = parsedAvailableProducts;
    return;
  };

  paintChargeAmount = () => {
    $(`#${ID.CHARGE_AMOUNT}`).innerHTML = `${this.chargeAmount}원`;
    return;
  };

  paintAvailableProducts = () => {
    this.availableProducts.map((product) => this.paintProduct(product));
  };

  paintCoinToBeReturned = () => {
    this.coinToBeReturned.map(({ coinType, quantity }) => {
      if (coinType === 500) $(`#${ID.COIN_500_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === 100) $(`#${ID.COIN_100_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === 50) $(`#${ID.COIN_50_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === 10) $(`#${ID.COIN_10_QUANTITY}`).innerHTML = `${quantity}개`;
    });
  };

  handleProductPurchaseSubmit = (e) => {
    e.preventDefault();
    const chargeAmountInput = parseInt($(`#${ID.CHARGE_INPUT}`).value);
    this.saveChargeAmount(chargeAmountInput);
    this.clearInputs();
    return;
  };

  saveChargeAmount = (chargeAmountInput) => {
    this.chargeAmount += chargeAmountInput;
    localStorage.setItem(LS_KEY_CHARGE_AMOUNT, JSON.stringify(this.chargeAmount));
    return;
  };

  paintProduct = (product) => {
    const $table = $(`table`);
    const $newTableRow = document.createElement('tr');
    $newTableRow.classList.add(CLASS.PRODUCT_PURCHASE_ITEM);

    const $newTableData__name = document.createElement('td');
    const $newTableData__price = document.createElement('td');
    const $newTableData__quantity = document.createElement('td');
    const $newTableData__purchaseBtn = document.createElement('button');
    $newTableData__name.innerHTML = product.name;
    $newTableData__price.innerHTML = product.price;
    $newTableData__quantity.innerHTML = product.quantity;
    $newTableData__purchaseBtn.innerHTML = '구매하기';
    $newTableData__name.classList.add(CLASS.PRODUCT_PURCHASE_NAME);
    $newTableData__price.classList.add(CLASS.PRODUCT_PURCHASE_PRICE);
    $newTableData__quantity.classList.add(CLASS.PRODUCT_PURCHASE_QUANTITY);
    $newTableData__purchaseBtn.classList.add(CLASS.PURCHASE_BTN);

    $newTableRow.appendChild($newTableData__name);
    $newTableRow.appendChild($newTableData__price);
    $newTableRow.appendChild($newTableData__quantity);
    $newTableRow.appendChild($newTableData__purchaseBtn);
    $table.appendChild($newTableRow);
  };

  paintTemplate = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = productPurchaseMenuTemplate();
  };

  clearInputs = () => {
    $(`#${ID.CHARGE_INPUT}`).value = '';
  };
}
