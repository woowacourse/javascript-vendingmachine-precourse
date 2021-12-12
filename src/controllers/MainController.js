import ManageProductView from '../views/ManageProductView.js';
import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';

export default {
  init() {
    LayoutView.setup(document.querySelector('#app'));
    TabView.setup(document.querySelector('#tab-view')).on('changeTab', (e) =>
      this.onChangeTab(e.detail.tabName),
    );
    ManageProductView.setup(document.querySelector('#result-view'));

    this.selectedTab = '상품 관리';
  },

  renderView() {
    switch (this.selectedTab) {
      case '상품 관리':
        this.renderManageProductView();
        break;

      default:
        break;
    }
  },

  renderManageProductView() {
    ManageProductView.render();
  },

  onChangeTab(tabName) {
    this.selectedTab = tabName;
    this.renderView();
  },
};
