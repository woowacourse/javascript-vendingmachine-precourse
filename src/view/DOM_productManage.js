import { TITLE, UNIT, PRODUCT_MANAGE, PRODUCT_MANAGE_TABLE } from "../constants/constants.js";
import { createButton, createInput, createTable, createText } from "./createDOM.js";

export const initProductManage = () => {
  const tableTD = [UNIT.PRODUCT, UNIT.PRICE, UNIT.COUNT];

  createText(TITLE.ADD_PRODUCT);
  createInput(PRODUCT_MANAGE.NAME_ID, "text", UNIT.PRODUCT);
  createInput(PRODUCT_MANAGE.PRICE_ID, "number", UNIT.PRICE);
  createInput(PRODUCT_MANAGE.QUANTITY_ID, "text", UNIT.COUNT);
  createButton(PRODUCT_MANAGE.ADD_BUTTON_ID,"추가하기");

  createText(TITLE.PRODUCT_LIST);
  createTable(PRODUCT_MANAGE_TABLE.CLASS, tableTD);
};