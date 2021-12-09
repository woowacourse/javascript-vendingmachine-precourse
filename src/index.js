import { $ } from './dom/dom.js';
import initStorage from './storage/initStorage.js';
import initRender from './views/initRender.js';
import {
  DRINK_STORAGE_NAME,
  USERMONEY,
  VENDINGCOIN_STORGAE_NAME,
} from './constants/constants.js';
import renderProdutAddMenu from './views/renderProductAddMenu.js';
import store from './storage/store.js';

export default function vendingMachine() {
  this.userTotalMoney;
  this.drinkMenuObjectList;
  this.vendingCoinList;

  this.init = () => {
    initRender();
    this.userTotalMoney = initStorage(USERMONEY);
    this.drinkMenuObjectList = initStorage(DRINK_STORAGE_NAME);
    this.vendingCoinList = initStorage(VENDINGCOIN_STORGAE_NAME);
    initEventListener();
  };

  const initEventListener = () => {
    $('#product-add-menu').addEventListener('click', renderProdutAddMenu);
    // $('#vending-machine-manage-menu').addEventListener('click', render)
    // $('#product-purchase-menu').addEventListener('click')
  };
}

const vender = new vendingMachine();
vender.init();
