import { MENU_BUTTON } from "./constants/constants.js";
import { loadButton } from "./view/DOM_load.js";
import { initProductManage } from "./view/DOM_productManage.js";
import { initChargeManage } from "./view/DOM_chargeManage.js";

class VandingMachine {
  constructor() {
    loadButton();
    this.initEventListener();
  }

  initEventListener() {
    const $buyProduct = document.querySelector(`#${MENU_BUTTON.PRODUCT_MANAGE}`);
    const $chargeManage = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}`);
    const $productManage = document.querySelector(`#${MENU_BUTTON.BUY_PRODUCT}`);

    $buyProduct.addEventListener('click', e => {
      e.preventDefault();
      initProductManage();
    });

    $chargeManage.addEventListener('click', e => {
      e.preventDefault();
      initChargeManage();
    });

    $productManage.addEventListener('click', e => {
      e.preventDefault();

    });
  }
}

new VandingMachine();