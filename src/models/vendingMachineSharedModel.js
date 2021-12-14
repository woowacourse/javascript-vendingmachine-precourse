import Observable from '../abstracts/observable.js';
import { ELEMENT_IDS, LOCAL_STORAGE_KEY } from '../constants.js';

class VendingMachineSharedModel extends Observable {
  static instance = null;

  activeTabPaneId = '';

  productItems = [];

  constructor() {
    if (VendingMachineSharedModel.instance) {
      return VendingMachineSharedModel.instance;
    }
    super();
    const proxy = new Proxy(this, {
      set: this.handleUpdate,
    });
    VendingMachineSharedModel.instance = proxy;
    return proxy;
  }

  handleUpdate(target, key, value) {
    // eslint-disable-next-line no-param-reassign
    target[key] = value;
    if (key !== 'observers') {
      target.saveDataToLocalStorage();
      target.notifyAll();
    }
    return true;
  }

  addProductItem(newItem) {
    let hasSameItem = false;
    const productItems = this.productItems.map((item) => {
      if (newItem.name === item.name && newItem.price === item.price) {
        hasSameItem = true;
        return { name: item.name, price: item.price, quantity: item.quantity + newItem.quantity };
      }
      return item;
    });
    if (hasSameItem) {
      this.productItems = productItems;
      return;
    }
    this.productItems = [...productItems, newItem];
  }

  loadDataFromLocalStorage() {
    const json = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (json === null) {
      this.activeTabPaneId = ELEMENT_IDS.PRODUCT_ADD_PANE;
      this.productItems = [];
      return;
    }
    const data = JSON.parse(json);
    this.activeTabPaneId = data.activeTabPaneId;
    this.productItems = data.productItems;
  }

  saveDataToLocalStorage() {
    const data = {
      activeTabPaneId: this.activeTabPaneId,
      productItems: this.productItems,
    };
    const json = JSON.stringify(data);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, json);
  }
}

export default VendingMachineSharedModel;
