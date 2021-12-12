import { ID } from '../constants/selector.js';
import {
  Container,
  SubTitle,
  Span,
  SpanWithId,
} from '../components/elements.js';
import {
  createAddCoinForm,
  createCoinTable,
} from '../components/vendingMachineManageMenu.js';
import { vendingMachine } from '../components/vendingMachine.js';

export default function VendingMachineManageView(container) {
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
    container.setAttribute('class', 'invisible');

    return container;
  };

  this.onClickAddCoinButton = (e) => {
    e.preventDefault();
    const chargeInput = document.querySelector(
      `#${ID.VENDING_MACHINE_CHARGE_INPUT}`
    );

    vendingMachine.addCharge(parseInt(chargeInput.value));
    this.renderCharge();
  };

  this.renderCharge = () => {
    const chargeAmountSpan = document.querySelector(
      `#${ID.VENDING_MACHINE_CHARGE_AMOUNT}`
    );

    chargeAmountSpan.innerHTML = vendingMachine.charge;
  };

  this.initCharge = () => {
    if (JSON.parse(localStorage.getItem('charge'))) {
      vendingMachine.charge = JSON.parse(localStorage.getItem('charge'));
    }
    this.renderCharge();
  };

  this.render = () => {
    container.append(this.vendingMachineManageMenu());
    this.initCharge();
  };
}
