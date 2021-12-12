import { Container } from './components/elements.js';
import Header from './components/header.js';
import ProductAddMenuView from './views/productAddMenuView.js';
import VendingMachineManageView from './views/vendingMachineManageMenuView.js';
import ProductPurchaseMenuView from './views/productPurchaseMenuView.js';

export default function VendingMachine(app) {
  this.header = Header();
  this.menuViewContainer = Container('menu-view');
  this.productAddMenu = new ProductAddMenuView(this.menuViewContainer);
  this.vendingMachineManage = new VendingMachineManageView(
    this.menuViewContainer
  );
  this.productPurchaseMenu = new ProductPurchaseMenuView(
    this.menuViewContainer
  );

  this.render = () => {
    app.append(this.header, this.menuViewContainer);
    this.productAddMenu.render();
    this.vendingMachineManage.render();
    this.productPurchaseMenu.render();
  };
}

const vendingMachine = new VendingMachine(document.querySelector('#app'));
vendingMachine.render();
