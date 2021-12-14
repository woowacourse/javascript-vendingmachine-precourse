import $ from './utils/common/selector.js';
import { store } from './utils/common/store.js';
import { changeTab } from './utils/common/changeTab.js';
import { renderTabs } from './utils/common/renderTabs.js';
import { addProduct } from './utils/addProduct/addProduct.js';
import { initialSetting } from './utils/common/initialSetting.js';

function vendingMachine() {
  this.state = {
    products: [],
    change: {},
    purchase: {},
  };

  this.init = () => {
    renderTabs();
    if (store.getData()) this.state = store.getData();
    initialSetting(this.state, this.tab);
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
