import { SUBTITLE, LABEL, TEXT, PLACEHOLDER } from '../utils/constant.js';
import { Subtitle, Input, Button, P, Table, Th, Tr, Td } from '../components/compoenents.js';

export default class ChargePage {
  constructor(controller) {
    this.inputCoin = Input(PLACEHOLDER.CHARGE_COIN);
    this.buttonCharge = Button(TEXT.CHARGE);
    this.textCurrent = P(`${TEXT.HAVE} ${localStorage.getItem('money')}`);
    this.table = Table();
    this.tdFirstQuantity = Td(localStorage.getItem('10'));
    this.tdSecondQuantity = Td(localStorage.getItem('50'));
    this.tdThirdQuantity = Td(localStorage.getItem('100'));
    this.tdForthQuantity = Td(localStorage.getItem('500'));
    this.controller = controller;
  }

  setTable() {
    this.table.append(
      Tr([Th(LABEL.COIN),Th(LABEL.QUANTITY_COIN)]),
      Tr([Td(LABEL.COIN10), this.tdFirstQuantity]),
      Tr([Td(LABEL.COIN50), this.tdSecondQuantity]),
      Tr([Td(LABEL.COIN100), this.tdThirdQuantity]),
      Tr([Td(LABEL.COIN500), this.tdForthQuantity]),
    );
  }
  
  setUI(page) {
    this.setTable();
    page.append(
      Subtitle(SUBTITLE.CHARGE),
      this.inputCoin,
      this.buttonCharge,
      this.textCurrent,
      Subtitle(SUBTITLE.CURRENT_COIN),
      this.table
    );
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
