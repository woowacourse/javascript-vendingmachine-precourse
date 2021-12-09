export default class VendingMachineView {
  constructor() {
    this.app = document.querySelector('#app');
  }

  render() {
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
    this.menuContainer.setAttribute('id', 'menu-container');

    const contentContainer = document.createElement('main');
    contentContainer.setAttribute('id', 'content-container');

    this.app.appendChild(this.menuContainer);
    this.app.appendChild(contentContainer);
  }

  renderMenu() {
    this.productAddMenuButton = this.renderMenuButton('product-add-menu', '상품 관리');
    this.vendingMachineManageMenuButton = this.renderMenuButton('vending-machine-manage-menu', '잔돈 충전');
    this.productPurchaseMenuButton = this.renderMenuButton('product-purchase-menu', '상품 구매');
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
