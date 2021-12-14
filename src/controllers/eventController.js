import { productManagementEvent, productPurchaseEvent, changeChargeEvent } from "../controllers/menu.js";
import { clickProductAddButton } from "./addProduct.js";
import { clickChargeButton } from "./chargeChanges.js";

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
  const $vendingMachineChargeButton = document.getElementById("vending-machine-charge-button");

  $productAddButton.addEventListener("click", clickProductAddButton);
  $vendingMachineChargeButton.addEventListener("click", clickChargeButton);
}