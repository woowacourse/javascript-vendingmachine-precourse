import { MENU_BUTTON } from "./constants/constants.js";
import { loadButton } from "./view/DOM_load.js";
import { initProductManage, showProductManage, hideProductManage } from "./view/DOM_productManage.js";
import { initChargeManage, showChargeManage, hideChargeManage } from "./view/DOM_chargeManage.js";

class VandingMachine {
  constructor() {
    loadButton();
    initProductManage();
    initChargeManage();
    this.initEventListener();
  }

  initEventListener() {
    const $buyProduct = document.querySelector(`#${MENU_BUTTON.PRODUCT_MANAGE}`);
    const $chargeManage = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}`);
    const $productManage = document.querySelector(`#${MENU_BUTTON.BUY_PRODUCT}`);

    $buyProduct.addEventListener('click', e => {
      e.preventDefault();
      showProductManage();
      hideChargeManage();
    });

    $chargeManage.addEventListener('click', e => {
      e.preventDefault();
      showChargeManage();
      hideProductManage();
    });

    $productManage.addEventListener('click', e => {
      e.preventDefault();

    });
  }
}

new VandingMachine();