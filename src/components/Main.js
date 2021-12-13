import Component from '../core/Component.js';
import { newElement, replaceFirstChild } from '../utils/dom.js';
import { MENU } from '../utils/constants.js';

import MachineManagementTab from './MachineManagementTab/index.js';
import ProductManagementTab from './ProductManagementTab/index.js';
import PurchaseTab from './PurchaseTab/index.js';

const renderByStatus = {
  [MENU.PRODUCT_PURCHASE]: new PurchaseTab(newElement('<div id="contents"/>')),
  [MENU.MACHINE_MANAGEMENT]: new MachineManagementTab(
    newElement('<div id="contents"/>')
  ),
  [MENU.PRODUCT_MANAGEMENT]: new ProductManagementTab(
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
