import { TEMPLATE, DOM } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  inputFocus = ($element) => $element.focus();

  alertMessage = (message) => alert(message);

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
  };

  productAddMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.PRODUCT_ADD_MENU;
  };

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };
}
