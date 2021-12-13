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
    this.productManagementView.on('@addProduct', (event) => {
      this.store.addProduct(event.detail.product);
      const productList = this.store.getProductList();
      this.productManagementView.show(productList);
    });
    this.chargingChangeView.on('@chargeChanges', (event) => {
      this.store.chargeChanges(event.detail.changes);
      const currentCharges = this.store.getCurrentChanges();
      const currentChargeTotal = this.store.getChangeListTotal()
      this.chargingChangeView.show([currentCharges, currentChargeTotal]);
    });
    this.purchasingProductView
      .on('@purchaseProduct', (event) => {
        this.store.substractProductQuantity(event.detail.product);
        this.store.substractPuttedMoney(parseInt(event.detail.product.price));
        this.purchasingProductView.show([
          JSON.parse(this.store.storage.getItem('productList')),
          JSON.parse(this.store.storage.getItem('changeList')),
          JSON.parse(this.store.storage.getItem('puttedMoney')),
        ]);
      })
      .on('@addPuttedMoney', (event) => {
        this.store.addPuttedMoney(parseInt(event.detail.puttedMoney));
        this.purchasingProductView.show([
          JSON.parse(this.store.storage.getItem('productList')),
          JSON.parse(this.store.storage.getItem('changeList')),
          JSON.parse(this.store.storage.getItem('puttedMoney')),
        ]);
      })
      .on('@returnExchanges', () => {
        const currentCharges = this.store.getCurrentChanges();
        const puttedMoney = this.store.getPuttedMoney();
        this.store.returnExchanges(currentCharges, puttedMoney);
        this.purchasingProductView.show([
          JSON.parse(this.store.storage.getItem('productList')),
          JSON.parse(this.store.storage.getItem('changeList')),
          JSON.parse(this.store.storage.getItem('puttedMoney')),
        ]);
      });
    this.tabView
      .on('@showProductPurchaseMenu', () => {
        this.store.clickedTab = 'productPurchaseMenu';
        this.render();
      })
      .on('@showVendingMachineManageMenu', () => {
        this.store.clickedTab = 'vendingMachineManageMenu';
        this.render();
      })
      .on('@showProductAddMenu', () => {
        this.store.clickedTab = 'productAddMenu';
        this.render();
      });
  }

  render() {
    this.tabView.show();

    if (this.store.clickedTab === 'productPurchaseMenu') {
      
      this.productManagementView.show(
        JSON.parse(this.store.storage.getItem('productList')),
      );

      this.chargingChangeView.hide([
        JSON.parse(this.store.storage.getItem('changeList')),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.hide([
        JSON.parse(this.store.storage.getItem('productList')),
        JSON.parse(this.store.storage.getItem('changeList')),
        JSON.parse(this.store.storage.getItem('puttedMoney')),
      ]);
    } else if (this.store.clickedTab === 'vendingMachineManageMenu') {
      this.productManagementView.hide(
        JSON.parse(this.store.storage.getItem('productList')),
      );

      this.chargingChangeView.show([
        JSON.parse(this.store.storage.getItem('changeList')),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.hide([
        JSON.parse(this.store.storage.getItem('productList')),
        JSON.parse(this.store.storage.getItem('changeList')),
        JSON.parse(this.store.storage.getItem('puttedMoney')),
      ]);
    } else if (this.store.clickedTab === 'productAddMenu') {
      this.productManagementView.hide(
        JSON.parse(this.store.storage.getItem('productList')),
      );

      this.chargingChangeView.hide([
        JSON.parse(this.store.storage.getItem('changeList')),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.show([
        JSON.parse(this.store.storage.getItem('productList')),
        JSON.parse(this.store.storage.getItem('changeList')),
        JSON.parse(this.store.storage.getItem('puttedMoney')),
      ]);
    } else {
      this.productManagementView.hide(
        JSON.parse(this.store.storage.getItem('productList')),
      );

      this.chargingChangeView.hide([
        JSON.parse(this.store.storage.getItem('changeList')),
        this.store.getChangeListTotal(),
      ]);

      this.purchasingProductView.hide([
        JSON.parse(this.store.storage.getItem('productList')),
        JSON.parse(this.store.storage.getItem('changeList')),
        JSON.parse(this.store.storage.getItem('puttedMoney')),
      ]);
    }
  }
}
