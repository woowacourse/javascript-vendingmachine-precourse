import { $ } from '../utils/dom.js';
import { ELEMENT_SID, EVENT_TYPE, PRODUCT, TAB, constantsInit } from '../utils/constants.js';

import ManageProductView from '../views/ManageProductView.js';
import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';
import ManageProductModel from '../models/ManageProductModel.js';
import ChargeCoinView from '../views/ChargeCoinView.js';
import ChargeCoinModel from '../models/ChargeCoinModel.js';
import PurchaseProductView from '../views/PurchaseProductView.js';
import PurchaseProductModel from '../models/PurchaseProductModel.js';

export default {
  init() {
    constantsInit();
    LayoutView.setup($(ELEMENT_SID.APP));
    TabView.setup($(ELEMENT_SID.TAB_VIEW)).on(EVENT_TYPE.CHANGE_TAB, (e) =>
      this.onChangeTab(e.detail.tabName),
    );
    ManageProductView.setup($(ELEMENT_SID.RESULT_VIEW)).on(EVENT_TYPE.ADD_PRODUCT, (e) =>
      this.onAddProduct(e.detail.product),
    );
    ChargeCoinView.setup($(ELEMENT_SID.RESULT_VIEW)).on(EVENT_TYPE.CHARGE_COIN, (e) =>
      this.onChargeCoin(e.detail.money),
    );
    PurchaseProductView.setup($(ELEMENT_SID.RESULT_VIEW))
      .on(EVENT_TYPE.CHARGE_MONEY, (e) => this.onChargeMoney(e.detail.userInputMoney))
      .on(EVENT_TYPE.PURCHASE_ITEM, (e) => this.onPurchaseProduct(e.detail.product))
      .on(EVENT_TYPE.RETURN_COINS, () => this.onReturnCoins());

    this.selectedTab = TAB.MANAGE_PRODUCT;
    this.renderView();
  },

  renderView() {
    switch (this.selectedTab) {
      case TAB.MANAGE_PRODUCT:
        this.renderManageProductView();
        break;
      case TAB.CHARGE_CHANGE:
        this.renderChargetCoinView();
        break;
      case TAB.PURCHASE_PRODUCT:
        this.renderPurcahseProductView();
        break;
      default:
        break;
    }
  },

  renderManageProductView() {
    ManageProductView.render();
  },

  renderChargetCoinView() {
    ChargeCoinView.render();
  },

  renderPurcahseProductView() {
    PurchaseProductView.render();
  },

  onChangeTab(tabName) {
    this.selectedTab = tabName;
    this.renderView();
  },

  onAddProduct(product) {
    ManageProductModel.add(product);
    ManageProductView.render();
  },

  onChargeCoin(money) {
    ChargeCoinModel.charge(money);
    ChargeCoinView.render();
  },

  onChargeMoney(userInputMoney) {
    PurchaseProductModel.add(userInputMoney);
    PurchaseProductView.render();
  },
  onPurchaseProduct(product) {
    if (
      ManageProductModel.sellable(product[PRODUCT.NAME]) &&
      PurchaseProductModel.payable(product[PRODUCT.PRICE])
    ) {
      PurchaseProductModel.purchase(product);
      ManageProductModel.sell(product[PRODUCT.NAME]);
      PurchaseProductView.render();
    }
  },
  onReturnCoins() {
    const leftUserMoney = PurchaseProductModel.total();
    ChargeCoinModel.return(leftUserMoney);
    PurchaseProductModel.reset();
    PurchaseProductView.render();
  },
};
