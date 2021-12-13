import { $, ID, CLASS } from '../utils/dom.js';
import { productPurchaseMenuTemplate } from '../utils/templates.js';
import { RULES, ERROR_MSG, LS_KEY } from '../utils/constants.js';

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
    $('table').addEventListener('click', this.handleTableClick);
    $(`#${ID.COIN_RETURN_BTN}`).addEventListener('click', this.handleCoinReturnClick);
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
    $(`#${ID.CHARGE_AMOUNT}`).innerHTML = this.chargeAmount;
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
    const isValid = this.validateChargeAmount(chargeAmountInput);
    if (!isValid) {
      alert(ERROR_MSG.PRODUCT_PURCHASE);
    }
    if (isValid) {
      this.saveChargeAmount(chargeAmountInput);
      this.paintChargeAmount();
      this.clearInputs();
    }
  };

  handleCoinReturnClick = () => {
    // TODO: 현재 자판기가 보유한 동전들: (VendingMachineManage의 loadCharges와 어떻게 병합할 수 있을지 궁리해보기)
    const currentCharges = localStorage.getItem(LS_KEY.VENDING_MACHINE_MANAGE_CHARGES);
    if (!currentCharges) {
      return;
    }
    const parsedCharges = JSON.parse(currentCharges);
    for (let i = 0; i < parsedCharges.length; i++) {
      if (this.chargeAmount <= 0) {
        break;
      }
      const obj = parsedCharges[i];
      const currentChargeAmount = this.chargeAmount;
      const coinCount = Math.min(
        parseInt(currentChargeAmount / obj.coinType),
        obj.quantity
      );
      this.updateChargeAmount(obj.coinType * coinCount);
      this.paintCoin(obj.coinType, coinCount);
      // TODO: VendingMachineManage의 updateCharges()와 로직 거의 동일. 어떻게 모듈화할지 궁리하기
      this.updateCharges(parsedCharges, obj.coinType, coinCount);
    }
    this.paintChargeAmount();
  };

  validateChargeAmount = (chargeAmountInput) => {
    if (chargeAmountInput < RULES.MIN_PRICE_UNIT) {
      return false;
    }
    if (chargeAmountInput % RULES.MIN_PRICE_UNIT) {
      return false;
    }
    return true;
  };

  saveChargeAmount = (chargeAmountInput) => {
    this.chargeAmount += chargeAmountInput;
    localStorage.setItem(LS_KEY_CHARGE_AMOUNT, JSON.stringify(this.chargeAmount));
    return;
  };

  paintProduct = (product) => {
    const $table = $(`tbody`);
    const $newTableRow = document.createElement('tr');
    $newTableRow.classList.add(CLASS.PRODUCT_PURCHASE_ITEM);

    const $newTableData__name = document.createElement('td');
    const $newTableData__price = document.createElement('td');
    const $newTableData__quantity = document.createElement('td');

    const $newTableData__purchase = document.createElement('td');
    const $newTableData__purchaseBtn = document.createElement('button');
    $newTableData__purchaseBtn.innerHTML = '구매하기';
    $newTableData__purchase.appendChild($newTableData__purchaseBtn);

    $newTableData__name.innerHTML = product.name;
    $newTableData__price.innerHTML = product.price;
    $newTableData__quantity.innerHTML = product.quantity;
    $newTableData__name.classList.add(CLASS.PRODUCT_PURCHASE_NAME);
    $newTableData__price.classList.add(CLASS.PRODUCT_PURCHASE_PRICE);
    $newTableData__quantity.classList.add(CLASS.PRODUCT_PURCHASE_QUANTITY);
    $newTableData__purchaseBtn.classList.add(CLASS.PURCHASE_BTN);

    $newTableData__name.dataset.productName = product.name;
    $newTableData__price.dataset.productPrice = product.price;
    $newTableData__quantity.dataset.productQuantity = product.quantity;

    $newTableRow.appendChild($newTableData__name);
    $newTableRow.appendChild($newTableData__price);
    $newTableRow.appendChild($newTableData__quantity);
    $newTableRow.appendChild($newTableData__purchase);
    $table.appendChild($newTableRow);
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
    localStorage.setItem(LS_KEY_CHARGE_AMOUNT, JSON.stringify(this.chargeAmount));
  };
  paintCoin = (coinType, quantity) => {
    if (coinType === 500) $(`#${ID.COIN_500_QUANTITY}`).innerHTML = `${quantity}개`;
    if (coinType === 100) $(`#${ID.COIN_100_QUANTITY}`).innerHTML = `${quantity}개`;
    if (coinType === 50) $(`#${ID.COIN_50_QUANTITY}`).innerHTML = `${quantity}개`;
    if (coinType === 10) $(`#${ID.COIN_10_QUANTITY}`).innerHTML = `${quantity}개`;
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
  paintTemplate = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = productPurchaseMenuTemplate();
  };

  clearInputs = () => {
    $(`#${ID.CHARGE_INPUT}`).value = '';
  };
}
