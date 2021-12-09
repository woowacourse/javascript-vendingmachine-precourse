import { $ } from '../utils/utils.js';
import { default as UI } from './templates.js';

export default class View {
  constructor() {
    $('#app').insertAdjacentHTML('beforeend', UI.commonHTML);
  }

  showProductPurchase() {
    $('#app').insertAdjacentHTML('beforeend', UI.productPurchaseHTML);
  }
}
