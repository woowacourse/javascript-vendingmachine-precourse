import {
  createTableClassData,
  createTableClassRow,
} from '../common/CreateElement.js';
import { $ } from '../common/elements.js';

import {
  checkInputsValidation,
  onInvalidInputsSubmit,
} from './CheckValidation.js';

function createDatas() {
  const datas = [];
  datas.push(['product-manage-name', $('product-name-input').value]);
  datas.push(['product-manage-price', $('product-price-input').value]);
  datas.push(['product-manage-quantity', $('product-quantity-input').value]);

  return datas;
}

function createProductTableData(data) {
  const [cla, innerText] = data;
  const productTableData = createTableClassData(cla, innerText);

  return productTableData;
}

function createProductTableDatas() {
  const datas = createDatas();
  const productTableDatas = datas.map((data) => createProductTableData(data));

  return productTableDatas;
}

function createProductTableDataRow() {
  const productTableDataRow = createTableClassRow('product-manage-item');
  const productTableDatas = createProductTableDatas();
  productTableDatas.forEach((data) => productTableDataRow.append(data));

  return productTableDataRow;
}

function onValidInputsSubmit() {
  const productListTable = $('product-list-table');
  const productTableDataRow = createProductTableDataRow();
  productListTable.append(productTableDataRow);
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

export default function setProductAddClick() {
  $('product-add-button').addEventListener('click', onProductAddClick);
}
