import { HEADER } from '../common/constants.js';
import { createDiv, createHeader } from '../common/CreateElement.js';
import $app from '../common/elements.js';

import createProductAddForm from './CreateForm.js';
import createProductListTable from './CreateTable.js';

function createProductAdd(productManageDiv) {
  const productAddHeader = createHeader(HEADER.PRODUCT_ADD);
  productManageDiv.append(productAddHeader);
  const productAddForm = createProductAddForm();
  productManageDiv.append(productAddForm);
}

function createProductList(productManageDiv) {
  const productListHeader = createHeader(HEADER.PRODUCT_LIST);
  productManageDiv.append(productListHeader);
  const productListTable = createProductListTable();
  productManageDiv.append(productListTable);
}

export default function createProductManage() {
  const productManageDiv = createDiv();
  createProductAdd(productManageDiv);
  createProductList(productManageDiv);
  $app.append(productManageDiv);
}
