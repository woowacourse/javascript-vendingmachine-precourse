import Observable from '../abstracts/observable.js';
import { ELEMENT_IDS } from '../constants.js';

class VendingMachineSharedModel extends Observable {
  static instance;
  activeTabPaneId = ELEMENT_IDS.PRODUCT_ADD_MENU;

  constructor() {
    if (VendingMachineSharedModel.instance) return VendingMachineSharedModel.instance;
    super();
    // eslint-disable-next-line no-constructor-return
    return new Proxy(this, {
      set: this.handleUpdate,
    });
  }

  handleUpdate(target, key, value) {
    // eslint-disable-next-line no-param-reassign
    target[key] = value;
    if (key !== 'observers') {
      target.notifyAll();
    }
    return true;
  }
}

export default VendingMachineSharedModel;
