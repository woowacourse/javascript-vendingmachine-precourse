import { TITLE, UNIT, PRODUCT_MANAGE, PRODUCT_MANAGE_TABLE, MENU_BUTTON } from "../constants/constants.js";
import { setDOM, createButton, createInput, createTable, createText, createDiv } from "./createDOM.js";

export const initProductManage = () => {
  const tableTD = [UNIT.PRODUCT, UNIT.PRICE, UNIT.COUNT];
  const isExist = document.querySelector(`#${MENU_BUTTON.PRODUCT_MANAGE}-area`);

  if(isExist === null) {
    //area id는 product-add-menu-area
    //DOM 생성 후 하나의 단위로 묶기 위함
    const area = createDiv(`${MENU_BUTTON.PRODUCT_MANAGE}-area`);

    area.appendChild(createText(TITLE.ADD_PRODUCT));
    area.appendChild(createInput(PRODUCT_MANAGE.NAME_ID, "text", UNIT.PRODUCT));
    area.appendChild(createInput(PRODUCT_MANAGE.PRICE_ID, "number", UNIT.PRICE));
    area.appendChild(createInput(PRODUCT_MANAGE.QUANTITY_ID, "text", UNIT.COUNT));
    area.appendChild(createButton(PRODUCT_MANAGE.ADD_BUTTON_ID,"추가하기"));
  
    area.appendChild(createText(TITLE.PRODUCT_LIST));
    area.appendChild(createTable(PRODUCT_MANAGE_TABLE.CLASS, tableTD));
  
    setDOM(area); 
  }
  else {
    showProductManage();
  }
}

export const showProductManage = () => {
  const area = document.querySelector(`#${MENU_BUTTON.PRODUCT_MANAGE}-area`);
  area.style.display = "block";
};

export const hideProductManage = () => {
  const area = document.querySelector(`#${MENU_BUTTON.PRODUCT_MANAGE}-area`);
  area.style.display = "none";
};