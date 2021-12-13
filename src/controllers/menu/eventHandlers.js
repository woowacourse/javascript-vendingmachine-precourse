import { hideAllManager } from "../../views/common/hideAllManager.js";

import VisibleChargeManager from "../../views/chargeManager/visibleChargeManager.js";
import VisibleProductManager from "../../views/productManager/visibleProductManager.js";
import VisiblePurchaseManager from "../../views/purchaseManager/visiblePurchaseManager.js";

// 상품 관리 메뉴 버튼 클릭 이벤트
const onClickProductAddMenu = () => {
  const $productAddMenuButton = document.getElementById("product-add-menu");

  $productAddMenuButton.addEventListener("click", () => {
    hideAllManager();
    new VisibleProductManager().show();
  });
};

// 잔돈 충전 메뉴 버튼 클릭 이벤트
const onClickVendingMachineManageMenu = () => {
  const $vendingMachineManageMenuButton = document.getElementById(
    "vending-machine-manage-menu",
  );

  $vendingMachineManageMenuButton.addEventListener("click", () => {
    hideAllManager();
    new VisibleChargeManager().show();
  });
};

// 상품 구매 메뉴 버튼 클릭 이벤트
const onClickProductPurchaseMenu = () => {
  const $productPurchaseMenuButton = document.getElementById(
    "product-purchase-menu",
  );

  $productPurchaseMenuButton.addEventListener("click", () => {
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
