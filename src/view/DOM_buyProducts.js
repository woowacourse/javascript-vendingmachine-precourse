import { TITLE, UNIT, BUY_PRODUCT, PRODUCT_PURCHASE_TABLE, PRODUCT_MANAGE_TABLE, MENU_BUTTON, COINS } from "../constants/constants.js";
import { setDOM, createButton, createPtag, createInput, createTable, createText, createDiv, createTd } from "./createDOM.js";

export const initBuyProduct = () => {
  const productTable = [UNIT.PRODUCT, UNIT.QUANTITY, UNIT.COUNT, UNIT.BUY];
  const coinTable = [UNIT.COIN, UNIT.QUANTITY];

  //area id는 vending-machine-manage-menu-area
  const area = createDiv(`${MENU_BUTTON.BUY_PRODUCT}-area`);

  area.appendChild(createText(TITLE.SET_MONEY));
  area.appendChild(createInput(BUY_PRODUCT.CHARGE_INPUT, "text", TITLE.SET_MONEY_TEXT));
  area.appendChild(createButton(BUY_PRODUCT.CHARGE_BUTTON,"충전하기"));
  area.appendChild(createPtag(UNIT.HAVE, "coin-text"));
  area.appendChild(createPtag("", "have-coin"));

  area.appendChild(createText(TITLE.CAN_BUY_LIST));
  area.appendChild(createTable(PRODUCT_MANAGE_TABLE.CLASS, productTable));
  
  area.appendChild(createText(TITLE.CHARGE));
  area.appendChild(createButton(BUY_PRODUCT.COIN_RETURN_BUTTON,"반환하기"));
  area.appendChild(createTable(PRODUCT_PURCHASE_TABLE.CLASS, coinTable));

  setDOM(area); 
  hideBuyProduct();
}

export const showBuyProduct = () => {
  const area = document.querySelector(`#${MENU_BUTTON.BUY_PRODUCT}-area`);
  area.style.display = "block";
};

export const hideBuyProduct = () => {
  const area = document.querySelector(`#${MENU_BUTTON.BUY_PRODUCT}-area`);
  area.style.display = "none";
};