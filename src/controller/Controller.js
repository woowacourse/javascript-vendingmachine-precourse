import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';
import ProductAdd from './ProductAdd.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.$app = document.querySelector(DOM.$APP);
    this.main();
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener('click', () => {
      const productAdd = new ProductAdd();
      productAdd.getNameInput();
      productAdd.getPriceInput();
    });
  };

  onClickMainTemplateButton = () => {
    this.$app.addEventListener('click', (event) => {
      const $productAddMenu = document.querySelector(DOM.$PRODUCT_ADD_MENU);
      if (event.target === $productAddMenu) {
        this.render.productAddMenuTemplate();
        this.onClickProductAddButton();
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
