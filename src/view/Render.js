import { TEMPLATE, DOM } from '../utils/constant.js';

export default class Render {
  productAddMenuTemplate = () => {
    DOM.$VENDING_MACHINE_SECTION.innerHTML = TEMPLATE.PRODUCT_ADD_MENU;
  };
}
