import Controller from './Controller.js';
import Store from './Store.js';
import InitialElementsView from './views/InitialElementsView.js'
import ProductManagementView from './views/ProductManagementView.js';
import TabView from "./views/TabView.js";

document.addEventListener('DOMContentLoaded', main);
function main() {
  new InitialElementsView();

  const store = new Store();

  const views = {
    tabView: new TabView(),
    productManagementView: new ProductManagementView(),
  };

  new Controller(views, store);
}