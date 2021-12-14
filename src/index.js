import { $ } from './dom.js';
import VendingMachine from './vendingMachine/vendingMachine.js';
export class Buying{
  drawMainTitle() {
    let h1 = document.createElement('h1');
    const icon = document.createElement('img');
    icon.src = "../images/beverage_icon.png";
    icon.alt = "음료";
    icon.style = "display:inner; width:50px; height:50px";
    const icon2 = icon.cloneNode(true);
    h1.append(icon, "자판기", icon2);
    $('#app').appendChild(h1);
  }
  drawModeButtons() {
    let button = document.createElement('button');
    const productPurchase = button.cloneNode(true);
    productPurchase.id = "product-purchase-menu";
    productPurchase.innerText = "상품 구매";
    const machineManage = button.cloneNode(true);
    machineManage.id = "vending-machine-manage-menu";
    machineManage.innerText = "잔돈 충전";
    const productAdd = button.cloneNode(true);
    productAdd.id = "product-add-menu";
    productAdd.innerText = "상품 관리";
    let buttons = document.createElement('div');
    buttons.append(productAdd, machineManage, productPurchase);
    $('#app').appendChild(buttons);
  }
  drawContentBox() {
    let contents = document.createElement('div');
    contents.id = "content";
    $('#app').appendChild(contents);
  } 
  start() {
    this.drawMainTitle();
    this.drawModeButtons();
    this.drawContentBox();
    const machine = new VendingMachine();
    console.log(machine);
  }
}
const buying = new Buying();
buying.start();