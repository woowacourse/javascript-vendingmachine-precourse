import { TITLE, UNIT, PRODUCT_MANAGE, PRODUCT_PURCHASE_TABLE, MENU_BUTTON, COINS } from "../constants/constants.js";
import { setDOM, createButton, createInput, createTable, createText, createDiv, createTd } from "./createDOM.js";

export const initChargeManage = () => {
  const tableTD = [UNIT.COIN, UNIT.QUANTITY];
  const isExist = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}-area`);

  if(isExist === null) {
    //area id는 vending-machine-manage-menu-area
    const area = createDiv(`${MENU_BUTTON.CHANGE_MANAGE}-area`);

    area.appendChild(createText(TITLE.ADD_CHARGE));
    area.appendChild(createInput(PRODUCT_MANAGE.NAME_ID, "text", TITLE.STORE_CHARGE));
    area.appendChild(createButton(PRODUCT_MANAGE.ADD_BUTTON_ID,"충전하기"));
    area.appendChild(createText(UNIT.HAVE));

    area.appendChild(createText(TITLE.STORE_CHARGE));
    area.appendChild(createTable(PRODUCT_PURCHASE_TABLE.CLASS, tableTD));
    
    //COINS.forEach((coinUnit) => createTd(PRODUCT_PURCHASE_TABLE.CLASS, coinUnit));

    setDOM(area); 
  }
  else {
    showProductManage();
  }
}

export const showChargeManage = () => {
  const area = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}-area`);
  area.style.display = "block";
};

export const hideChargeManage = () => {
  const area = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}-area`);
  area.style.display = "none";
};