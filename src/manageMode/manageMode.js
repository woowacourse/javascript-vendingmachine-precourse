import ChargeMoneyValidity from './chargeMondyValidity.js';
import ManageModeDrawTable from './manageModeDrawTable.js';
import { $ } from '../dom.js';
function chargeMoneyInput(){
  const input = document.createElement("input");
  input.id = "vending-machine-charge-input";
  input.placeholder = "자판기가 보유할 금액";
  input.type = "number";
  return input;
}
function chargeMoneyButton() {
  const button = document.createElement("button");
  button.id = "vending-machine-charge-button";
  button.innerText = "충전하기";
  button.addEventListener("click", ChargeMoneyValidity);
  return button;
}
function chargeMoneyDisplay() {
  const p = document.createElement("p");
  p.id = "vending-machine-charge-amount";
  p.innerText = "보유 금액: ";
  return p;
}
export default function ManageMode() {
  const container = $('#content');
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  const manageModeTitle = document.createElement('h2');
  manageModeTitle.innerText ="자판기 동전 충전하기"
  container.append(manageModeTitle, chargeMoneyInput(), chargeMoneyButton(), chargeMoneyDisplay());
  const manageTableTitle = document.createElement('h2');
  manageTableTitle.innerText = "자판기가 보유한 동전";
  container.append(manageTableTitle);
  ManageModeDrawTable();  
}