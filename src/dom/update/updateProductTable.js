import {
  getProductManagerProductTableBody,
  getPurchasedProductManagerItemQuantity,
  getProductManagerItemCollection,
} from '../domElement.js';
import { TABLE_ROW, CLASS, TABLE_DATA } from '../../constants/dom.js';

export const createProductTableRow = products => {
  products.forEach(product => {
    addTableBodyRow(product);
  });
};

const addTableBodyRow = product => {
  const tableBody = getProductManagerProductTableBody();

  tableBody.appendChild(
    createTableBodyRow(product.name, product.price, product.quantity)
  );
};

const createTableBodyRow = (name, price, quantity) => {
  const row = document.createElement(TABLE_ROW);

  row.setAttribute(CLASS, 'product-manage-item');
  row.dataset.productItem = name;
  createTableBodyData(row, name, price, quantity);

  return row;
};

const createTableBodyData = (row, name, price, quantity) => {
  const nameCell = document.createElement(TABLE_DATA);
  const priceCell = document.createElement(TABLE_DATA);
  const quantityCell = document.createElement(TABLE_DATA);

  nameCell.setAttribute(CLASS, 'product-manage-name');
  priceCell.setAttribute(CLASS, 'product-manage-price');
  quantityCell.setAttribute(CLASS, 'product-manage-quantity');
  nameCell.innerHTML = name;
  priceCell.innerHTML = price;
  quantityCell.innerHTML = quantity;

  row.append(nameCell, priceCell, quantityCell);
};

export const updateProductItemAfterPurchase = name => {
  const productItem = getPurchasedProductManagerItemQuantity(name);

  productItem.innerHTML -= 1;
};

export const deleteProductItem = name => {
  const productItems = getProductManagerItemCollection();

  for (let item of productItems) {
    if (item.dataset.productItem === name) {
      item.remove();
    }
  }
};
