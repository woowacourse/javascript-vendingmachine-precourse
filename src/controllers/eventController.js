import { productManagementEvent, productPurchaseEvent, changeChargeEvent } from "../controllers/menu.js";

export function initialEvent() {
  const $productAddMenu = document.getElementById("product-add-menu");
  const $productPurchaseMenu = document.getElementById("product-purchase-menu");
  const $vendingMachineManageMenu = document.getElementById("vending-machine-manage-menu");

  $productAddMenu.addEventListener("click", productManagementEvent)
  $productPurchaseMenu.addEventListener("click", productPurchaseEvent)
  $vendingMachineManageMenu.addEventListener("click", changeChargeEvent)
}