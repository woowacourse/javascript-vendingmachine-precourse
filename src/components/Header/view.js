import { $ } from '../../utils/dom.js';
import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { Container, Title } from '../Element/elements.js';
import { createTabNav } from './element.js';
import ProductAddMenuView from '../ProductAddMenu/view.js';
import VendingMachineManageView from '../VendingMachineManageMenu/view.js';
import ProductPurchaseMenuView from '../ProductPurchaseMenu/view.js';

export default function HeaderView() {
  const productAddMenu = new ProductAddMenuView();
  const vendingMachinManageMenu = new VendingMachineManageView();
  const productPurchaseMenu = new ProductPurchaseMenuView();

  this.header = () => {
    const header = Container(ID.HEADER);
    const title = Title(MACHINE.TITLE);
    const tabNav = createTabNav(this.onClickMenuTabButton);

    header.append(title, tabNav);

    return header;
  };

  this.initMenuViewContainer = () => {
    const menuViewContainer = $(`#${ID.MENU_VIEW}`);

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
    const container = $(`#${ID.APP}`);

    container.append(this.header());
  };
}
