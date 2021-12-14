import { MENU_BUTTON } from "./constants/constants.js";
import { loadButton } from "./view/DOM_load.js";
import { initProductManage, showProductManage, hideProductManage } from "./view/DOM_productManage.js";
import { initChargeManage, showChargeManage, hideChargeManage } from "./view/DOM_chargeManage.js";
import { hideBuyProduct, initBuyProduct, showBuyProduct } from "./view/DOM_buyProducts.js";
import ProductManage from "./controller/productManage.js";

class VandingMachine {
  constructor() {
    loadButton();
    initProductManage();
    initChargeManage();
    initBuyProduct();
    this.initEventListener();
  }

  initEventListener() {
    const $buyProduct = document.querySelector(`#${MENU_BUTTON.BUY_PRODUCT}`);
    const $chargeManage = document.querySelector(`#${MENU_BUTTON.CHANGE_MANAGE}`);
    const $productManage = document.querySelector(`#${MENU_BUTTON.PRODUCT_MANAGE}`);

    $buyProduct.addEventListener('click', e => {
      e.preventDefault();
      showBuyProduct();
      hideChargeManage();
      hideProductManage();
    });

    $chargeManage.addEventListener('click', e => {
      e.preventDefault();
      showChargeManage();
      hideProductManage();
      hideBuyProduct();
    });

    $productManage.addEventListener('click', e => {
      e.preventDefault();
      showProductManage();
      hideChargeManage();
      hideBuyProduct();
    });
  }
}

new VandingMachine();
new ProductManage();