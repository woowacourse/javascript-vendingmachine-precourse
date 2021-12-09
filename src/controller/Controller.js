import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';
import SetProductAdd from '../model/SetProductAdd.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.$app = document.querySelector(DOM.$APP);
    this.main();
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener('click', () => {
      new SetProductAdd(this.render);
    });
  };

  onClickMainTemplateButton = () => {
    this.$app.addEventListener('click', (event) => {
      const $productAddMenu = document.querySelector(DOM.$PRODUCT_ADD_MENU);
      if (event.target === $productAddMenu) {
        this.render.productAddMenuTemplate();
        this.onClickProductAddButton();
      }

      const $vendingMachineManageMenu = document.querySelector(DOM.$VENDING_MACHINE_MANAGE_MENU);
      if (event.target === $vendingMachineManageMenu) {
        this.render.vendingMachineManageMenuTemplate();
      }
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
