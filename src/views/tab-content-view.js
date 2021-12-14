import { htmlToElement } from '../utils.js';
import { ELEMENT_CLASSES } from '../constants.js';
import Observer from '../abstracts/observer.js';
import ProductAddController from '../controllers/product-add-controller.js';
import VendingMachineManageController from '../controllers/vending-machine-manage-controller.js';

class TabContentView extends Observer {
  static template = `<div class="${ELEMENT_CLASSES.TAB_CONTENT}"></div>`;

  activeController = null;

  constructor($container) {
    super(ELEMENT_CLASSES.TAB_CONTENT);
    this.$container = $container;
  }

  mount() {
    const $tabContent = htmlToElement(TabContentView.template);
    this.$container.appendChild($tabContent);
    this.bindingElements();
    this.registerObserver();
  }

  unmount() {
    this.activeController.unmountView();
    this.unregisterObserver();
    this.$container.replaceChildren();
  }

  bindingElements() {
    this.$tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
  }

  renderTabPaneById(activeTabPaneId) {
    if (this.activeController) {
      this.activeController.unmountView();
    }
    this.activeController = this.createTabPaneContollerById(activeTabPaneId);
    this.activeController.mountView();
  }

  createTabPaneContollerById = (id) => {
    return new VendingMachineManageController();
  }

  notify() {
    const { activeTabPaneId } = this.model;
    if (this.$tabContent.childNodes.length > 0) {
      const tabPane = this.$tabContent.childNodes[0];
      const tabPaneId = tabPane.getAttribute('id');
      if (activeTabPaneId === tabPaneId) {
        return;
      }
    }
    this.renderTabPaneById(activeTabPaneId);
  }
}

export default TabContentView;
