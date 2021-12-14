import { createButton, createText, createDiv, setDOM } from "./createDOM.js";
import { TITLE, MENU_BUTTON } from "../constants/constants.js";

export const loadButton = () => {
  const area = createDiv(MENU_BUTTON.ALL);

  area.appendChild(createText(TITLE.TITLE));
  area.appendChild(createButton(MENU_BUTTON.PRODUCT_MANAGE, TITLE.MANAGE_PRODUCT));
  area.appendChild(createButton(MENU_BUTTON.CHANGE_MANAGE, TITLE.MANAGE_CHARGE));
  area.appendChild(createButton(MENU_BUTTON.BUY_PRODUCT, TITLE.BUY_PRODUCT));

  setDOM(area);
};