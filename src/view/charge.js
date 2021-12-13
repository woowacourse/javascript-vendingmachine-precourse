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
    this.trFirst = document.createElement('tr');
    this.trSecond = document.createElement('tr');
    this.trThird = document.createElement('tr');
    this.trForth = document.createElement('tr');
    this.tdFirstValue = document.createElement('td');
    this.tdSecondValue = document.createElement('td');
    this.tdThirdValue = document.createElement('td');
    this.tdForthValue = document.createElement('td');
    this.tdFirstQuantity = document.createElement('td');
    this.tdSecondQuantity = document.createElement('td');
    this.tdThirdQuantity = document.createElement('td');
    this.tdForthQuantity = document.createElement('td');
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
    this.tdFirstValue.innerText = LABEL.COIN10;
    this.tdSecondValue.innerText = LABEL.COIN50;
    this.tdThirdValue.innerText = LABEL.COIN100;
    this.tdForthValue.innerText = LABEL.COIN500;
    this.tdFirstQuantity.innerText = localStorage.getItem('10');
    this.tdSecondQuantity.innerText = localStorage.getItem('50');
    this.tdThirdQuantity.innerText = localStorage.getItem('100');
    this.tdForthQuantity.innerText = localStorage.getItem('500');
    this.trFirst.append(this.tdFirstValue, this.tdFirstQuantity);
    this.trSecond.append(this.tdSecondValue, this.tdSecondQuantity);
    this.trThird.append(this.tdThirdValue, this.tdThirdQuantity);
    this.trForth.append(this.tdForthValue, this.tdForthQuantity);
    this.table.append(this.tr, this.trFirst, this.trSecond, this.trThird, this.trForth);
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
    })
  }

  showCurrentMoney(money) {
    this.textCurrent.innerText = `${TEXT.HAVE} ${money}`;
  }

  showCurrentCoins(coins) {
    this.tdFirstQuantity.innerText = coins[0].quantity;
    this.tdSecondQuantity.innerText = coins[1].quantity;
    this.tdThirdQuantity.innerText = coins[2].quantity;
    this.tdForthQuantity.innerText = coins[3].quantity;
  }
}
