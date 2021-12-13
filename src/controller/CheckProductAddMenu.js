import SetProductAdd from './SetProductAdd.js';
import { DOM, LOCAL_STORAGE, EVENT } from '../utils/constant.js';

export default class CheckProductAddMenu {
  constructor(render, product) {
    this.render = render;
    this.product = product;
  }

  onClickProductAddButton = () => {
    const $productAddButton = document.querySelector(DOM.$PRODUCT_ADD_BUTTON);
    $productAddButton.addEventListener(EVENT.CLICK, () => {
      this.setProductAdd = new SetProductAdd(this.render, this.product);
      this.setProductAdd.setProduct();
    });
  };

  hasTemplate = () => {
    const productAddMenuTemplate = localStorage.getItem(LOCAL_STORAGE.PRODUCT_ADD_MENU);
    if (!productAddMenuTemplate) {
      this.render.productAddMenuTemplate();
      this.onClickProductAddButton();

      return;
    }

    this.render.haveTemplate(productAddMenuTemplate);
    this.onClickProductAddButton();
  };
}
