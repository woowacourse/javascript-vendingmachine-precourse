import { Container } from './components/elements.js';
import ProductAddMenuView from './components/productAddMenu/productAddMenuView.js';
import VendingMachineManageView from './components/vendingMachineManageMenu/vendingMachineManageMenuView.js';
import ProductPurchaseMenuView from './components/productPurchaseMenu/productPurchaseMenuView.js';
import HeaderView from './components/header/headerView.js';

export default function App(app) {
  this.header = new HeaderView();
  this.menuViewContainer = Container('menu-view');
  this.productAddMenu = new ProductAddMenuView(this.menuViewContainer);
  this.vendingMachineManage = new VendingMachineManageView(
    this.menuViewContainer
  );
  this.productPurchaseMenu = new ProductPurchaseMenuView(
    this.menuViewContainer
  );

  this.render = () => {
    this.header.render();
    app.append(this.menuViewContainer);
  };
}

const vendingMachine = new App(document.querySelector('#app'));
vendingMachine.render();
