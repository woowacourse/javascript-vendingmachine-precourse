import { createButton, crateText } from "./createDOM.js";
import { TITLE, MENU_BUTTON } from "../constants/constants.js";

export const loadButton = () => {
  crateText(TITLE.TITLE);
  createButton(MENU_BUTTON.PRODUCT_MANAGE, TITLE.MANAGE_PRODUCT);
  createButton(MENU_BUTTON.CHANGE_MANAGE, TITLE.MANAGE_CHARGE);
  createButton(MENU_BUTTON.BUY_PRODUCT, TITLE.BUY_PRODUCT);
};