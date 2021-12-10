import SetLocalStorage from '../model/SetLocalStorage.js';
import { TEMPLATE, DOM, STRING, SELECTOR } from '../utils/constant.js';

export default class Render {
  constructor(coins, product) {
    this.coins = coins;
    this.product = product;
    this.setLocalStorage = new SetLocalStorage(this.coins, this.product);
    this.$app = document.querySelector(DOM.$APP);
  }

  inputFocus = ($element) => $element.focus();

  alertMessage = (message) => alert(message);

  haveTemplate = (template) => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = template;
  };

  productPurchaseMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.PRODUCT_PURCHASE_MENU;
  };

  vendingMachineChargeTableTemplate = (coin10, coin50, coin100, coin500) => {
    const $vendingMachineCoin10Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_10_QUANTITY);
    $vendingMachineCoin10Quantity.textContent = coin10 + STRING.GAE;

    const $vendingMachineCoin50Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_50_QUANTITY);
    $vendingMachineCoin50Quantity.textContent = coin50 + STRING.GAE;

    const $vendingMachineCoin100Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_100_QUANTITY);
    $vendingMachineCoin100Quantity.textContent = coin100 + STRING.GAE;

    const $vendingMachineCoin500Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_500_QUANTITY);
    $vendingMachineCoin500Quantity.textContent = coin500 + STRING.GAE;

    this.setLocalStorage.coinsInformation();
  };

  vendingMachineChargeAmountTemplate = (vendingMachineChargeAmount) => {
    const $vendingMachineChargeAmount = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_AMOUNT);
    $vendingMachineChargeAmount.textContent = vendingMachineChargeAmount + STRING.WON;
  };

  vendingMachineManageMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.VENDING_MACHINE_MANAGE_MENU;
  };

  productAddManageTableTemplate = (productName, productPrice, productQuantity) => {
    const $tr = document.createElement(DOM.$TR);
    $tr.setAttribute(SELECTOR.CLASS, DOM.$PRODUCT_MANAGE_ITEM);
    $tr.innerHTML = TEMPLATE.PRODUCT_MANAGE_TBODY(productName, productPrice, productQuantity);

    const $productManageTbody = document.querySelector(DOM.$PRODUCT_MANAGE_TBODY);
    $productManageTbody.appendChild($tr);

    this.setLocalStorage.productInformation();
  };

  productAddMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.PRODUCT_ADD_MENU;
  };

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };
}
