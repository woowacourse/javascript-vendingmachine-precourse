import Controller from './Controller.js';
import Store from './Store.js';
import InitialElementsView from './views/InitialElementsView.js';
import ProductManagementView from './views/ProductManagementView.js';
import ChargingChangeView from './views/ChargingChangeView.js';
import PurchasingProductView from './views/PurchasingProductView.js';
import TabView from './views/TabView.js';
import { EVENT_LISTENER_TYPE } from './constants.js';
import { on } from './utils/index.js';

on(document, EVENT_LISTENER_TYPE.DOM_CONTENT_LOADED, main);

function main() {
  new InitialElementsView();

  const store = new Store();

  const views = {
    tabView: new TabView(),
    productManagementView: new ProductManagementView(),
    purchasingProductView: new PurchasingProductView(),
    chargingChangeView: new ChargingChangeView(),
  };

  new Controller(views, store);
}
