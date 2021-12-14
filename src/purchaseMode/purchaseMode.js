import { $ } from '../dom.js';
import CoinTable from './coinTable.js';
import PurchaseMoneyValidity from './purchaseValidity.js';
function purchaseMoneyInput(){
  const input = document.createElement("input");
  input.id = "charge-input";
  input.placeholder = "자판기가 보유할 금액";
  input.type = "number";
  return input;
}
function purchaseMoneyButton() {
  const button = document.createElement("button");
  button.id = "charge-button";
  button.innerText = "충전하기";
  button.addEventListener("click", PurchaseMoneyValidity);
  return button;
}
function chargeMoneyDisplay() {
  const p = document.createElement("p");
  p.id = "charge-amount";
  p.innerText = "투입한 금액: ";
  return p;
}
function returnButton() {
  const button = document.createElement("button");
  button.id = "coin-return-button";
  button.innerText = "충전하기";
  button.addEventListener("click", CoinTable);
  return button;
}
export default function PurchaseMode() {
  const container = $('#content');
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  const purchaseMoneyTitle = document.createElement('h2');
  purchaseMoneyTitle.innerText = "금액 투입";
  container.append(purchaseMoneyTitle,purchaseMoneyInput(),purchaseMoneyButton(),chargeMoneyDisplay());
  const purchaseItemsTitle = document.createElement('h2');
  purchaseItemsTitle.innerText = "구매할 수 있는 상품 현황"
  container.append(purchaseItemsTitle);
  const purchaseChargeTableTitle = document.createElement('h2');
  purchaseChargeTableTitle.innerText = "잔돈";
  container.append(purchaseChargeTableTitle, returnButton());
}