import Component from '../core/Component.js';
import { newElement, replaceFirstChild } from '../utils/dom.js';
import { MENU } from '../utils/constants.js';

import MachineManagement from './MachineManagement/index.js';
import ProductManagement from './ProductManagement/index.js';
import Purchase from './Purchase/index.js';

const renderByStatus = {
  [MENU.PRODUCT_PURCHASE]: new Purchase(newElement('<div id="contents"/>')),
  [MENU.MACHINE_MANAGEMENT]: new MachineManagement(
    newElement('<div id="contents"/>')
  ),
  [MENU.PRODUCT_MANAGEMENT]: new ProductManagement(
    newElement('<div id="contents"/>')
  ),
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
