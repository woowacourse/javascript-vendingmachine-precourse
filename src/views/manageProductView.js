import { PRODUCT_TABLE, VIEW_CONTAINER } from "../assets/constants/public.js";
import { onClickAddButton } from "../controllers/manageProductController.js";
import {
  makeButton,
  makeTitle,
  makeTableHeaders,
  makeInput,
  makeTdWithClass,
} from "./publicView.js";
import { MANAGE_TAP } from "../assets/constants/manageTap.js";

// 상품 추가하기 폼
const makeInputForm = () => {
  const form = document.createElement("form");
  MANAGE_TAP.ADD_PRODUCT_INPUTS.forEach(input => {
    form.appendChild(makeInput(input));
  });
  form.appendChild(makeButton(MANAGE_TAP.ADD_BUTTON, onClickAddButton));

  return form;
};

const makeAddProductContainer = () => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(MANAGE_TAP.ADD_PRODUCT_TITLE));
  div.appendChild(makeInputForm());

  return div;
};

// 상품 현황 테이블
const makeProductRaw = product => {
  const information = product.getInformation();
  const tableRaw = document.createElement("tr");
  tableRaw.className = MANAGE_TAP.PRODUCT_TABLE_RAW_CLASS;
  information.forEach((tag, index) => {
    tableRaw.appendChild(
      makeTdWithClass(tag, MANAGE_TAP.PRODUCT_TABLE_CLASSES[index])
    );
  });

  return tableRaw;
};

const makeProductStateGraph = manageProduct => {
  const table = document.createElement("table");
  table.appendChild(
    makeTableHeaders(MANAGE_TAP.PRODUCT_STATE_TABLE_HEADERS, PRODUCT_TABLE)
  );
  manageProduct.products.forEach(product =>
    table.appendChild(makeProductRaw(product))
  );
  table.style.borderCollapse = PRODUCT_TABLE.collapse;
  table.style.textAlign = PRODUCT_TABLE.textAlign;

  return table;
};

const makeProductStateContainer = manageProduct => {
  const div = document.createElement("div");
  div.appendChild(makeTitle(MANAGE_TAP.PRODUCT_STATE_TITLE));
  div.appendChild(makeProductStateGraph(manageProduct));

  return div;
};

export const renderProduct = product => {
  const $table = document.querySelector("table");
  $table.appendChild(makeProductRaw(product));
};

export const renderManageProductMenuView = manageProduct => {
  const $view_container = document.getElementById(VIEW_CONTAINER);
  $view_container.appendChild(makeAddProductContainer());
  $view_container.appendChild(makeProductStateContainer(manageProduct));
};
