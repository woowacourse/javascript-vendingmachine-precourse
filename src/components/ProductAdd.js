import { $, ID } from '../utils/dom.js';
import { productAddMenuTemplate } from '../utils/templates.js';

export default class ProductAdd {
  constructor() {
    this.init();
  }

  init = () => {
    $(`#${ID.PAGE_CONTENT}`).innerHTML = productAddMenuTemplate();
  };
}
