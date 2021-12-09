import { default as UI } from './templates.js';
import { $, default as DOM } from './DOMUtils.js';

export default class View {
  constructor() {
    $('#app').insertAdjacentHTML('beforeend', UI.commonHTML);
  }

  showProductPurchase() {
    DOM.initElement('#component');

    $('#component').insertAdjacentHTML('beforeend', UI.productPurchaseHTML);
  }
}
