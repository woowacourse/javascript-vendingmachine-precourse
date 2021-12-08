import { hideAllManager } from "../../views/common/hideAllManager.js";

import VisibleChargeManager from "../../views/chargeManager/visibleChargeManager.js";
import VisibleProductManager from "../../views/productManager/visibleProductManager.js";
import VisiblePurchaseManager from "../../views/purchaseManager/visiblePurchaseManager.js";

const onClickProductAddMenu = () => {
  const $productAddMenu = document.getElementById("product-add-menu");

  $productAddMenu.addEventListener("click", () => {
    hideAllManager();
    new VisibleProductManager().show();
  });
};

const onClickVendingMachineManageMenu = () => {
  const $vendingMachineManageMenu = document.getElementById(
    "vending-machine-manage-menu",
  );

  $vendingMachineManageMenu.addEventListener("click", () => {
    hideAllManager();
    new VisibleChargeManager().show();
  });
};

const onClickProductPurchaseMenu = () => {
  const $productPurchaseMenu = document.getElementById("product-purchase-menu");

  $productPurchaseMenu.addEventListener("click", () => {
    hideAllManager();
    new VisiblePurchaseManager().show();
  });
};

const addOnClickMenuButtonEvents = () => {
  onClickProductAddMenu();
  onClickVendingMachineManageMenu();
  onClickProductPurchaseMenu();
};

export { addOnClickMenuButtonEvents };
