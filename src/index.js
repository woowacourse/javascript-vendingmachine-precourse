import $ from './utils/common/selector.js';
import { addMenu } from './utils/addMenu.js';
import { store } from './utils/common/store.js';
import { changeTab } from './utils/changeTab.js';

function vendingMachine() {
  this.state = {
    addMenu: {
      products: [],
      machineMoney: 0,
      userMoney: 0,
    },
    change: {},
    purchase: {},
  };

  this.tab = 'addMenu';

  this.init = () => {
    if (store.getData()) this.menu = store.getData();
    this.initEventListeners();
  };
  this.initEventListeners = () => {
    $('#nav').addEventListener('click', e => {
      if (e.target.classList.contains('nav-tab')) {
        changeTab(e, this.tab);
      }
    });
  };
}

const machine = new vendingMachine();
machine.init();
