import { TITLE, UNIT, CHARGE_MANAGE, PRODUCT_PURCHASE_TABLE, MENU_BUTTON, COINS } from "../constants/constants.js";
import { setDOM, createButton, createPtag, createInput, createTable, createText, createDiv, createTd } from "./createDOM.js";

export const initChargeManage = () => {
  const tableTD = [UNIT.COIN, UNIT.QUANTITY];
  //area id는 vending-machine-manage-menu-area
  const area = createDiv(`${MENU_BUTTON.CHANGE_MANAGE}-area`);

  area.appendChild(createText(TITLE.ADD_CHARGE));
  area.appendChild(createInput(CHARGE_MANAGE.INPUT_ID, "text", TITLE.STORE_CHARGE));
  area.appendChild(createButton(CHARGE_MANAGE.BUTTON_ID,"충전하기"));
  area.appendChild(createPtag(UNIT.HAVE, "coin-text"));
  area.appendChild(createPtag("", "have-coin"));

  area.appendChild(createText(TITLE.STORE_CHARGE));
  area.appendChild(createTable(PRODUCT_PURCHASE_TABLE.CLASS, tableTD));

  setDOM(area); 
  hideChargeManage();
}

export const showChargeManage = () => {
  const area = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}-area`);
  area.style.display = "block";
  getCoin();
};

export const hideChargeManage = () => {
  const area = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}-area`);
  area.style.display = "none";
};


export const getCoin = () => {
  const isExist = document.querySelector(`.${PRODUCT_PURCHASE_TABLE.CLASS}`);
  
  if(isExist === null) {
    COINS.forEach((coinUnit) => createTd(PRODUCT_PURCHASE_TABLE.CLASS, coinUnit));
  }
}