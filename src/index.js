import renderAppTemplate from './renderAppTemplate.js';
import renderProductAddTemplate from './renderProductAddTemplate.js';
import renderVendingMachineManageMenuTemplate from './renderVendingMachineManageMenuTemplate.js';
import attachProductAddEvent from './attachProductAddEvent.js';
import Product from './Product.js';
import { DOM_ID_SELECTOR } from './constants.js';
import Coin from './Coin.js';
import attachVendingMachineChargeEvent from './attachVendingMachineChargeEvent.js';
import printProductManageTable from './printProductManageTable.js';

renderAppTemplate();

const product = new Product();
const coin = new Coin();

const $productAddMenu = document.getElementById(DOM_ID_SELECTOR.productAddMenu);
$productAddMenu.addEventListener('click', () => {
  renderProductAddTemplate();
  printProductManageTable(product.getProductItems());
  attachProductAddEvent(product);
});

const $vendingMachineManageMenu = document.getElementById(DOM_ID_SELECTOR.vendingMachineManageMenu);
$vendingMachineManageMenu.addEventListener('click', () => {
  renderVendingMachineManageMenuTemplate();
  attachVendingMachineChargeEvent(coin);
});
