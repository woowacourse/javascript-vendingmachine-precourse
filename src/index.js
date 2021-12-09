import { $ } from './dom/dom.js';
import initStorage from './storage/initStorage.js';
import initRender from './views/initRender.js';
import {
  DRINK_STORAGE_NAME,
  USERMONEY,
  VENDINGCOIN_STORGAE_NAME,
} from './constants/constants.js';
import renderProductAddMenu from './views/renderProductAddMenu.js';
import store from './storage/store.js';
import renderNowProductInfo from './views/renderNowProductInfo.js';
import getUserProductInfoInput from './modules/getUserProductInfoInput.js';
import initProductAddInputElements from './views/initProductAddInputElements.js';

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

  const addUserProductAddEventListener = () => {
    $('#product-add-button').addEventListener('click', () => {
      const userProductInput = getUserProductInfoInput();
      if (userProductInput !== false) {
        this.drinkMenuObjectList.push(userProductInput);
        store.setLocalStoreage(DRINK_STORAGE_NAME, this.drinkMenuObjectList);
        initProductAddInputElements();
        renderNowProductInfo();
      }
    });
  };
  const initEventListener = () => {
    $('#product-add-menu').addEventListener('click', () => {
      renderProductAddMenu();
      addUserProductAddEventListener();
    });
    // $('#vending-machine-manage-menu').addEventListener('click', render)
    // $('#product-purchase-menu').addEventListener('click')
  };
}

const vender = new vendingMachine();
vender.init();
