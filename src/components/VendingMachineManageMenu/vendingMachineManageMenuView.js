import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { STORAGE_KEY } from '../../constants/storageKey.js';
import { Container, SubTitle, Span, SpanWithId } from '../elements.js';
import {
  createAddCoinForm,
  createCoinTable,
} from './vendingMachineManageMenu.js';
import { vendingMachine } from '../vendingMachine.js';
import { alertChargeErrorMessage, isValidCharge } from '../validator.js';

export default function VendingMachineManageView() {
  this.vendingMachineManageMenu = () => {
    const container = Container(ID.VENDING_MACHINE_MANAGE_VIEW);
    const addCoinSubTitle = SubTitle(MACHINE.SUBTITLE.ADD_COIN);
    const addCoinForm = createAddCoinForm(this.onClickAddCoinButton);
    const holdAmountSpan = Span(MACHINE.TEXT.HAVE_AMOUNT);
    const chargeAmountSpan = SpanWithId('', ID.VENDING_MACHINE_CHARGE_AMOUNT);
    const haveCoinSubTitle = SubTitle(MACHINE.SUBTITLE.HAVE_COIN);
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

    chargeAmountSpan.innerHTML = `${vendingMachine.charge}${MACHINE.WON}`;
  };

  this.renderCoin = () => {
    MACHINE.COIN.forEach((coin, index) => {
      const coinData = document.querySelector(
        `#${ID.VENDING_MACHINE_COIN[index]}`
      );

      coinData.innerHTML = `${vendingMachine.coin[coin]}${MACHINE.COUNT}`;
    });
  };

  this.initCharge = () => {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY.CHARGE))) {
      vendingMachine.charge = JSON.parse(
        localStorage.getItem(STORAGE_KEY.CHARGE)
      );
    }
    this.renderCharge();
  };

  this.initCoin = () => {
    if (JSON.parse(localStorage.getItem(STORAGE_KEY.COIN))) {
      vendingMachine.coin = JSON.parse(localStorage.getItem(STORAGE_KEY.COIN));
    }
    this.renderCoin();
  };

  this.render = () => {
    const container = document.querySelector(`#${ID.MENU_VIEW}`);

    container.append(this.vendingMachineManageMenu());
    this.initCharge();
    this.initCoin();
  };
}
