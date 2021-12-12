import $ from './utils/common/selector.js';
import { addProduct } from './utils/addProduct/addProduct.js';
import { store } from './utils/common/store.js';
import { changeTab } from './utils/changeTab.js';
import { TABS } from './constants/constants.js';
import { renderTabs } from './utils/common/renderTabs.js';
import { renderProducts } from './utils/addProduct/renderProducts.js';

function vendingMachine() {
  const { ADD_MENU_TAB, CHANGE_TAB, PURCHASE_TAB } = TABS;

  this.state = {
    products: [],
    change: [],
    purchase: [],
  };

  this.init = () => {
    renderTabs();
    if (store.getData()) this.state = store.getData();
    this.tab = ADD_MENU_TAB;
    renderProducts(this.state);
    this.initEventListeners();
  };

  this.initEventListeners = () => {
    $('#nav').addEventListener('click', e => {
      if (e.target.classList.contains('nav-tab')) {
        changeTab(e, this.tab, this.state);
      }
    });

    $('#product-add-button').addEventListener('click', e => {
      e.preventDefault();
      addProduct(this.state, this.tab);
    });
  };
}

const machine = new vendingMachine();
machine.init();
