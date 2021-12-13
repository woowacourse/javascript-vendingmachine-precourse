import { ID } from '../../constants/selector.js';
import { Container, Title } from '../elements.js';
import { createTabNav } from './header.js';
import ProductAddMenuView from '../ProductAddMenu/productAddMenuView.js';
import VendingMachineManageView from '../VendingMachineManageMenu/vendingMachineManageMenuView.js';
import ProductPurchaseMenuView from '../ProductPurchaseMenu/productPurchaseMenuView.js';

export default function HeaderView() {
  const productAddMenu = new ProductAddMenuView();
  const vendingMachinManageMenu = new VendingMachineManageView();
  const productPurchaseMenu = new ProductPurchaseMenuView();

  this.header = () => {
    const header = Container('header');
    const title = Title('🥤 자판기 🥤');
    const tabNav = createTabNav(this.onClickMenuTabButton);

    header.append(title, tabNav);

    return header;
  };

  this.initMenuViewContainer = () => {
    const menuViewContainer = document.querySelector('#menu-view');

    menuViewContainer.innerHTML = '';
  };

  this.onClickMenuTabButton = (e) => {
    const targetId = e.target.id;

    this.initMenuViewContainer();

    if (targetId === ID.PRODUCT_ADD_MENU) {
      productAddMenu.render();
    }
    if (targetId === ID.VENDING_MACHINE_MANAGE_MENU) {
      vendingMachinManageMenu.render();
    }
    if (targetId === ID.PRODUCT_PURCHASE_MENU) {
      productPurchaseMenu.render();
    }
  };

  this.render = () => {
    const container = document.querySelector('#app');

    container.append(this.header());
  };
}
