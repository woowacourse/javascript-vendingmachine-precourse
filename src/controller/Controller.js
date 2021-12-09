import { DOM } from '../utils/constant.js';
import Render from '../view/Render.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.main();
  }

  onMainTemplateButtonClick = () => {
    DOM.$APP.addEventListener('click', (event) => {
      if (event.target === DOM.$PRODUCT_ADD_MENU) {
        this.render.productAddMenuTemplate();
      }
    });
  };

  main = () => {
    this.onMainTemplateButtonClick();
  };
}
