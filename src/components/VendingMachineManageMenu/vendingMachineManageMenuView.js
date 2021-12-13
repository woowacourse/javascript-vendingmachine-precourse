import { ID } from '../../constants/selector.js';
import { COIN } from '../../constants/coin.js';
import { Container, SubTitle, Span, SpanWithId } from '../elements.js';
import {
  createAddCoinForm,
  createCoinTable,
} from './vendingMachineManageMenu.js';
import { vendingMachine } from '../vendingMachine.js';
import { alertChargeErrorMessage, isValidCharge } from '../validator.js';

export default function VendingMachineManageView() {
  this.vendingMachineManageMenu = () => {
    const container = Container('vending-machine-manage-view');
    const addCoinSubTitle = SubTitle('자판기 동전 충전하기');
    const addCoinForm = createAddCoinForm(this.onClickAddCoinButton);
    const holdAmountSpan = Span('보유 금액: ');
    const chargeAmountSpan = SpanWithId('', ID.VENDING_MACHINE_CHARGE_AMOUNT);
    const haveCoinSubTitle = SubTitle('자판기가 보유한 동전');
    const coinTable = createCoinTable();

    container.append(
      addCoinSubTitle,
      addCoinForm,
      holdAmountSpan,
      chargeAmountSpan,
      haveCoinSubTitle,
      coinTable
    );

    return container;
  };

  this.onClickAddCoinButton = (e) => {
    e.preventDefault();
    const chargeInput = document.querySelector(
      `#${ID.VENDING_MACHINE_CHARGE_INPUT}`
    );

    if (!isValidCharge(chargeInput.value)) {
      alertChargeErrorMessage(chargeInput.value);
      return;
    }

    vendingMachine.addCharge(parseInt(chargeInput.value));
    this.renderCharge();
    vendingMachine.addCoin(parseInt(chargeInput.value));
    this.renderCoin();
  };

  this.renderCharge = () => {
    const chargeAmountSpan = document.querySelector(
      `#${ID.VENDING_MACHINE_CHARGE_AMOUNT}`
    );

    chargeAmountSpan.innerHTML = vendingMachine.charge;
  };

  this.renderCoin = () => {
    COIN.forEach((coin, index) => {
      const coinData = document.querySelector(
        `#${ID.VENDING_MACHINE_COIN[index]}`
      );

      coinData.innerHTML = `${vendingMachine.coin[coin]}개`;
    });
  };

  this.initCharge = () => {
    if (JSON.parse(localStorage.getItem('charge'))) {
      vendingMachine.charge = JSON.parse(localStorage.getItem('charge'));
    }
    this.renderCharge();
  };

  this.initCoin = () => {
    if (JSON.parse(localStorage.getItem('coin'))) {
      vendingMachine.coin = JSON.parse(localStorage.getItem('coin'));
    }
    this.renderCoin();
  };

  this.render = () => {
    const container = document.querySelector('#menu-view');

    container.append(this.vendingMachineManageMenu());
    this.initCharge();
    this.initCoin();
  };
}
