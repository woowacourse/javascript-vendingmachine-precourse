import { HEADER } from '../common/constants.js';
import {
  createDiv,
  createHeader,
  createMenuDiv,
} from '../common/CreateElement.js';
import { $app } from '../common/elements.js';

import createProductAddForm from './CreateForm.js';
import { createProductListTable } from './CreateTable.js';

function createProductManageDiv() {
  const id = 'product-manage-div';
  const productManageDiv = createMenuDiv(id);

  return productManageDiv;
}

function createProductAdd() {
  const productAddDiv = createDiv();
  const productAddHeader = createHeader(HEADER.PRODUCT_ADD);
  const productAddForm = createProductAddForm();
  productAddDiv.append(productAddHeader, productAddForm);

  return productAddDiv;
}

function createProductList() {
  const productListDiv = createDiv();
  const productListHeader = createHeader(HEADER.PRODUCT_LIST);
  const productListTable = createProductListTable();
  productListDiv.append(productListHeader, productListTable);

  return productListDiv;
}

export default function createProductManage() {
  const productManageDiv = createProductManageDiv();
  const productAdd = createProductAdd();
  const productList = createProductList();
  productManageDiv.append(productAdd, productList);
  $app.append(productManageDiv);
}
