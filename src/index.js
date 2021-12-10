import renderAppTemplate from './renderAppTemplate.js';
import renderProductAddTemplate from './renderProductAddTemplate.js';
import attachProductAddEvent from './attachProductAddEvent.js';
import Product from './Product.js';
import { DOM_ID_SELECTOR } from './constants.js';

renderAppTemplate();

const product = new Product();

const $productAddMenu = document.getElementById(DOM_ID_SELECTOR.productAddMenu);
$productAddMenu.addEventListener('click', () => {
  renderProductAddTemplate();
  attachProductAddEvent(product);
});
