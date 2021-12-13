import productManage from './renderHtml/productManage.js';
import chargeChanges from './renderHtml/chargeChanges.js';
import productPurchase from './renderHtml/productPurchase.js';
export default window.onload = function manageTabButtons() {
  const productAddButton = document.getElementById('product-add-menu');
  productAddButton.addEventListener('click', () => {
    tabItems.innerHTML = productManage();
  });
  const chargeChangeButton = document.getElementById(
    'vending-machine-manage-menu'
  );
  chargeChangeButton.addEventListener('click', () => {
    tabItems.innerHTML = chargeChanges();
  });
  const productPurchaseButton = document.getElementById(
    'product-purchase-menu'
  );
  productPurchaseButton.addEventListener('click', () => {
    tabItems.innerHTML = productPurchase();
  });
};
