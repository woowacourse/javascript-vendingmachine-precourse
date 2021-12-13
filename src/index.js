import { ELEMENT_CLASSES, ELEMENT_IDS } from './constants.js';
import { htmlToElement } from './utils.js';
import { headerTemplate, tabMenuTemplate, tabContentTemplate } from './templates.js';
import VendingMachineSharedModel from './models/vendingMachineSharedModel.js';
import Observer from './abstracts/observer.js';
import ProductAddController from './controllers/productAddController.js';

class VendingMachine extends Observer {
  activeController = null;

  constructor() {
    super(ELEMENT_IDS.APP);
    this.app = document.querySelector(`#${ELEMENT_IDS.APP}`);
    this.model = new VendingMachineSharedModel();
    this.model.registerObserver(this);
    this.mountViews();
    this.registerEventListeners();
    this.model.loadDataFromLocalStorage();
  }

  mountViews() {
    this.mountHeader();
    this.mountTabMenu();
    this.mountTabContent();
  }

  mountHeader() {
    const header = htmlToElement(headerTemplate);
    this.app.appendChild(header);
  }

  mountTabMenu() {
    const tabMenuView = htmlToElement(tabMenuTemplate);
    this.app.appendChild(tabMenuView);
  }

  mountTabContent() {
    const tabContent = htmlToElement(tabContentTemplate);
    this.app.appendChild(tabContent);
  }

  registerEventListeners() {
    const { TAB_CONTENT } = ELEMENT_CLASSES;
    const buttons = document.querySelectorAll(`.${TAB_CONTENT} button`);
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => this.handleClickMenu(e));
    });
  }

  handleClickMenu(e) {
    const tabPaneId = e.currentTarget.getAttribute('data-tab-pane-id');
    this.model.activeTabPaneId = tabPaneId;
  }

  updateTabPane(activeTabPaneId) {
    if (this.activeController) {
      this.activeController.unmountView();
    }
    this.activeController = this.createTabPaneContollerById(activeTabPaneId);
    this.activeController.mountView();
  }

  createTabPaneContollerById = (id) => {
    return new ProductAddController();
  }

  notify() {
    const { activeTabPaneId } = this.model;
    const tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
    if (tabContent.childNodes.length > 0) {
      const tabPane = tabContent.childNodes[0];
      const tabPaneId = tabPane.getAttribute('id');
      if (activeTabPaneId === tabPaneId) {
        return;
      }
    }
    this.updateTabPane(activeTabPaneId);
  }
}

document.addEventListener('DOMContentLoaded', () => new VendingMachine());
