import { productManagementEvent, productPurchaseEvent, changeChargeEvent } from "../controllers/menu.js";
import { clickProductAddButton } from "./addProduct.js"

export function initialEvent() {
  menuEvent();
  clickEvents();
}

export function menuEvent() {
  const $productAddMenu = document.getElementById("product-add-menu");
  const $productPurchaseMenu = document.getElementById("product-purchase-menu");
  const $vendingMachineManageMenu = document.getElementById("vending-machine-manage-menu");

  $productAddMenu.addEventListener("click", productManagementEvent)
  $productPurchaseMenu.addEventListener("click", productPurchaseEvent)
  $vendingMachineManageMenu.addEventListener("click", changeChargeEvent)
}

export function clickEvents() {
  const $productAddButton = document.getElementById("product-add-button");

  $productAddButton.addEventListener("click", clickProductAddButton);
}