import Navigator from '../store/Navigator.js';
import Title from '../core/Title.js';
import Input from '../core/Input.js';
import Button from '../core/Button.js';
import CoinTable from '../core/CoinTable.js';
import AmountView from '../core/AmountView.js';
import { isValidCoinRecharge } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, SELECTOR, EVENT } from '../constant/dom.js';

export default class TabMachineManage {
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.$root = null;
    this.navigator = new Navigator();

    this.createRootElement();
    this.determineDisplaying();
    this.render();
    this.setEvent();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, SELECTOR.ID_MACHINE_MANAGE_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.ID, TAB_ID.TAB_MACHINE_MANAGE);

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  render() {
    this.renderInput();
    this.renderTable();
  }

  renderInput() {
    this.chargingTitle = new Title('자판기 동전 충전하기');
    this.coinInput = new Input(SELECTOR.ID_MACHINE_CHARGE_INPUT, '자판기가 보유할 금액', 'number');
    this.coinSubmit = new Button(SELECTOR.ID_MACHINE_CHARGE_BUTTON, '충전하기');
    this.chargedAmount = new AmountView(SELECTOR.ID_MACHINE_CHARGE_AMOUNT, '보유금액', 0);

    this.$root.appendChild(this.chargingTitle.getTarget());
    this.$root.appendChild(this.coinInput.getTarget());
    this.$root.appendChild(this.coinSubmit.getTarget());
    this.$root.appendChild(this.chargedAmount.getTarget());
  }

  renderTable() {
    this.havingCoinTitle = new Title('자판기가 보유한 동전');
    this.coinTable = new CoinTable({
      columns: ['동전', '개수'],
      initialData: {
        '500원': null,
        '100원': null,
        '50원': null,
        '10원': null,
      },
    });

    this.$root.appendChild(this.havingCoinTitle.getTarget());
    this.$root.appendChild(this.coinTable.getTarget());
  }

  determineDisplaying() {
    if (this.navigator.getFocusedTab() === TAB_ID.TAB_MACHINE_MANAGE) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.$root.removeAttribute(DOM_ATTRIBUTE.HIDDEN);
  }

  hide() {
    this.$root.setAttribute(DOM_ATTRIBUTE.HIDDEN, true);
  }

  setEvent() {
    const { rechargeCoin } = this.props;

    this.coinSubmit.getTarget().addEventListener(EVENT.CLICK, () => {
      const coinValue = this.coinInput.getTarget().value;

      if (isValidCoinRecharge(coinValue)) {
        rechargeCoin(coinValue);
      }
    });
  }
}
