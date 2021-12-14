import { productManagementEvent, productPurchaseEvent, changeChargeEvent } from "../controllers/menu.js";
import { clickProductAddButton } from "./addProduct.js";
import { clickChargeButton } from "./chargeChanges.js";
import { clickInputMoneyButton, purchase, clickReturnButton } from "./purchaseProduct.js";

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
  const $chargeButton = document.getElementById("charge-button");
  const $coinReturnButton = document.getElementById("coin-return-button");
  
  $productAddButton.addEventListener("click", clickProductAddButton);
  $vendingMachineChargeButton.addEventListener("click", clickChargeButton);
  $chargeButton.addEventListener("click", clickInputMoneyButton);
  $coinReturnButton.addEventListener("click", clickReturnButton);

  document.querySelectorAll('.purchase-button').forEach((item) => {
    item.addEventListener('click', (e) => {
      purchase(e.target.id);

    });
  });

}