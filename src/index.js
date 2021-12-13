import { ID } from './constants/selector.js';
import { Container } from './components/elements.js';
import ProductAddMenuView from './components/productAddMenu/productAddMenuView.js';
import VendingMachineManageView from './components/vendingMachineManageMenu/vendingMachineManageMenuView.js';
import ProductPurchaseMenuView from './components/productPurchaseMenu/productPurchaseMenuView.js';
import HeaderView from './components/header/headerView.js';

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

const vendingMachine = new App(document.querySelector(`#${ID.APP}`));
vendingMachine.render();
