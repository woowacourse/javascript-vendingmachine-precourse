import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.$app = document.querySelector(DOM.$APP);
    this.main();
  }

  onMainTemplateButtonClick = () => {
    this.$app.addEventListener('click', (event) => {
      const $productAddMenu = document.querySelector(DOM.$PRODUCT_ADD_MENU);
      if (event.target === $productAddMenu) {
        this.render.productAddMenuTemplate();
      }
    });
  };

  renderMainTemplate = () => {
    this.render.mainTemplate();
  };

  main = () => {
    this.renderMainTemplate();
    this.onMainTemplateButtonClick();
  };
}
