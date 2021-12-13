import { vendingMachine } from '../../index.js';
import {
  getPurchasedItemQuantity,
  getPurchaseManagerPurchaseTableBody,
  getProductPurchaseItemCollection,
} from '../domElement.js';
import {
  TABLE_ROW,
  CLASS,
  TABLE_DATA,
  BUTTON,
  CLICK,
} from '../../constants/dom.js';
import { DO_PURCHASE_TEXT } from '../../constants/text.js';

export const initPurchasableProductTable = () => {
  vendingMachine.products.forEach((product) => {
    createPurchaseTableRow(product.name, product.price, product.quantity);
  });
};

export const createPurchaseTableRow = (name, price, quantity) => {
  const tableBody = getPurchaseManagerPurchaseTableBody();

  tableBody.appendChild(
    createPurchasableProductTableRow(name, price, quantity)
  );
};

const createPurchasableProductTableRow = (name, price, quantity) => {
  const tableRow = document.createElement(TABLE_ROW);

  tableRow.setAttribute(CLASS, 'product-purchase-item');
  tableRow.dataset.productPurchaseItem = name;
  createPurchasableProductTableData(tableRow, name, price, quantity);

  return tableRow;
};

const createPurchasableProductTableData = (tableRow, name, price, quantity) => {
  tableRow.append(
    createProductNameCell(name),
    createProductPriceCell(price),
    createProductQuantity(quantity),
    createPurchaseButtonCell(name)
  );
};

const createProductNameCell = (name) => {
  const productNameCell = document.createElement(TABLE_DATA);

  productNameCell.setAttribute(CLASS, 'product-purchase-name');
  productNameCell.innerHTML = name;
  productNameCell.dataset.productName = name;

  return productNameCell;
};

const createProductPriceCell = (price) => {
  const productPriceCell = document.createElement(TABLE_DATA);

  productPriceCell.setAttribute(CLASS, 'product-purchase-price');
  productPriceCell.innerHTML = price;
  productPriceCell.dataset.productPrice = price;

  return productPriceCell;
};

const createProductQuantity = (quantity) => {
  const productQuantityCell = document.createElement(TABLE_DATA);

  productQuantityCell.setAttribute(CLASS, 'product-purchase-quantity');
  productQuantityCell.innerHTML = quantity;
  productQuantityCell.dataset.productQuantity = quantity;

  return productQuantityCell;
};

const createPurchaseButtonCell = (name) => {
  const purchaseButtonCell = document.createElement(TABLE_DATA);
  const purchaseButton = document.createElement(BUTTON);

  purchaseButton.innerHTML = DO_PURCHASE_TEXT;
  purchaseButton.setAttribute(CLASS, 'purchase-button');
  purchaseButton.dataset.productButton = name;
  purchaseButton.addEventListener(CLICK, () => {
    vendingMachine.purchase(purchaseButton.dataset.productButton);
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
    if (item.dataset.productPurchaseItem === name) {
      item.remove();
    }
  }
};
