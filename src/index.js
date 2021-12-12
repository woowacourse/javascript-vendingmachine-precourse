import $ from './utils/common/selector.js';
import { addProduct } from './utils/addProduct/addProduct.js';
import { store } from './utils/common/store.js';
import { changeTab } from './utils/changeTab.js';
import { tabs } from './constants/constants.js';
import { render } from './utils/common/render.js';

function vendingMachine() {
  this.products = [];

  this.init = () => {
    if (store.getData()) this.products = store.getData();
    this.tab = tabs.addMenu;
    $('#tab-title').innerText = `상품관리 탭`;
    this.initEventListeners();
    render(this.products, this.tab);
  };

  this.initEventListeners = () => {
    $('#nav').addEventListener('click', e => {
      if (e.target.classList.contains('nav-tab')) {
        changeTab(e, this.tab);
      }
    });
    $('#product-add-button').addEventListener('click', e => {
      e.preventDefault();
      addProduct(this.products, this.tab);
    });
  };
}

const machine = new vendingMachine();
machine.init();
