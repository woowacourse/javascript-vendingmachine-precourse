import { MACHINE_MANAGE, PRODUCT_ADD, PURCHASE_MENU } from '../../constants/index.js';
import machineManage from './machineManage.js';
import productAdd from './productAdd.js';
import purchaseMenu from './purchaseMenu.js';

const Content = ({ component, tabData }) => {
  switch (component) {
    case PRODUCT_ADD: {
      return productAdd(tabData);
    }
    case MACHINE_MANAGE: {
      return machineManage(tabData);
    }
    case PURCHASE_MENU: {
      return purchaseMenu(tabData);
    }
    default:
      return '';
  }
};

export default Content;
