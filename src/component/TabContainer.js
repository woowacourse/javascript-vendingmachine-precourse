import VendingMachine from '../store/VendingMachine.js';
import TabProductAdd from './TabProductAdd.js';
import TabMachineManage from './TabMachineManage.js';
import TabPurchase from './TabPurchase.js';

export default class TabContainer {
  constructor($target) {
    this.$target = $target;
    this.tabProductAdd = null;
    this.tabMachineManage = null;
    this.tabPurchase = null;
    this.vendingMachine = new VendingMachine();

    this.init();
  }

  init() {
    this.tabProductAdd = new TabProductAdd(this.$target, {
      requestAddProduct: this.requestAddProduct.bind(this),
    });
    this.tabMachineManage = new TabMachineManage(this.$target, {
      requestRechargeCoin: this.requestRechargeCoin.bind(this),
    });
    this.tabPurchase = new TabPurchase(this.$target, {
      requestRechargeMoney: this.requestRechargeMoney.bind(this),
      requestPurchaseProduct: this.requestPurchaseProduct.bind(this),
      requestReturnCoin: this.requestReturnCoin.bind(this),
    });
  }

  showFocusedTab() {
    this.tabProductAdd.determineDisplaying();
    this.tabMachineManage.determineDisplaying();
    this.tabPurchase.determineDisplaying();
  }

  requestAddProduct(name, price, quantity) {
    this.vendingMachine.addProduct(name, Number.parseInt(price, 10), Number.parseInt(quantity, 10));
    this.updateProductTable();
  }

  requestRechargeCoin(amount) {
    this.vendingMachine.rechargeCoin(Number.parseInt(amount, 10));
    this.updateRechargeCoinState();
  }

  requestRechargeMoney(amount) {
    this.vendingMachine.rechargeMoney(Number.parseFloat(amount, 10));
    this.updateRechargeMoneyState();
  }

  requestPurchaseProduct(product) {
    this.vendingMachine.sellProduct(product);

    this.updateProductTable();
    this.updateRechargeMoneyState();
  }

  requestReturnCoin() {
    this.vendingMachine.returnCoin();

    this.updateRechargeCoinState();
    this.updateRechargeMoneyState();
    this.updateReturnedCoinTable();
  }

  updateProductTable() {
    this.tabProductAdd.rerenderProductTable();
    this.tabPurchase.rerenderProductTable();
  }

  updateRechargeCoinState() {
    this.tabMachineManage.rerenderChargedAmount();
    this.tabMachineManage.rerenderCoinTable();
  }

  updateRechargeMoneyState() {
    this.tabPurchase.rerenderCharginAmount();
  }

  updateReturnedCoinTable() {
    this.tabPurchase.rerenderCoinTable();
  }
}
