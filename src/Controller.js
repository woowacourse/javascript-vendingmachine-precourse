import { CUSTOM_EVENT_NAME, TAB_TYPE } from "./constants.js";

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
    this.productManagementView.on(CUSTOM_EVENT_NAME.ADD_PRODUCT, (event) => {
      this.store.addProduct(event.detail.product);
      const productList = this.store.getProductList();
      this.productManagementView.show(productList);
    });
    this.chargingChangeView.on(CUSTOM_EVENT_NAME.CHARGE_CHANGES, (event) => {
      this.store.chargeChanges(event.detail.changes);
      const currentCharges = this.store.getChangeList();
      const currentChargeTotal = this.store.getChangeListTotal();
      this.chargingChangeView.show([currentCharges, currentChargeTotal]);
    });
    this.purchasingProductView
      .on(CUSTOM_EVENT_NAME.PURCHASE_PRODUCT, (event) => {
        this.store.substractProductQuantity(event.detail.product);
        this.store.substractPuttedMoney(parseInt(event.detail.product.price));
        this.purchasingProductView.show([
          this.store.getProductList(),
          this.store.getChangeList(),
          this.store.getPuttedMoney(),
        ]);
      })
      .on(CUSTOM_EVENT_NAME.ADD_PUTTED_MONEY, (event) => {
        this.store.addPuttedMoney(parseInt(event.detail.puttedMoney));
        this.purchasingProductView.show([
          this.store.getProductList(),
          this.store.getChangeList(),
          this.store.getPuttedMoney(),
        ]);
      })
      .on(CUSTOM_EVENT_NAME.RETURN_EXCHANGES, () => {
        const currentCharges = this.store.getChangeList();
        const puttedMoney = this.store.getPuttedMoney();
        this.store.returnExchanges(currentCharges, puttedMoney);
        this.purchasingProductView.show([
          this.store.getProductList(),
          this.store.getChangeList(),
          this.store.getPuttedMoney(),
        ]);
      });
    this.tabView
      .on(CUSTOM_EVENT_NAME.SHOW_PRODUCT_PURCHASE_MENU, () => {
        this.store.clickedTab = TAB_TYPE.PURCHASING_PRODUCT;
        this.render();
      })
      .on(CUSTOM_EVENT_NAME.SHOW_VENDING_MACHINE_MANAGE_MENU, () => {
        this.store.clickedTab = TAB_TYPE.CHARGING_CHANGE;
        this.render();
      })
      .on(CUSTOM_EVENT_NAME.SHOW_PRODUCT_ADD_MENU, () => {
        this.store.clickedTab = TAB_TYPE.PRODUCT_MANAGEMENT;
        this.render();
      });
  }

  render() {
    this.tabView.show();

    if (this.store.clickedTab === TAB_TYPE.PURCHASING_PRODUCT) {
      
      this.productManagementView.hide(
        this.store.getProductList(),
      );

      this.chargingChangeView.hide([
        this.store.getChangeList(),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.show([
        this.store.getProductList(),
        this.store.getChangeList(),
        this.store.getPuttedMoney(),
      ]);
    } else if (this.store.clickedTab === TAB_TYPE.CHARGING_CHANGE) {
      this.productManagementView.hide(
        this.store.getProductList(),
      );

      this.chargingChangeView.show([
        this.store.getChangeList(),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.hide([
        this.store.getProductList(),
        this.store.getChangeList(),
        this.store.getPuttedMoney(),
      ]);
    } else if (this.store.clickedTab === TAB_TYPE.PRODUCT_MANAGEMENT) {
      this.productManagementView.show(
        this.store.getProductList(),
      );

      this.chargingChangeView.hide([
        this.store.getChangeList(),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.hide([
        this.store.getProductList(),
        this.store.getChangeList(),
        this.store.getPuttedMoney(),
      ]);
    } else {
      this.productManagementView.hide(
        this.store.getProductList(),
      );

      this.chargingChangeView.hide([
        this.store.getChangeList(),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.hide([
        this.store.getProductList(),
        this.store.getChangeList(),
        this.store.getPuttedMoney(),
      ]);
    }
  }
}
