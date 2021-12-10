import { MANAGE_PRODUCT_TAP, PRODUCT_TABLE } from "../utils/constants.js";
import { onClickAddButton } from "../menus/manageProductMenu.js";
import { vendingMachine } from "../components/vendingMachine.js";
import {
  makeButton,
  makeTitle,
  makeTableHeaders,
  makeInput,
  makeTdWithClass,
} from "../utils/utils.js";

// 상품 추가하기 폼
const makeInputForm = () => {
  const form = document.createElement("form");
  MANAGE_PRODUCT_TAP.addProductInputs.forEach(input => {
    form.appendChild(makeInput(input));
  });
  form.appendChild(
    makeButton(MANAGE_PRODUCT_TAP.addButtonInformation, onClickAddButton)
  );

  return form;
};

const makeAddProductContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(MANAGE_PRODUCT_TAP.addProductTitle));
  div.appendChild(makeInputForm());

  return div;
};

// 상품 현황 테이블
const makeProductRaw = product => {
  const [name, price, quantity] = product.getInformation();
  const tableRaw = document.createElement("tr");
  tableRaw.className = MANAGE_PRODUCT_TAP.productTableRawClass;
  tableRaw.appendChild(
    makeTdWithClass(name, MANAGE_PRODUCT_TAP.productNameClass)
  );
  tableRaw.appendChild(
    makeTdWithClass(price, MANAGE_PRODUCT_TAP.productPriceClass)
  );
  tableRaw.appendChild(
    makeTdWithClass(quantity, MANAGE_PRODUCT_TAP.productQuantityClass)
  );

  return tableRaw;
};

const makeProductStateGraph = () => {
  const table = document.createElement("table");
  table.appendChild(
    makeTableHeaders(MANAGE_PRODUCT_TAP.productStateTableHeader, PRODUCT_TABLE)
  );
  vendingMachine.products.forEach(product =>
    table.appendChild(makeProductRaw(product))
  );
  table.style.borderCollapse = PRODUCT_TABLE.collapse;
  table.style.textAlign = PRODUCT_TABLE.textAlign;

  return table;
};

const makeProductStateContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(MANAGE_PRODUCT_TAP.productStateTitle));
  div.appendChild(makeProductStateGraph());

  return div;
};

export const renderProduct = product => {
  const $table = document.querySelector("table");
  $table.appendChild(makeProductRaw(product));
};

export const renderManageProductMenuView = () => {
  const $view_container = document.getElementById("view-container");
  $view_container.appendChild(makeAddProductContainer());
  $view_container.appendChild(makeProductStateContainer());
};
