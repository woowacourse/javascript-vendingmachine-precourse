import productManage from './renderHtml/productManage.js';
import chargeChanges from './renderHtml/chargeChanges.js';
import productPurchase from './renderHtml/productPurchase.js';
import addProduct from './addProduct.js';
import addChange from './addChange.js';
import addPurchase from './addPurchase.js';
export default window.onload = function manageTabButtons() {
  const productAddButton = document.querySelector('#product-add-menu');
  let products = '';
  let changes = [0, 0, 0, 0];
  let chargeamount = 0;
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
    const vendingMachineChargeButton = document.querySelector(
      '#vending-machine-charge-button'
    );
    const vendingMachinChargeAmount = document.querySelector(
      '#vending-machine-charge-amount'
    );
    vendingMachinChargeAmount.innerHTML = `보유 금액: ${chargeamount}원`;
    vendingMachineChargeButton.addEventListener('click', () => {
      const newchanges = addChange();
      chargeamount += parseInt(newchanges[0]);
      changes = changes.map((x, y) => x + newchanges[y + 1]);
      vendingMachinChargeAmount.innerHTML = `보유 금액: ${chargeamount}원`;
      console.log(changes);
    });
  });
  const productPurchaseButton = document.querySelector(
    '#product-purchase-menu'
  );
  productPurchaseButton.addEventListener('click', () => {
    tabItems.innerHTML = productPurchase();
    const productTable = document.querySelector('#product-table');
    productTable.innerHTML += products;
    const chargeButton = document.querySelector('#charge-button');
    chargeButton.addEventListener('click', () => {
      addPurchase();
    });
  });
};
