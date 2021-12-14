import { DISPLAY } from '../common/constants/constants.js';
import { $ } from '../common/dom/templates.js';
import { saveItemsToStorage } from '../local-storage.js/product-detail.js';
import { saveUserChargedMoneyToStorage } from '../local-storage.js/product-purchase.js';
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
  manageProductListAfterPuchased,
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

const handleProductManageTab = () => {
  const $app = $('#app');
  const appNodes = $app.childNodes;

  appNodes[1].style.display = DISPLAY.BLOCK;
  appNodes[2].style.display = DISPLAY.NONE;
  appNodes[3].style.display = DISPLAY.NONE;
};

const handleProductAddButton = () => {
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
};

const initProductManageTab = () => {
  const $productManageTab = $('#product-add-menu');
  const $productAddButton = $('#product-add-button');

  $productManageTab.addEventListener('click', handleProductManageTab);
  $productAddButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleProductAddButton();
  });
};

const handleMoneyChargeTab = () => {
  const $app = $('#app');
  const appNodes = $app.childNodes;

  appNodes[1].style.display = DISPLAY.NONE;
  appNodes[2].style.display = DISPLAY.BLOCK;
  appNodes[3].style.display = DISPLAY.NONE;
};

const handleMoneyChargeButton = () => {
  if (machineChargeInputValidator(machineChargeInputValue())) {
    // 스펠링 교정
    saveCharegedAmountToStorage(machineChargeInputValue());
    printChargedAmountToScreen();
    saveRandomAmountOfCoins();
    printAmountOfCoinToScreen();

    manageDataAttributes();
    manageProductListAfterPuchased();
  }
};

const initMoneyChargeTab = () => {
  const $vendingMachineTabButton = $('#vending-machine-manage-menu');
  const $machineChargeButton = $('#vending-machine-charge-button');

  $vendingMachineTabButton.addEventListener('click', handleMoneyChargeTab);
  $machineChargeButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleMoneyChargeButton();
  });
};

const handlePurchaseTab = () => {
  const $app = $('#app');
  const appNodes = $app.childNodes;

  appNodes[1].style.display = DISPLAY.NONE;
  appNodes[2].style.display = DISPLAY.NONE;
  appNodes[3].style.display = DISPLAY.BLOCK;
};

const handleUserChargeButton = () => {
  if (moneyChargeInputValidator(moneyChargeInputValue())) {
    saveUserChargedMoneyToStorage(moneyChargeInputValue());
    printInsertedMoney();
  }
};

const initPurchaseTab = () => {
  const $productPurchaseTabButton = $('#product-purchase-menu');
  const $moneyChargeButton = $('#charge-button');
  const $coinReturnButton = $('#coin-return-button');

  $productPurchaseTabButton.addEventListener('click', handlePurchaseTab);
  $moneyChargeButton.addEventListener('click', (event) => {
    event.preventDefault();
    handleUserChargeButton();
  });
  $coinReturnButton.addEventListener('click', printReturnedCoins);
};

export const bindDisplayEvent = () => {
  initProductManageTab();
  initMoneyChargeTab();
  initPurchaseTab();
};
