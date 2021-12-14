import PurchaseMode from '../mode/purchaseMode.js';
export default function ProductPurchase() {
  const productPurchase = document.createElement('button');
  productPurchase.id = "product-purchase-menu";
  productPurchase.innerText = "상품 구매";
  productPurchase.style = "margin-right:10px";
  productPurchase.addEventListener("click", PurchaseMode);
  return productPurchase;
}