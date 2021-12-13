import { CUSTOM_EVENT_NAME, TAB_TYPE } from './constants.js';

export default class Controller {
  constructor(
    {
      tabView,
      productManagementView,
      chargingChangeView,
      purchasingProductView,
    },
    store,
  ) {
    this.tabView = tabView;
    this.productManagementView = productManagementView;
    this.chargingChangeView = chargingChangeView;
    this.purchasingProductView = purchasingProductView;

    this.store = store;

    this.clickedTab = store.clickedTab;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.handleProductManagementView();
    this.handleChargingChangeView();
    this.handlePurchasingProductView();
    this.handleTabView();
  }

  handleProductManagementView() {
    this.productManagementView.on(CUSTOM_EVENT_NAME.ADD_PRODUCT, (event) =>
      this.handleAddProduct(event),
    );
  }

  handleChargingChangeView() {
    this.chargingChangeView.on(CUSTOM_EVENT_NAME.CHARGE_CHANGES, (event) =>
      this.handleChargeChanges(event),
    );
  }

  handlePurchasingProductView() {
    this.purchasingProductView
      .on(CUSTOM_EVENT_NAME.PURCHASE_PRODUCT, (event) =>
        this.handlePurchaseProduct(event),
      )
      .on(CUSTOM_EVENT_NAME.ADD_PUTTED_MONEY, (event) =>
        this.handleAddPuttedMoney(event),
      )
      .on(CUSTOM_EVENT_NAME.RETURN_EXCHANGES, () =>
        this.handleReturnExchanges(),
      );
  }

  handleTabView() {
    this.tabView
      .on(CUSTOM_EVENT_NAME.SHOW_PRODUCT_PURCHASE_MENU, () =>
        this.handleShowProductPurchaseMenu(),
      )
      .on(CUSTOM_EVENT_NAME.SHOW_VENDING_MACHINE_MANAGE_MENU, () =>
        this.handleShowVendingMachineManageMenu(),
      )
      .on(CUSTOM_EVENT_NAME.SHOW_PRODUCT_ADD_MENU, () =>
        this.handleShowProductAddMenu(),
      );
  }

  handleAddProduct(event) {
    this.store.addProduct(event.detail.product);
    const productList = this.store.getProductList();
    this.productManagementView.show(productList);
  }

  handleChargeChanges(event) {
    this.store.chargeChanges(event.detail.changes);
    const currentCharges = this.store.getChangeList();
    const currentChargeTotal = this.store.getChangeListTotal();
    this.chargingChangeView.show([currentCharges, currentChargeTotal]);
  }

  handlePurchaseProduct(event) {
    this.store.substractProductQuantity(event.detail.product);
    this.store.substractPuttedMoney(parseInt(event.detail.product.price));
    this.setDisplayShowPurchasingProductView();
  }

  handleAddPuttedMoney(event) {
    this.store.addPuttedMoney(parseInt(event.detail.puttedMoney));
    this.setDisplayShowPurchasingProductView();
  }

  handleReturnExchanges() {
    const currentCharges = this.store.getChangeList();
    const puttedMoney = this.store.getPuttedMoney();
    this.store.returnExchanges(currentCharges, puttedMoney);
    this.setDisplayShowPurchasingProductView();
  }

  handleShowProductPurchaseMenu() {
    this.store.clickedTab = TAB_TYPE.PURCHASING_PRODUCT;
    this.render();
  }

  handleShowVendingMachineManageMenu() {
    this.store.clickedTab = TAB_TYPE.CHARGING_CHANGE;
    this.render();
  }

  handleShowProductAddMenu() {
    this.store.clickedTab = TAB_TYPE.PRODUCT_MANAGEMENT;
    this.render();
  }

  setDisplayShowPurchasingProductView() {
    this.purchasingProductView.show([
      this.store.getProductList(),
      this.store.getChangeList(),
      this.store.getPuttedMoney(),
    ]);
  }

  onlyShowPurchasingProduct() {
    this.productManagementView.hide(this.store.getProductList());
    this.chargingChangeView.hide();
    this.setDisplayShowPurchasingProductView();
  }

  onlyShowChargingChange() {
    this.productManagementView.hide(this.store.getProductList());
    this.chargingChangeView.show([
      this.store.getChangeList(),
      this.store.getChangeListTotal(),
    ]);
    this.purchasingProductView.hide();
  }

  onlyShowProductManagement() {
    this.productManagementView.show(this.store.getProductList());
    this.chargingChangeView.hide();
    this.purchasingProductView.hide();
  }

  hideAllView() {
    this.productManagementView.hide();
    this.chargingChangeView.hide();
    this.purchasingProductView.hide();
  }

  render() {
    this.tabView.show();

    if (this.store.clickedTab === TAB_TYPE.PURCHASING_PRODUCT) {
      this.onlyShowPurchasingProduct();
    } else if (this.store.clickedTab === TAB_TYPE.CHARGING_CHANGE) {
      this.onlyShowChargingChange();
    } else if (this.store.clickedTab === TAB_TYPE.PRODUCT_MANAGEMENT) {
      this.onlyShowProductManagement();
    } else {
      this.hideAllView();
    }
  }
}
