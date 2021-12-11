import Component from '../core/Component.js';
import { newElement, replaceFirstChild } from '../utils/dom.js';
import { MENU } from '../utils/constants.js';

import Management from './Management/index.js';
import ProductAdd from './ProductAdd/index.js';
import Purchase from './Purchase/index.js';

const renderByStatus = {
  [MENU.PRODUCT_PURCHASE]: new Purchase(newElement('<div id="contents"/>')),
  [MENU.MACHINE_MANAGE]: new Management(newElement('<div id="contents"/>')),
  [MENU.PRODUCT_ADD]: new ProductAdd(newElement('<div id="contents"/>')),
};

export default class Main extends Component {
  render() {
    const { selectedMenu } = this.props;
    replaceFirstChild(
      this.$container,
      renderByStatus[selectedMenu].returnRoot()
    );
  }
}
