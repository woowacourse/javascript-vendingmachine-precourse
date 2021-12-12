import { SUBTITLE, LABEL, MARGIN, TEXT, PLACEHOLDER } from '../utils/constant.js';

export default class ChargePage {
  constructor(page) {
    this.subtitleCharge = document.createElement('h3');
    this.subtitleCurrent = document.createElement('h3');
    this.inputCoin = document.createElement('input');
    this.buttonCharge = document.createElement('button');
    this.textCurrent = document.createElement('p');
    this.showCurrent = document.createElement('p');
    this.table = document.createElement('table');
    this.tr = document.createElement('tr');
    this.thCoin = document.createElement('th');
    this.thQuantity = document.createElement('th');
    this.td = document.createElement('td');
    this.page = page;
  }

  setUIText() {
    this.subtitleCharge.innerText = SUBTITLE.CHARGE;
    this.subtitleCurrent.innerText = SUBTITLE.CURRENT_COIN;
    this.inputCoin.setAttribute('placeholder', PLACEHOLDER.CHARGE_COIN);
    this.buttonCharge.innerText = TEXT.CHARGE;
    this.textCurrent.innerText = TEXT.HAVE;
  }

  setTable() {
    this.thCoin.innerText = LABEL.COIN;
    this.thQuantity.innerText = LABEL.QUANTITY_COIN;
    this.tr.appendChild(this.thCoin);
    this.tr.appendChild(this.thQuantity);
    this.table.appendChild(this.tr);
  }
  
  // index.html에 생성한 tab들 넣기
  setUI() {
    this.setUIText();
    this.setTable();
    this.buttonCharge.style.margin = MARGIN;
    this.page.appendChild(this.subtitleCharge);
    this.page.appendChild(this.inputCoin);
    this.page.appendChild(this.buttonCharge);
    this.page.appendChild(this.textCurrent);
    this.page.appendChild(this.showCurrent);
    this.page.appendChild(this.subtitleCurrent);
    this.page.appendChild(this.table);
  }
}
