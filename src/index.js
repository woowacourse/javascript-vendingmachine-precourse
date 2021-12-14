import { $ } from './dom.js';
import MachineManage from './mainButtons/machineManage.js';
import ProductAdd from './mainButtons/productAdd.js';
import ProductPurchase from './mainButtons/productPurchase.js';
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
    let buttons = document.createElement('div');
    buttons.append(ProductPurchase(), ProductAdd(), MachineManage());
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
  }
}
const buying = new Buying();
buying.start();