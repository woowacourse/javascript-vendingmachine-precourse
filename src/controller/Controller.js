import Coins from '../model/Coins.js';
import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';
import CheckEventTarget from './CheckEventTarget.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.coin = new Coins();
    this.checkEventTarget = new CheckEventTarget(this.render, this.coin);
    this.$app = document.querySelector(DOM.$APP);
    this.main();
  }

  onClickMainTemplateButton = () => {
    this.$app.addEventListener('click', (event) => {
      const $productAddMenu = document.querySelector(DOM.$PRODUCT_ADD_MENU);
      this.checkEventTarget.isProductAddMenu(event.target, $productAddMenu);

      const $vendingMachineManageMenu = document.querySelector(DOM.$VENDING_MACHINE_MANAGE_MENU);
      this.checkEventTarget.isVendingMachineManageMenu(event.target, $vendingMachineManageMenu);
    });
  };

  renderMainTemplate = () => {
    this.render.mainTemplate();
  };

  main = () => {
    this.renderMainTemplate();
    this.onClickMainTemplateButton();
  };
}
