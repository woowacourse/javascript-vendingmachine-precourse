import { $ } from '../utils/dom.js';
import { ELEMENT_SID, EVENT_TYPE, TAB } from '../utils/constants.js';

import ManageProductView from '../views/ManageProductView.js';
import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';

export default {
  init() {
    LayoutView.setup($(ELEMENT_SID.APP));
    TabView.setup($(ELEMENT_SID.TAB_VIEW)).on(EVENT_TYPE.CHANGE_TAB, (e) =>
      this.onChangeTab(e.detail.tabName),
    );
    ManageProductView.setup($(ELEMENT_SID.RESULT_VIEW));

    this.selectedTab = TAB.MANAGE_PRODUCT;
    this.renderView();
  },

  renderView() {
    switch (this.selectedTab) {
      case TAB.MANAGE_PRODUCT:
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
