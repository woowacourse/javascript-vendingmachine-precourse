import { $ } from './dom/dom.js';
import initStorage from './storage/initStorage.js';
import initRender from './views/initRender.js';
import {
  DRINK_STORAGE_NAME,
  USERMONEY_STORAGE_NAME,
} from './constants/constants.js';
import renderProductAddMenu from './views/renderProductAddMenu.js';
import store from './storage/store.js';
import renderNowProductInfo from './views/renderNowProductInfo.js';
import getUserProductInfoInput from './modules/getUserProductInfoInput.js';
import initProductAddInputElements from './views/initProductAddInputElements.js';
import renderVendingMachineManageMenu from './views/renderVendingMachineManageMenu.js';
import getUserVendingMachineChargeInput from './modules/getUserVendingMachineChargeInput.js';
import setVendingCoinStorage from './storage/setVendingCoinStorage.js';
import renderTotalCoinElement from './views/renderTotalCoinElement.js';
import renderVendingMachineOwnCoinTable from './views/renderVendingMachineOwnCoinTable.js';

export default function vendingMachine() {
  this.userTotalMoney;
  this.drinkMenuObjectList;

  this.init = () => {
    initRender();
    this.userTotalMoney = initStorage(USERMONEY_STORAGE_NAME);
    this.drinkMenuObjectList = initStorage(DRINK_STORAGE_NAME);
    initEventListener();
  };

  const addVendingMachineManageEventListener = () => {
    $('#vending-machine-charge-button').addEventListener('click', () => {
      let userChargeInput = getUserVendingMachineChargeInput();
      if (userChargeInput !== false) {
        setVendingCoinStorage(userChargeInput);
        renderTotalCoinElement();
        renderVendingMachineOwnCoinTable();
      }
    });
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
    $('#vending-machine-manage-menu').addEventListener('click', () => {
      renderVendingMachineManageMenu();
      addVendingMachineManageEventListener();
    });
    // $('#product-purchase-menu').addEventListener('click')
  };
}

const vender = new vendingMachine();
vender.init();
