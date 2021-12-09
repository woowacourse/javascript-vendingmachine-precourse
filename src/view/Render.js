import { TEMPLATE, DOM } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  alertMessage = (message) => {
    alert(message);
  };

  productAddMenuTemplate = () => {
    const $vendingMachineSection = document.querySelector(DOM.$VENDING_MACHINE_SECTION);
    $vendingMachineSection.innerHTML = TEMPLATE.PRODUCT_ADD_MENU;
  };

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };
}
