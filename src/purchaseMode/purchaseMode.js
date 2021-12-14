import { $ } from '../dom.js';
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
  button.addEventListener("click", purchaseMoneyValidity);
  return button;
}
export default function PurchaseMode() {
  const container = $('#content');
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  const purchaseMoneyTitle = document.createElement('h2');
  purchaseMoneyTitle.innerText = "금액 투입";
container.append(purchaseMoneyTitle,purchaseMoneyInput(),purchaseMoneyButton());
  const purchaseItemsTitle = document.createElement('h2');
  manageModeTitle.innerText = "구매할 수 있는 상품 현황"
  
  const purchaseChargeTableTitle = document.createElement('h2');
  manageTableTitle.innerText = "잔돈";
  
}