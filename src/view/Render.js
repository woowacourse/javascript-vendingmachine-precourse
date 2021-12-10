import SetLocalStorage from '../model/SetLocalStorage.js';
import { TEMPLATE, DOM } from '../utils/constant.js';

export default class Render {
  constructor(coins) {
    this.coins = coins;
    this.setLocalStorage = new SetLocalStorage(this.coins);
    this.$app = document.querySelector(DOM.$APP);
  }

  inputFocus = ($element) => $element.focus();

  alertMessage = (message) => alert(message);

  haveTemplate = (template) => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = template;
  };

  vendingMachineChargeTableTemplate = (coin10, coin50, coin100, coin500) => {
    const $vendingMachineCoin10Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_10_QUANTITY);
    $vendingMachineCoin10Quantity.textContent = coin10 + '개';

    const $vendingMachineCoin50Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_50_QUANTITY);
    $vendingMachineCoin50Quantity.textContent = coin50 + '개';

    const $vendingMachineCoin100Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_100_QUANTITY);
    $vendingMachineCoin100Quantity.textContent = coin100 + '개';

    const $vendingMachineCoin500Quantity = document.querySelector(DOM.$VENDING_MACHINE_COIN_500_QUANTITY);
    $vendingMachineCoin500Quantity.textContent = coin500 + '개';

    this.setLocalStorage.coinsInfo();
  };

  vendingMachineChargeAmountTemplate = (vendingMachineChargeAmount) => {
    const $vendingMachineChargeAmount = document.querySelector(DOM.$VENDING_MACHINE_CHARGE_AMOUNT);
    $vendingMachineChargeAmount.textContent = vendingMachineChargeAmount + '원';
  };

  vendingMachineManageMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.VENDING_MACHINE_MANAGE_MENU;
  };

  productAddManageTableTemplate = (productName, productPrice, productQuantity) => {
    const $tr = document.createElement('tr');
    $tr.setAttribute('class', 'product-manage-item');
    $tr.innerHTML = TEMPLATE.PRODUCT_MANAGE_TBODY(productName, productPrice, productQuantity);

    const $productManageTbody = document.querySelector(DOM.$PRODUCT_MANAGE_TBODY);
    $productManageTbody.appendChild($tr);

    this.setLocalStorage.productAddMenu();
  };

  productAddMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.PRODUCT_ADD_MENU;
  };

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };
}
