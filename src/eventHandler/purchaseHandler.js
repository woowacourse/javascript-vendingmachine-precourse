import $ from '../util/$.js';
import {
  PURCHASE_BUTTON_ID,
  PURCHASE_INPUT_ID,
  PURCHASE_AMOUNT_ID,
  PURCHASE_BUY_BUTTON_CLASS,
  PRODUCT_NODE_NAME_INDEX,
  PRODUCT_NODE_PRICE_INDEX,
  PRODUCT_NODE_QUANTITY_INDEX,
} from '../constant/constant.js';

function onMoneyInput(event, vendingMachine) {
  event.preventDefault();
  const input = $(`#${PURCHASE_INPUT_ID}`).value;
  const $moneySpan = $(`#${PURCHASE_AMOUNT_ID}`);

  vendingMachine.setCurrentMoney(input);
  $moneySpan.textContent = vendingMachine.money;
}

function onBuy(event, vendingMachine) {
  const $productNode = event.target.parentNode.parentNode.children;
  const productToBuy = {
    name: $productNode[PRODUCT_NODE_NAME_INDEX].dataset.productName,
    price: $productNode[PRODUCT_NODE_PRICE_INDEX].dataset.productPrice,
  };

  vendingMachine.sellProduct(productToBuy);
}

function buyButtonHandler(vendingMachine) {
  const $buyButton = document.querySelectorAll(`.${PURCHASE_BUY_BUTTON_CLASS}`);

  $buyButton.forEach(($button) => {
    $button.addEventListener('click', (event) => onBuy(event, vendingMachine));
  });
}

function moneyInputHandler(vendingMachine) {
  const $moneyInput = $(`#${PURCHASE_BUTTON_ID}`);

  $moneyInput.addEventListener('click', (event) => onMoneyInput(event, vendingMachine));
}

export default function purchaseHandler(vendingMachine) {
  moneyInputHandler(vendingMachine);
  buyButtonHandler(vendingMachine);
}
