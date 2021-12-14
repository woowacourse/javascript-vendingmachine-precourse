
export function productManagementEvent(e) {
  e.preventDefault();
  const $productComponent = document.getElementById("product-component");
  const $purchaseComponent = document.getElementById("purchase-component");
  const $chargeComponent = document.getElementById("charge-component");

  $chargeComponent.hidden = true;
  $purchaseComponent.hidden = true;
  $productComponent.hidden = false;
}

export function productPurchaseEvent(e) {
  e.preventDefault();
  const $productComponent = document.getElementById("product-component");
  const $purchaseComponent = document.getElementById("purchase-component");
  const $chargeComponent = document.getElementById("charge-component");

  $chargeComponent.hidden = true;
  $productComponent.hidden = true;
  $purchaseComponent.hidden = false;
}

export function changeChargeEvent(e) {
  e.preventDefault();
  const $productComponent = document.getElementById("product-component");
  const $purchaseComponent = document.getElementById("purchase-component");
  const $chargeComponent = document.getElementById("charge-component");

  $productComponent.hidden = true;
  $purchaseComponent.hidden = true;
  $chargeComponent.hidden = false;
}
