import { ELEMENT_IDS } from './constants.js';
import VendingMachineSharedModel from './models/vending-machine-shared-model.js';
import HeaderView from './views/header-view.js';
import TabMenuController from './controllers/tab-menu-controller.js';
import TabContentView from './views/tab-content-view.js';

class VendingMachine {
  activeController = null;

  constructor() {
    this.$app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    this.model = new VendingMachineSharedModel();
    this.mountViews();
    this.model.loadDataFromLocalStorage();
  }

  mountViews() {
    new HeaderView(this.$app).mount();
    new TabMenuController().mountView();
    new TabContentView(this.$app).mount();
  }
}

document.addEventListener('DOMContentLoaded', () => new VendingMachine());
