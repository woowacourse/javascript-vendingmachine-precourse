import { $, initInput } from '../../utils/dom.js';
import { ID } from '../../constants/selector.js';
import { MACHINE } from '../../constants/machine.js';
import { STORAGE_KEY } from '../../constants/storageKey.js';
import { Container } from '../elements.js';
import { chargeAmountSpan, coinAddForm, coinTable } from './element.js';
import { vendingMachine } from '../vendingMachine.js';
import { alertChargeErrorMessage, isValidCharge } from '../validator.js';
import { getLocalStorage } from '../store.js';

export default function VendingMachineManageView() {
  this.vendingMachineManageMenu = () => {
    const container = Container(ID.VENDING_MACHINE_MANAGE_VIEW);
    const form = coinAddForm(this.onClickAddCoinButton);
    const chargeSpan = chargeAmountSpan();
    const table = coinTable();

    container.append(...form, ...chargeSpan, ...table);

    return container;
  };

  this.onClickAddCoinButton = (e) => {
    e.preventDefault();
    const chargeInput = $(`#${ID.VENDING_MACHINE_CHARGE_INPUT}`);
    const charge = chargeInput.value;
    f;

    if (!isValidCharge(charge)) {
      alertChargeErrorMessage(charge);
      return;
    }

    vendingMachine.addCharge(parseInt(charge));
    vendingMachine.addCoin(parseInt(charge));
    this.renderCharge();
    this.renderCoin();
    initInput(chargeInput);
  };

  this.renderCharge = () => {
    const chargeAmountSpan = $(`#${ID.VENDING_MACHINE_CHARGE_AMOUNT}`);

    chargeAmountSpan.innerHTML = `${vendingMachine.charge}${MACHINE.WON}`;
  };

  this.renderCoin = () => {
    MACHINE.COIN.forEach((coin, index) => {
      const coinData = $(`#${ID.VENDING_MACHINE_COIN[index]}`);

      coinData.innerHTML = `${vendingMachine.coin[coin]}${MACHINE.COUNT}`;
    });
  };

  this.initCharge = () => {
    if (getLocalStorage(STORAGE_KEY.CHARGE)) {
      vendingMachine.charge = getLocalStorage(STORAGE_KEY.CHARGE);
    }
    this.renderCharge();
  };

  this.initCoin = () => {
    if (getLocalStorage(STORAGE_KEY.COIN)) {
      vendingMachine.coin = getLocalStorage(STORAGE_KEY.COIN);
    }
    this.renderCoin();
  };

  this.render = () => {
    const container = $(`#${ID.MENU_VIEW}`);

    container.append(this.vendingMachineManageMenu());
    this.initCharge();
    this.initCoin();
  };
}
