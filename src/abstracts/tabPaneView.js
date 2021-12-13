import Observer from './observer.js';
import { ELEMENT_CLASSES } from '../constants.js';
import VendingMachineSharedModel from '../models/vendingMachineSharedModel.js';

class TabPaneView extends Observer {
  constructor(id) {
    super(id);
    this.model = new VendingMachineSharedModel();
    this.model.registerObserver(this);
  }

  mount($content) {
    const $tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
    $tabContent.appendChild($content);
  }

  unmount() {
    this.model.unregisterObserver(this);
    const $tabContent = document.querySelector(`.${ELEMENT_CLASSES.TAB_CONTENT}`);
    $tabContent.replaceChildren();
  }
}

export default TabPaneView;
