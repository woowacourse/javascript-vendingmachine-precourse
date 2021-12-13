import $ from './utils/common/selector.js';
import { store } from './utils/common/store.js';
import { changeTab } from './utils/changeTab.js';
import { TABS } from './constants/constants.js';
import { renderTabs } from './utils/common/renderTabs.js';
import { renderProducts } from './utils/addProduct/renderProducts.js';
import { addProduct } from './utils/addProduct/addProduct.js';

function vendingMachine() {
  this.state = {
    products: [],
    change: {},
    purchase: {},
  };

  this.init = () => {
    renderTabs();
    if (store.getData()) this.state = store.getData();
    if (!this.state.change.amount) this.state.change.amount = 0;
    if (!this.state.purchase.input) this.state.purchase.input = 0;
    this.tab = TABS.ADD_MENU_TAB;
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
      addProduct(this.state);
    });
  };
}

const machine = new vendingMachine();
machine.init();
