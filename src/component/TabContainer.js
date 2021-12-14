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
      addProduct: this.addProduct.bind(this),
    });
    this.tabMachineManage = new TabMachineManage(this.$target, {
      rechargeCoin: this.rechargeCoin.bind(this),
    });
    this.tabPurchase = new TabPurchase(this.$target, {
      rechargeMoney: this.rechargeMoney.bind(this),
      purchaseProduct: this.purchaseProduct.bind(this),
      requestReturnCoin: this.requestReturnCoin.bind(this),
    });
  }

  showFocusedTab() {
    this.tabProductAdd.determineDisplaying();
    this.tabMachineManage.determineDisplaying();
    this.tabPurchase.determineDisplaying();
  }

  addProduct(name, price, quantity) {
    this.vendingMachine.addProduct(name, Number.parseInt(price, 10), Number.parseInt(quantity, 10));
    this.updateProductTable();
  }

  updateProductTable() {
    this.tabProductAdd.updateProductTable();
    this.tabPurchase.updateProductTable();
  }

  rechargeCoin(amount) {
    this.vendingMachine.rechargeCoin(Number.parseInt(amount, 10));
    this.updateRechargeState();
  }

  updateRechargeState() {
    this.tabMachineManage.updateRechargeState();
  }

  rechargeMoney(amount) {
    this.vendingMachine.rechargeMoney(Number.parseFloat(amount, 10));
    this.updateRechargeMoneyState();
  }

  updateRechargeMoneyState() {
    this.tabPurchase.updateRechargeMoneyState();
  }

  updateReturnedCoinTable() {
    this.tabPurchase.updateCoinTable();
  }

  purchaseProduct(product) {
    this.vendingMachine.sellProduct(product);

    this.updateProductTable();
    this.updateRechargeMoneyState();
  }

  requestReturnCoin() {
    this.vendingMachine.returnCoin();

    this.updateRechargeState();
    this.updateRechargeMoneyState();
    this.updateReturnedCoinTable();
  }
}
