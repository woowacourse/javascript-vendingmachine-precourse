import { $ } from './utils/dom.js';
import { ID } from './constants/selector.js';
import { Container } from './components/elements.js';
import ProductAddMenuView from './components/ProductAddMenu/view.js';
import VendingMachineManageView from './components/VendingMachineManageMenu/view.js';
import ProductPurchaseMenuView from './components/ProductPurchaseMenu/view.js';
import HeaderView from './components/Header/view.js';

export default function App(app) {
  this.header = new HeaderView();
  this.menuViewContainer = Container(ID.MENU_VIEW);
  this.productAddMenu = new ProductAddMenuView();
  this.vendingMachineManage = new VendingMachineManageView();
  this.productPurchaseMenu = new ProductPurchaseMenuView();

  this.render = () => {
    this.header.render();
    app.append(this.menuViewContainer);
  };
}

const vendingMachine = new App($(`#${ID.APP}`));
vendingMachine.render();
