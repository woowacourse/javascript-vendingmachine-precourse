import {
  createTableClassData,
  createTableClassRow,
} from '../common/CreateElement.js';
import { $ } from '../common/elements.js';

import {
  checkInputsValidation,
  onInvalidInputsSubmit,
} from './CheckValidation.js';

function createDatas(values) {
  const datas = [];
  datas.push(['product-manage-name', values[0]]);
  datas.push(['product-manage-price', values[1]]);
  datas.push(['product-manage-quantity', values[2]]);

  return datas;
}

function createProductTableData(data) {
  const [cla, innerText] = data;
  const productTableData = createTableClassData(cla, innerText);

  return productTableData;
}

function createProductTableDatas(values) {
  const datas = createDatas(values);
  const productTableDatas = datas.map((data) => createProductTableData(data));

  return productTableDatas;
}

export function createProductTableDataRow(values) {
  const productTableDataRow = createTableClassRow('product-manage-item');
  const productTableDatas = createProductTableDatas(values);
  productTableDatas.forEach((data) => productTableDataRow.append(data));

  return productTableDataRow;
}

function addProductToLocalStorage(product) {
  let products = [];

  if (localStorage.getItem('상품 현황')) {
    products = JSON.parse(localStorage.getItem('상품 현황'));
  }

  const [name, price, count] = product;
  const newProduct = {
    상품명: name,
    가격: price,
    수량: count,
  };
  products.push(newProduct);
  localStorage.setItem('상품 현황', JSON.stringify(products));
}

function onValidInputsSubmit() {
  const productListTable = $('product-list-table');
  const values = [
    $('product-name-input').value,
    $('product-price-input').value,
    $('product-quantity-input').value,
  ];
  const productTableDataRow = createProductTableDataRow(values);
  productListTable.append(productTableDataRow);
  addProductToLocalStorage(values);
}

function onProductAddClick(event) {
  event.preventDefault();
  const inputsValidation = checkInputsValidation();

  if (!inputsValidation) {
    onInvalidInputsSubmit();
  } else {
    onValidInputsSubmit();
  }
}

export function setProductAddClick() {
  $('product-add-button').addEventListener('click', onProductAddClick);
}
