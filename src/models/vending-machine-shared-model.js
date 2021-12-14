import Observable from '../abstracts/observable.js';
import { ELEMENT_IDS, LOCAL_STORAGE_KEY, INITIAL_COINS } from '../constants.js';
import { moneyToCoin } from '../utils.js';

class VendingMachineSharedModel extends Observable {
  static instance = null;

  activeTabPaneId = '';

  productItems = [];

  assetCoins = { ...INITIAL_COINS };

  chargeMoney = 0;

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

  addMoney(money) {
    const coins = moneyToCoin(money);
    const newCoins = Object.keys(this.assetCoins).reduce((acc, cur) => {
      acc[cur] = coins[cur] + this.assetCoins[cur];
      return acc;
    }, {});
    this.assetCoins = newCoins;
  }

  addChargeMoney(money) {
    this.chargeMoney += money;
  }

  loadDataFromLocalStorage() {
    const json = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const data = JSON.parse(json);
    this.activeTabPaneId = (data && data.activeTabPaneId) || ELEMENT_IDS.PRODUCT_ADD_PANE;
    this.productItems = (data && data.productItems) || [];
    this.assetCoins = (data && data.assetCoins) || { ...INITIAL_COINS };
    this.chargeMoney = (data && data.chargeMoney) || 0;
  }

  saveDataToLocalStorage() {
    const data = {
      activeTabPaneId: this.activeTabPaneId,
      productItems: this.productItems,
      assetCoins: this.assetCoins,
      chargeMoney: this.chargeMoney,
    };
    const json = JSON.stringify(data);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, json);
  }
}

export default VendingMachineSharedModel;
