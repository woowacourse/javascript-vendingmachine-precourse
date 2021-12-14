import Navigator from '../store/Navigator.js';
import VendingMachine from '../store/VendingMachine.js';
import Title from './core/Title.js';
import Input from './core/Input.js';
import Button from './core/Button.js';
import CoinTable from './core/CoinTable.js';
import AmountView from './core/AmountView.js';
import { isValidRecharge } from '../utils/validation.js';
import { TAB_ID } from '../constant/dataset.js';
import { TAG, DOM_ATTRIBUTE, EVENT, INPUT_TYPE } from '../constant/dom.js';
import { ID } from '../constant/selector.js';
import { TITLE, PLACEHOLDER, COLUMN } from '../constant/text.js';
import { COIN } from '../constant/coin.js';

const COIN_TABLE_COLUMN = [COLUMN.COIN, COLUMN.COUNT];
const COIN_TABLE_IDS = {
  [COIN.COIN_500]: ID.MACHINE_COIN_500_QUANTITY,
  [COIN.COIN_100]: ID.MACHINE_COIN_100_QUANTITY,
  [COIN.COIN_50]: ID.MACHINE_COIN_50_QUANTITY,
  [COIN.COIN_10]: ID.MACHINE_COIN_10_QUANTITY,
};

export default class TabMachineManage {
  constructor($parent, props) {
    this.$parent = $parent;
    this.props = props;
    this.$root = null;
    this.navigator = new Navigator();
    this.vendingMcahine = new VendingMachine();

    this.createRootElement();
    this.determineDisplaying();
    this.render();
    this.setEvent();
  }

  createRootElement() {
    const $div = document.createElement(TAG.TAG_DIV);
    $div.setAttribute(DOM_ATTRIBUTE.ID, ID.MACHINE_MANAGE_TAB);
    $div.setAttribute(DOM_ATTRIBUTE.ID, TAB_ID.TAB_MACHINE_MANAGE);

    this.$parent.appendChild($div);
    this.$root = $div;
  }

  render() {
    this.renderInput();
    this.renderTable();
  }

  renderInput() {
    this.chargingTitle = new Title(TITLE.RECHARGE_COIN);
    this.coinInput = new Input(ID.MACHINE_CHARGE_INPUT, PLACEHOLDER.COIN, INPUT_TYPE.NUMBER);
    this.coinSubmit = new Button(ID.MACHINE_CHARGE_BUTTON, TITLE.RECHARGE_COIN_BUTTON);
    this.chargedAmount = new AmountView(
      ID.MACHINE_CHARGE_AMOUNT,
      TITLE.RECHARGE_COIN_AMOUNT,
      this.vendingMcahine.getRechargedCoinAmount()
    );

    this.$root.appendChild(this.chargingTitle.getTarget());
    this.$root.appendChild(this.coinInput.getTarget());
    this.$root.appendChild(this.coinSubmit.getTarget());
    this.$root.appendChild(this.chargedAmount.getTarget());
  }

  renderTable() {
    this.havingCoinTitle = new Title(TITLE.HAVING_COIN);
    this.coinTable = new CoinTable({
      columns: COIN_TABLE_COLUMN,
      initialData: this.vendingMcahine.getRechargedCoin(),
      ids: COIN_TABLE_IDS,
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

      if (isValidRecharge(coinValue)) {
        rechargeCoin(coinValue);
      }
    });
  }

  updateRechargeState() {
    this.chargedAmount.render(this.vendingMcahine.getRechargedCoinAmount());
    this.coinTable.render(this.vendingMcahine.getRechargedCoin());
  }
}
