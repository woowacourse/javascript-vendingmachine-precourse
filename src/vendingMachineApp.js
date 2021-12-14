import { BUTTONS_INFO } from './header/headerViewInfo.js';
import { $ } from './utils/common.js';
import HeaderView from './header/headerView.js';
import ProductAddComponent from './productAdd/productAddComponent.js';

export default class VendingMachineApp {
  constructor() {
    this.headerView = new HeaderView();
    this.productAddComponent = new ProductAddComponent();
  }
}
