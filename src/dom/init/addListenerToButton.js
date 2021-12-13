import {
  getMenuButtons,
  getManagers,
  getCoinReturnButton,
  getProductAddButton,
  getVendingMachineChargeButton,
  getChargeButton,
} from '../domElement.js';
import { vendingMachine } from '../../index.js';
import { BLOCK, NONE, CLICK } from '../../constants/dom.js';

export const addListenerToMenuButton = () => {
  const menuButtons = getMenuButtons();
  const managers = getManagers();

  menuButtons.forEach((button, index) => {
    button.addEventListener(CLICK, () => {
      showOrHideManager(managers, index + 1);
    });
  });
};

const showOrHideManager = (managers, num) =>
  managers.forEach(manager => {
    if (Number(manager.dataset.num) === num) {
      manager.style.display = BLOCK;
    } else {
      manager.style.display = NONE;
    }
  });

export const addListenerToProductAddButton = () => {
  const productAddButton = getProductAddButton();

  productAddButton.addEventListener(CLICK, () => {
    vendingMachine.addProduct();
  });
};

export const addListenerToVendingMachineChargeButton = () => {
  const vendingMachineChargeButton = getVendingMachineChargeButton();

  vendingMachineChargeButton.addEventListener(CLICK, () => {
    vendingMachine.addVendingMachineCharge();
  });
};

export const addListenerToChargeButton = () => {
  const chargeButton = getChargeButton();

  chargeButton.addEventListener(CLICK, () => {
    vendingMachine.addUserCharge();
  });
};

export const addListenerToReturnCoinButton = () => {
  const coinReturnButton = getCoinReturnButton();

  coinReturnButton.addEventListener(CLICK, () => {
    vendingMachine.returnCoin();
  });
};
