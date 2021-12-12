import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';

export default {
  init() {
    LayoutView.setup(document.querySelector('#app'));
    TabView.setup(document.querySelector('#tab-view')).on('changeTab', (e) =>
      this.onChangeTab(e.detail.tabName),
    );

    this.selectedTab = '상품';
  },

  onChangeTab(tabName) {
    this.selectedTab = tabName;
    console.log(this.selectedTab);
  },
};
