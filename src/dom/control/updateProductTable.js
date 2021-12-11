import {
  getProductManagerProductTableBody,
  getPurchasedProductManagerItemQuantity,
  getProductManagerItemCollection,
} from '../domElement.js';

export const updateProductTable = (products) => {
  products.forEach((product) => {
    addTableBodyRow(product);
  });
};

const addTableBodyRow = (product) => {
  const tableBody = getProductManagerProductTableBody();

  tableBody.appendChild(
    createTableBodyRow(product.name, product.price, product.quantity)
  );
};

const createTableBodyRow = (name, price, quantity) => {
  const row = document.createElement('tr');

  row.setAttribute('class', 'product-manage-item');
  row.dataset.productName = name;
  createTableBodyData(row, name, price, quantity);

  return row;
};

const createTableBodyData = (row, name, price, quantity) => {
  const nameCell = document.createElement('td');
  const priceCell = document.createElement('td');
  const quantityCell = document.createElement('td');

  nameCell.setAttribute('class', 'product-manage-name');
  priceCell.setAttribute('class', 'product-manage-price');
  quantityCell.setAttribute('class', 'product-manage-quantity');
  nameCell.innerHTML = name;
  priceCell.innerHTML = price;
  quantityCell.innerHTML = quantity;

  row.append(nameCell, priceCell, quantityCell);
};

export const updateProductItemAfterPurchase = (name) => {
  const productItem = getPurchasedProductManagerItemQuantity(name);

  productItem.innerHTML -= 1;
};

export const deleteProductItem = (name) => {
  const productItems = getProductManagerItemCollection();

  for (let item of productItems) {
    if (item.dataset.productName === name) {
      item.remove();
    }
  }
};
