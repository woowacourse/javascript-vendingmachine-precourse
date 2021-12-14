export const $app = document.getElementById('app');

export default class VendingMachineView {
  constructor() {
    this.$app = $app;
    this.render();
  }

  render() {
    this.renderContainer();
    this.renderTab();
  }

  renderTabs(id, value) {
    const menuTab = document.createElement('button');
    menuTab.setAttribute('id', id);
    menuTab.innerHTML = value;
    this.menuTabs.appendChild(menuTab);
    return menuTab;
  }

  renderTab() {
    this.manageProductTab = this.renderTabs('manage', '상품 관리');
    this.changeChargeTab = this.renderTabs('change', '잔돈 충전');
    this.buyProductTab = this.renderTabs('buy', '상품 구매');
  }

  renderContainer() {
    const title = document.createElement('h1');
    title.innerHTML = '🥤자판기🥤';
    this.$app.appendChild(title);

    this.menuTabs = document.createElement('div');
    this.menuTabs.setAttribute('id', 'menuTabs');

    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tabContent');

    this.$app.appendChild(this.menuTabs);
    this.$app.appendChild(tabContent);
  }
}
