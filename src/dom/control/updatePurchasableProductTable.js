import { vendingMachine } from '../../index.js';
import {
  getPurchasedItemQuantity,
  getPurchaseManagerPurchaseTableBody,
  getProductPurchaseItemCollection,
} from '../domElement.js';

export const initPurchasableProductTable = () => {
  vendingMachine.products.forEach((product) => {
    addNewPurchaseProductTableRow(
      product.name,
      product.price,
      product.quantity
    );
  });
};

export const addNewPurchaseProductTableRow = (name, price, quantity) => {
  const tableBody = getPurchaseManagerPurchaseTableBody();

  tableBody.appendChild(
    createPurchasableProductTableRow(name, price, quantity)
  );
};

export const createPurchasableProductTableRow = (name, price, quantity) => {
  const tableRow = document.createElement('tr');

  tableRow.setAttribute('class', 'product-purchase-item');
  tableRow.dataset.productName = name;
  createPurchasableProductTableData(tableRow, name, price, quantity);

  return tableRow;
};

export const createPurchasableProductTableData = (
  tableRow,
  name,
  price,
  quantity
) => {
  tableRow.append(
    createProductNameCell(name),
    createProductPriceCell(price),
    createProductQuantity(quantity),
    createPurchaseButtonCell(name)
  );
};

const createProductNameCell = (name) => {
  const productNameCell = document.createElement('td');

  productNameCell.setAttribute('class', 'product-purchase-name');
  productNameCell.innerHTML = name;
  productNameCell.dataset.productName = name;

  return productNameCell;
};

const createProductPriceCell = (price) => {
  const productPriceCell = document.createElement('td');

  productPriceCell.setAttribute('class', 'product-purchase-price');
  productPriceCell.innerHTML = price;
  productPriceCell.dataset.productPrice = price;

  return productPriceCell;
};

const createProductQuantity = (quantity) => {
  const productQuantityCell = document.createElement('td');

  productQuantityCell.setAttribute('class', 'product-purchase-quantity');
  productQuantityCell.innerHTML = quantity;
  productQuantityCell.dataset.productQuantity = quantity;

  return productQuantityCell;
};

export const createPurchaseButtonCell = (name) => {
  const purchaseButtonCell = document.createElement('td');
  const purchaseButton = document.createElement('button');

  purchaseButton.innerHTML = '구매하기';
  purchaseButton.setAttribute('class', 'purchase-button');
  purchaseButton.dataset.productName = name;
  purchaseButton.addEventListener('click', () => {
    vendingMachine.purchase(purchaseButton.dataset.productName);
  });
  purchaseButtonCell.appendChild(purchaseButton);

  return purchaseButtonCell;
};

export const updatePurchasableProductTableAfterPurchase = (name) => {
  const purchasedItem = getPurchasedItemQuantity(name);

  purchasedItem.innerHTML -= 1;
};

export const deletePurchaseProduct = (name) => {
  const purchaseItems = getProductPurchaseItemCollection();

  for (let item of purchaseItems) {
    if (item.dataset.productName === name) {
      item.remove();
    }
  }
};
