import { DOM_ID_SELECTOR, BUTTON_MESSAGE, TITLE_MESSAGE } from '../constants.js';
import makeButton from './common/makeButton.js';

const makeTitle = () => {
  const $title = document.createElement('h1');
  $title.appendChild(document.createTextNode(TITLE_MESSAGE));

  return $title;
};

const makeMenuTab = () => {
  const $menuTab = document.createElement('div');

  const $productAddMenu = makeButton(BUTTON_MESSAGE.productAddMenu, DOM_ID_SELECTOR.productAddMenu);
  const $vendingMachineManageMenu = makeButton(BUTTON_MESSAGE.vendingMachineManageMenu, DOM_ID_SELECTOR.vendingMachineManageMenu);
  const $productPurchaseMenu = makeButton(BUTTON_MESSAGE.productPurchaseMenu, DOM_ID_SELECTOR.productPurchaseMenu);

  $menuTab.appendChild($productAddMenu);
  $menuTab.appendChild($vendingMachineManageMenu);
  $menuTab.appendChild($productPurchaseMenu);

  return $menuTab;
};

const makeContent = () => {
  const $content = document.createElement('div');
  $content.setAttribute('id', DOM_ID_SELECTOR.content);

  return $content;
};

const renderAppTemplate = () => {
  const $app = document.getElementById('app');
  $app.appendChild(makeTitle());
  $app.appendChild(makeMenuTab());
  $app.appendChild(makeContent());
};

export default renderAppTemplate;
