import { pushMenuObject, getMenuObject, getMenuObjectKey } from './setMenuObject.js';
import { pushProductObject } from './productAdd.js';
import { checkPrice, checkQuantity } from './checkProductInputValue.js';

export const $productAdd = document.querySelector('#product-add');
export const $vendingMachineManage = document.querySelector('#vending-machine-manage');
export const $purchaseMenue = document.querySelector('#purchase-menue');
export const $productPurchaseMenu = document.querySelector('#product-purchase-menu');
export const $vendingMachineManageMenu = document.querySelector('#vending-machine-manage-menu');
export const $productAddMenu = document.querySelector('#product-add-menu');
export const $productNameInput = document.querySelector('#product-name-input');
export const $productPriceInput = document.querySelector('#product-price-input');
export const $productQuantityInput = document.querySelector('#product-quantity-input');
export const $productAddButton = document.querySelector('#product-add-button');

$productAddMenu.addEventListener('click', (e) => {
  e.preventDefault();
  pushMenuObject(1, 0, 0);
  displayDiv();
});

$vendingMachineManageMenu.addEventListener('click', (e) => {
  e.preventDefault();
  pushMenuObject(0, 1, 0);
  displayDiv();
});

$productPurchaseMenu.addEventListener('click', (e) => {
  e.preventDefault();
  pushMenuObject(0, 0, 1);
  displayDiv();
});

$productAddButton.addEventListener('click', (e) => {
  e.preventDefault();
  const productName = $productNameInput.value;
  const productPrice = $productPriceInput.value;
  const productQuantity = $productQuantityInput.value;
  if (!checkPrice(productPrice) || !checkQuantity(productQuantity)) return;
  pushProductObject(productName, productPrice, productQuantity);
});

export const displayDiv = () => {
  const menuObject = getMenuObject();
  const menuObjectKey = getMenuObjectKey();

  if (menuObject === null) {
    displayNone();
  } else if (menuObject[menuObjectKey[0]] == 1) {
    displayProductAdd();
  } else if (menuObject[menuObjectKey[1]] == 1) {
    displayVendingMachineManage();
  } else if (menuObject[menuObjectKey[2]] == 1) {
    displayPurchaseMene();
  }
};

const displayNone = () => {
  $productAdd.style.display = 'none';
  $vendingMachineManage.style.display = 'none';
  $purchaseMenue.style.display = 'none';
};

const displayProductAdd = () => {
  $productAdd.style.display = '';
  $vendingMachineManage.style.display = 'none';
  $purchaseMenue.style.display = 'none';
};

const displayVendingMachineManage = () => {
  $productAdd.style.display = 'none';
  $vendingMachineManage.style.display = '';
  $purchaseMenue.style.display = 'none';
};

const displayPurchaseMene = () => {
  $productAdd.style.display = 'none';
  $vendingMachineManage.style.display = 'none';
  $purchaseMenue.style.display = '';
};
