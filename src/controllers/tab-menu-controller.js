import { ELEMENT_IDS } from '../constants.js';
import TabMenuView from '../views/tab-menu-view.js';
import VendingMachineSharedModel from '../models/vending-machine-shared-model.js';

class TabMenuController {
  constructor() {
    this.model = new VendingMachineSharedModel();
    const $app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    this.view = new TabMenuView($app);
  }

  mountView() {
    this.view.mount();
    this.registerEventListener();
  }

  registerEventListener() {
    this.view.menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (e) => this.handleClickMenu(e));
    });
  }

  handleClickMenu(e) {
    const tabPaneId = e.currentTarget.getAttribute('data-tab-pane-id');
    this.model.activeTabPaneId = tabPaneId;
  }
}

export default TabMenuController;
