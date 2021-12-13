import { DISPLAY } from '../common/constants/constants.js';
import { $ } from '../common/dom/templates.js';
import { saveItemsToStorage } from '../local-storage.js/product-detail.js';
import { saveAmountOfMoneyToStorage } from '../local-storage.js/product-purchase.js';
import {
  saveCharegedAmountToStorage,
  saveRandomAmountOfCoins,
} from '../local-storage.js/vending-machine-manage.js';
import { createProductListTable } from '../view/show.js';
import {
  bindProductValidator,
  getProductNameValue,
  getProductPriceValue,
  getProductQuantityValue,
} from './product-manage/input-validator.js';
import { printItemsToScreen } from './product-manage/print-list-to-screen.js';
import {
  moneyChargeInputValidator,
  moneyChargeInputValue,
} from './product-purchase/input-validator.js';
import {
  manageDataAttributes,
  printInsertedMoney,
  printProductItemsToPurchaseToScreen,
  printReturnedCoins,
} from './product-purchase/print-to-screen.js';
import {
  machineChargeInputValidator,
  machineChargeInputValue,
} from './vending-machine-charge/input-validator.js';
import {
  printAmountOfCoinToScreen,
  printChargedAmountToScreen,
} from './vending-machine-charge/print-to-screen.js';

// Display Related
const productManageButtonEvent = () => {
  const $productAddTabButton = $('#product-add-menu');

  $productAddTabButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = DISPLAY.BLOCK;
    appNodes[2].style.display = DISPLAY.NONE;
    appNodes[3].style.display = DISPLAY.NONE;
  });
};
const VendingManageButtonEvent = () => {
  const $vendingMachineTabButton = $('#vending-machine-manage-menu');

  $vendingMachineTabButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = DISPLAY.NONE;
    appNodes[2].style.display = DISPLAY.BLOCK;
    appNodes[3].style.display = DISPLAY.NONE;
  });
};
const productPurchaseButtonEvent = () => {
  const $productPurchaseTabButton = $('#product-purchase-menu');

  $productPurchaseTabButton.addEventListener('click', () => {
    const $app = $('#app');
    const appNodes = $app.childNodes;

    appNodes[1].style.display = DISPLAY.NONE;
    appNodes[2].style.display = DISPLAY.NONE;
    appNodes[3].style.display = DISPLAY.BLOCK;
  });
};

export const bindDisplayEvent = () => {
  productManageButtonEvent();
  VendingManageButtonEvent();
  productPurchaseButtonEvent();
};

// Product Manage Tab Related

export const productAddButtonEvent = () => {
  const $productAddButton = $('#product-add-button');

  $productAddButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (
      bindProductValidator(
        getProductNameValue(),
        getProductPriceValue(),
        getProductQuantityValue()
      )
    ) {
      saveItemsToStorage(
        getProductNameValue(),
        getProductPriceValue(),
        getProductQuantityValue()
      );
      createProductListTable();
      printItemsToScreen();
      printProductItemsToPurchaseToScreen();
      manageDataAttributes();
    }
  });
};

// Vending Machine Charge Tab Related

export const VendingMachineChargeButtonEvent = () => {
  const $machineChargeButton = $('#vending-machine-charge-button');

  $machineChargeButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (machineChargeInputValidator(machineChargeInputValue())) {
      saveCharegedAmountToStorage(machineChargeInputValue());
      printChargedAmountToScreen();
      saveRandomAmountOfCoins();
      printAmountOfCoinToScreen();
    }
  });
};

// Product Purchase Tab Related
export const moneyChargeButtonEvent = () => {
  const $moneyChargeButton = $('#charge-button');

  $moneyChargeButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (moneyChargeInputValidator(moneyChargeInputValue())) {
      saveAmountOfMoneyToStorage(moneyChargeInputValue());
      printInsertedMoney();
    }
  });

  // Coin Return

  const $coinReturnButton = $('#coin-return-button');

  $coinReturnButton.addEventListener('click', () => {
    printReturnedCoins();
  });
};
