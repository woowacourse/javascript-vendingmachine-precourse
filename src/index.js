import { ELEMENT_IDS } from './constants.js';
import { htmlToElement } from './utils.js';
import { headerTemplate, tabMenuTemplate } from './templates.js';
import VendingMachineSharedModel from './models/vendingMachineSharedModel.js';
import Observer from './abstracts/observer.js';

class VendingMachine extends Observer {
  constructor() {
    super(ELEMENT_IDS.APP);
    this.model = new VendingMachineSharedModel();
    this.model.registerObserver(this);
    this.mountViews();
    this.registerEventListeners();
  }

  mountViews() {
    this.mountHeader();
    this.mountTabMenu();
  }

  mountHeader() {
    const app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    const header = htmlToElement(headerTemplate);
    app.appendChild(header);
  }

  mountTabMenu() {
    const app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    const tabMenuView = htmlToElement(tabMenuTemplate);
    app.appendChild(tabMenuView);
  }

  registerEventListeners() {
    const buttons = document.querySelectorAll('.tab-menu button');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => this.handleClickMenu(e));
    });
  }

  handleClickMenu(e) {
    const tabPaneId = e.currentTarget.getAttribute('data-tab-pane-id');
    this.model.activeTabPaneId = tabPaneId;
  }

  notify() {
    const { activeTabPaneId } = this.model;
  }
}

document.addEventListener('DOMContentLoaded', () => new VendingMachine());
