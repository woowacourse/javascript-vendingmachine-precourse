import renderAppTemplate from './renderAppTemplate.js';
import renderProductAddTemplate from './renderProductAddTemplate.js';
import { DOM_SELECTOR } from './constants.js';

renderAppTemplate();

const $productAddMenu = document.getElementById(DOM_SELECTOR.productAddMenu);
$productAddMenu.addEventListener('click', () => {
  renderProductAddTemplate();
});
