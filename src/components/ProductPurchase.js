import {
  $,
  paintTemplate,
  createTRow,
  createTData,
  clearInputs,
  ID,
  CLASS,
} from '../utils/dom.js';
import { productPurchaseMenuTemplate } from '../utils/templates.js';
import { ERROR_MSG, LS_KEY, COIN, CHARGE_INIT } from '../utils/constants.js';
import {
  load,
  isSmallerThanMinUnit,
  cannotBeDividedByMinUnit,
} from '../utils/controller.js';

export default class ProductPurchase {
  constructor() {
    this.chargeAmount = 0;
    this.availableProducts = [];
    this.coinToBeReturned = CHARGE_INIT;
    this.init();
  }

  init = () => {
    paintTemplate(productPurchaseMenuTemplate);
    this.chargeAmount = load(LS_KEY.PRODUCT_PURCHASE_CHARGE_AMOUNT);
    this.availableProducts = load(LS_KEY.PRODUCT_ADD_PRODUCTS);

    this.paintChargeAmount();
    this.paintAvailableProducts();
    this.paintCoinToBeReturned();

    $('form').addEventListener('submit', this.handleProductPurchaseSubmit);
    $('table').addEventListener('click', this.handleTableClick);
    $(`#${ID.COIN_RETURN_BTN}`).addEventListener('click', this.handleCoinReturnClick);
  };

  paintChargeAmount = () => {
    $(`#${ID.CHARGE_AMOUNT}`).innerHTML = this.chargeAmount;
  };

  paintAvailableProducts = () => {
    this.availableProducts.map((product) => this.paintProduct(product));
  };

  paintCoinToBeReturned = () => {
    this.coinToBeReturned.map(({ coinType, quantity }) => {
      if (coinType === COIN.FIVE_HUNDRED)
        $(`#${ID.COIN_500_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === COIN.A_HUNDRED)
        $(`#${ID.COIN_100_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === COIN.FIFTY)
        $(`#${ID.COIN_50_QUANTITY}`).innerHTML = `${quantity}개`;
      if (coinType === COIN.TEN)
        $(`#${ID.COIN_10_QUANTITY}`).innerHTML = `${quantity}개`;
    });
  };

  handleProductPurchaseSubmit = (e) => {
    e.preventDefault();
    const $chargeInput = $(`#${ID.CHARGE_INPUT}`);
    const chargeAmountInput = parseInt($chargeInput.value);
    const isValid = this.validateChargeAmount(chargeAmountInput);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_PURCHASE);
    }
    if (isValid) {
      this.saveChargeAmount(chargeAmountInput);
      this.paintChargeAmount();
      clearInputs([$chargeInput]);
    }
  };

  handleCoinReturnClick = () => {
    const currentCharges = load(LS_KEY.VENDING_MACHINE_MANAGE_CHARGES);
    for (let i = 0; i < currentCharges.length; i++) {
      if (this.chargeAmount <= 0) break;
      const obj = currentCharges[i];
      const currentChargeAmount = this.chargeAmount;
      const coinCount = Math.min(
        parseInt(currentChargeAmount / obj.coinType),
        obj.quantity
      );
      this.updateChargeAmount(obj.coinType * coinCount);
      this.paintCoin(obj.coinType, coinCount);
      this.updateCharges(currentCharges, obj.coinType, coinCount);
    }
    this.paintChargeAmount();
  };

  validateChargeAmount = (chargeAmountInput) => {
    if (isSmallerThanMinUnit(chargeAmountInput)) {
      return false;
    }
    if (cannotBeDividedByMinUnit(chargeAmountInput)) {
      return false;
    }
    return true;
  };

  saveChargeAmount = (chargeAmountInput) => {
    this.chargeAmount += chargeAmountInput;
    localStorage.setItem(
      LS_KEY.PRODUCT_PURCHASE_CHARGE_AMOUNT,
      JSON.stringify(this.chargeAmount)
    );
    return;
  };

  handleTableClick = (e) => {
    const clickedRow = e.target.closest('.product-purchase-item');
    const targetName = clickedRow.children[0].dataset.productName;
    const targetPrice = clickedRow.children[1].dataset.productPrice;
    this.purchase(targetName, targetPrice);
  };

  purchase = (targetName, targetPrice) => {
    this.updateAvailableProducts(targetName);
    this.updateChargeAmount(targetPrice);
    this.paintChargeAmount();
    $(`tbody`).innerHTML = '';
    this.paintAvailableProducts();
  };

  updateAvailableProducts = (targetName) => {
    this.availableProducts.map((obj) => {
      if (obj.name === targetName) {
        obj.quantity -= 1;
      }
    });
    localStorage.setItem(
      LS_KEY.PRODUCT_ADD_PRODUCTS,
      JSON.stringify(this.availableProducts)
    );
  };

  updateChargeAmount = (targetPrice) => {
    this.chargeAmount -= targetPrice;
    localStorage.setItem(
      LS_KEY.PRODUCT_PURCHASE_CHARGE_AMOUNT,
      JSON.stringify(this.chargeAmount)
    );
  };

  updateCharges = (parsedCharges, coinType, quantity) => {
    parsedCharges.map((obj) => {
      if (obj.coinType === coinType) {
        obj.quantity -= quantity;
      }
    });
    localStorage.setItem(
      LS_KEY.VENDING_MACHINE_MANAGE_CHARGES,
      JSON.stringify(parsedCharges)
    );
  };

  paintCoin = (coinType, quantity) => {
    if (coinType === COIN.FIVE_HUNDRED)
      $(`#${ID.COIN_500_QUANTITY}`).innerHTML = `${quantity}개`;
    if (coinType === COIN.A_HUNDRED)
      $(`#${ID.COIN_100_QUANTITY}`).innerHTML = `${quantity}개`;
    if (coinType === COIN.FIFTY)
      $(`#${ID.COIN_50_QUANTITY}`).innerHTML = `${quantity}개`;
    if (coinType === COIN.TEN) $(`#${ID.COIN_10_QUANTITY}`).innerHTML = `${quantity}개`;
  };

  paintProduct = ({ name, price, quantity }) => {
    const $table = $(`tbody`);
    const $newTableRow = createTRow(CLASS.PRODUCT_PURCHASE_ITEM);
    const $newTableData__name = createTData(CLASS.PRODUCT_PURCHASE_NAME, name);
    const $newTableData__price = createTData(CLASS.PRODUCT_PURCHASE_PRICE, price);
    const $newTableData__quantity = createTData(
      CLASS.PRODUCT_PURCHASE_QUANTITY,
      quantity
    );
    const $newTableData__purchase = createTData(CLASS.PURCHASE_TD, '');
    const $newTableData__purchaseBtn = document.createElement('button');
    $newTableData__purchaseBtn.innerHTML = '구매하기';
    $newTableData__purchaseBtn.classList.add(CLASS.PURCHASE_BTN);

    $newTableData__name.dataset.productName = name;
    $newTableData__price.dataset.productPrice = price;
    $newTableData__quantity.dataset.productQuantity = quantity;

    $newTableData__purchase.appendChild($newTableData__purchaseBtn);
    $newTableRow.append(
      $newTableData__name,
      $newTableData__price,
      $newTableData__quantity,
      $newTableData__purchase
    );
    $table.appendChild($newTableRow);
  };
}
