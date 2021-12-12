import { ID } from '../constants/selectors.js';

export default class VendingMachineView {
  constructor() {
    this.app = document.getElementById(ID.APP.CONTAINER);
  }

  initialRender() {
    this.renderTitle();
    this.renderContainer();
    this.renderMenu();
    this.setTableStyle();
  }

  renderTitle() {
    const appTitle = document.createElement('h1');
    appTitle.innerText = '🥤자판기🥤';
    this.app.appendChild(appTitle);
  }

  renderContainer() {
    this.menuContainer = document.createElement('nav');
    this.menuContainer.setAttribute('id', ID.MENU.CONTAINER);

    const contentContainer = document.createElement('main');
    contentContainer.setAttribute('id', ID.CONTENT.CONTAINER);

    this.app.appendChild(this.menuContainer);
    this.app.appendChild(contentContainer);
  }

  renderMenu() {
    this.productAddMenuButton = this.renderMenuButton(ID.MENU.PRODUCT_ADD, '상품 관리');
    this.vendingMachineManageMenuButton = this.renderMenuButton(ID.MENU.VENDING_MACHINE_MANAGE, '잔돈 충전');
    this.productPurchaseMenuButton = this.renderMenuButton(ID.MENU.PRODUCT_PURCHASE, '상품 구매');
  }

  renderMenuButton(valueOfID, innerText) {
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', valueOfID);
    menuButton.innerText = innerText;
    this.menuContainer.appendChild(menuButton);
    return menuButton;
  }

  setTableStyle() {
    const style = document.createElement('style');
    style.innerText = `
      table { border-collapse: collapse; border: solid 1px black; text-align: center; }
      th, td { border: solid 1px black; padding: 10px; }
    `;
    document.querySelector('head').appendChild(style);
  }
}
