import productManage from './renderHtml/productManage.js';
import chargeChanges from './renderHtml/chargeChanges.js';
import productPurchase from './renderHtml/productPurchase.js';
import addProduct from './addProduct.js';
export default window.onload = function manageTabButtons() {
  const productAddButton = document.querySelector('#product-add-menu');
  let products = '';
  productAddButton.addEventListener('click', () => {
    tabItems.innerHTML = productManage();
    const productTable = document.querySelector('#product-table');
    productTable.innerHTML += products;
    const productAddButton = document.querySelector('#product-add-button');
    productAddButton.addEventListener('click', () => {
      productTable.innerHTML += addProduct();
      products += addProduct();
      console.log(products);
    });
  });
  const chargeChangeButton = document.querySelector(
    '#vending-machine-manage-menu'
  );
  chargeChangeButton.addEventListener('click', () => {
    tabItems.innerHTML = chargeChanges();
  });
  const productPurchaseButton = document.querySelector(
    '#product-purchase-menu'
  );
  productPurchaseButton.addEventListener('click', () => {
    tabItems.innerHTML = productPurchase();
  });
};
