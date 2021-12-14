import { SUBTITLE, LABEL, TEXT, PLACEHOLDER, ID } from '../utils/constant.js';
import { Subtitle, InputById, ButtonById, PById, Table, Th, Tr, Td, TdById } from '../components/compoenents.js';

export default class ChargePage {
  constructor(controller) {
    this.inputCoin = InputById(PLACEHOLDER.CHARGE_COIN, ID.INPUT_CHARGE_COIN);
    this.buttonCharge = ButtonById(TEXT.CHARGE, ID.BUTTON_CHARGE);
    this.textCurrent = PById(`${TEXT.HAVE} ${localStorage.getItem('money')}`, ID.TEXT_CHARGED_COIN);
    this.table = Table();
    this.tdFirstQuantity = TdById(localStorage.getItem('10'), ID.TABLE_CURRENT_10);
    this.tdSecondQuantity = TdById(localStorage.getItem('50'), ID.TABLE_CURRENT_50);
    this.tdThirdQuantity = TdById(localStorage.getItem('100'), ID.TABLE_CURRENT_100);
    this.tdForthQuantity = TdById(localStorage.getItem('500'), ID.TABLE_CURRENT_500);
    this.controller = controller;
  }

  setTable() {
    this.table.append(
      Tr([Th(LABEL.COIN), Th(LABEL.QUANTITY_COIN)]),
      Tr([Td(LABEL.COIN10), this.tdFirstQuantity]),
      Tr([Td(LABEL.COIN50), this.tdSecondQuantity]),
      Tr([Td(LABEL.COIN100), this.tdThirdQuantity]),
      Tr([Td(LABEL.COIN500), this.tdForthQuantity]),
    );
  }

  setUI(page) {
    this.setTable();
    page.append(Subtitle(SUBTITLE.CHARGE), this.inputCoin, this.buttonCharge, this.textCurrent, Subtitle(SUBTITLE.CURRENT_COIN), this.table);
  }

  buttonHandler() {
    this.buttonCharge.addEventListener('click', e => {
      e.preventDefault();
      this.controller.chargeMoney(this.inputCoin.value);
    });
  }

  showCurrentMoney(money) {
    this.textCurrent.innerText = `${TEXT.HAVE} ${money}`;
  }

  showCurrentCoins(coins) {
    this.tdFirstQuantity.innerText = `${coins[0].quantity}개`;
    this.tdSecondQuantity.innerText = `${coins[1].quantity}개`;
    this.tdThirdQuantity.innerText = `${coins[2].quantity}개`;
    this.tdForthQuantity.innerText = `${coins[3].quantity}개`;
  }
}