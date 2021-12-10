import Component from '../core/Component.js';
import UIStore from '../stores/UIStore.js';
import { newElement } from '../utils/dom.js';
import { MENU } from '../utils/constants.js';

import Management from './Management/index.js';
import ProductAdd from './ProductAdd/index.js';
import Purchase from './Purchase/index.js';

const renderByStatus = {
  [MENU.PRODUCT_PURCHASE]: new Purchase(newElement('<div id="purchase"/>')),
  [MENU.MACHINE_MANAGE]: new Management(newElement('<div id="productAdd"/>')),
  [MENU.PRODUCT_ADD]: new ProductAdd(newElement('<div id="management"/>')),
};

export default class Main extends Component {
  getGlobalState() {
    return UIStore.getState();
  }

  render() {
    const { VISITING_MENU } = this.getGlobalState();
    this.$container.innerHTML = renderByStatus[VISITING_MENU].returnHTML();
  }
}
