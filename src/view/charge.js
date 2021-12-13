import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER } from '../utils/constant.js';

export default class ChargePage {
  constructor(controller) {
    this.subtitleCharge = document.createElement('h3');
    this.subtitleCurrent = document.createElement('h3');
    this.inputCoin = document.createElement('input');
    this.buttonCharge = document.createElement('button');
    this.textCurrent = document.createElement('p');
    this.table = document.createElement('table');
    this.tr = document.createElement('tr');
    this.thCoin = document.createElement('th');
    this.thQuantity = document.createElement('th');
    this.controller = controller;
  }

  setUIText() {
    this.subtitleCharge.innerText = SUBTITLE.CHARGE;
    this.subtitleCurrent.innerText = SUBTITLE.CURRENT_COIN;
    this.inputCoin.setAttribute('placeholder', PLACEHOLDER.CHARGE_COIN);
    this.buttonCharge.innerText = TEXT.CHARGE;
    this.textCurrent.innerText = `${TEXT.HAVE} ${localStorage.getItem('money')}`; //처음엔 null 뜸. 고쳐야함
  }

  setTable() {
    this.thCoin.innerText = LABEL.COIN;
    this.thQuantity.innerText = LABEL.QUANTITY_COIN;
    this.tr.appendChild(this.thCoin);
    this.tr.appendChild(this.thQuantity);
    this.table.appendChild(this.tr);
  }
  
  // index.html에 생성한 tab들 넣기
  setUI(page) {
    this.setUIText();
    this.setTable();
    this.buttonCharge.style.margin = MARGIN;
    page.appendChild(this.subtitleCharge);
    page.appendChild(this.inputCoin);
    page.appendChild(this.buttonCharge);
    page.appendChild(this.textCurrent);
    page.appendChild(this.subtitleCurrent);
    page.appendChild(this.table);
  }

  buttonHandler() {
    this.buttonCharge.addEventListener('click', (e) => {
      e.preventDefault();
      this.controller.chargeMoney(this.inputCoin.value);
      console.log(this.inputCoin.value);
    })
  }

  showCurrentMoney(money) {
    this.textCurrent.innerText = `${TEXT.HAVE} ${money}`;
  }
}
