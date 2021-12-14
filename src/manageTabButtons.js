import productManage from './renderHtml/productManage.js';
import chargeChanges from './renderHtml/chargeChanges.js';
import productPurchase from './renderHtml/productPurchase.js';
import addProduct from './addProduct.js';
import addChange from './addChange.js';
import addPurchase from './addPurchase.js';
import productManageTable from './productManageTable.js';
import productPurchaseTable from './productPurchaseTable.js';
export default window.onload = function manageTabButtons() {
  const productAddButton = document.querySelector('#product-add-menu');
  let products = [];
  let changes = [0, 0, 0, 0];
  let chargeamount = 0;
  productAddButton.addEventListener('click', () => {
    tabItems.innerHTML = productManage();
    const productTable = document.querySelector('#product-table');
    products.map((x) => (productTable.innerHTML += productManageTable(x)));
    const productAddButton = document.querySelector('#product-add-button');
    productAddButton.addEventListener('click', () => {
      productTable.innerHTML += productManageTable(addProduct());
      products.push(addProduct());
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
    let coin_500 = document.querySelector('#vending-machine-coin-500-quantity');
    let coin_100 = document.querySelector('#vending-machine-coin-100-quantity');
    let coin_50 = document.querySelector('#vending-machine-coin-50-quantity');
    let coin_10 = document.querySelector('#vending-machine-coin-10-quantity');
    vendingMachinChargeAmount.innerHTML = `보유 금액: ${chargeamount}원`;
    coin_500.innerHTML = parseInt(changes[0]);
    coin_100.innerHTML = parseInt(changes[1]);
    coin_50.innerHTML = parseInt(changes[2]);
    coin_10.innerHTML = parseInt(changes[3]);
    vendingMachineChargeButton.addEventListener('click', () => {
      const newchanges = addChange();
      chargeamount += parseInt(newchanges[0]);

      changes = changes.map((x, y) => x + newchanges[y + 1]);
      vendingMachinChargeAmount.innerHTML = `보유 금액: ${chargeamount}원`;
      console.log(changes);
      coin_500.innerHTML = parseInt(changes[0]);
      coin_100.innerHTML = parseInt(changes[1]);
      coin_50.innerHTML = parseInt(changes[2]);
      coin_10.innerHTML = parseInt(changes[3]);
    });
  });
  const productPurchaseButton = document.querySelector(
    '#product-purchase-menu'
  );
  productPurchaseButton.addEventListener('click', () => {
    tabItems.innerHTML = productPurchase();
    const productTable = document.querySelector('#product-table');
    products.map((x) => (productTable.innerHTML += productPurchaseTable(x)));
    const chargeButton = document.querySelector('#charge-button');
    chargeButton.addEventListener('click', () => {
      addPurchase();
    });
    const purchaseButton = document.querySelector('#purchaseButton');
    purchaseButton.addEventListener('click', () => {});
  });
};
