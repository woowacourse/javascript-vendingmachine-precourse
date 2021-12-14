import Tab from './core/Tab.js';
import Title from './core/Title.js';
import Input from './core/Input.js';
import Button from './core/Button.js';
import CoinTable from './core/CoinTable.js';
import AmountView from './core/AmountView.js';
import { isValidRecharge } from '../utils/validation.js';
import TAB_ID from '../constant/dataset.js';
import { EVENT, INPUT_TYPE } from '../constant/dom.js';
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

export default class TabMachineManage extends Tab {
  constructor($parent, props) {
    super($parent, props, ID.MACHINE_MANAGE_TAB, TAB_ID.TAB_MACHINE_MANAGE);

    this.render();
    this.setEvent();
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
      this.vendingMachine.getRechargedCoinAmount()
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
      initialData: this.vendingMachine.getRechargedCoin(),
      ids: COIN_TABLE_IDS,
    });

    this.$root.appendChild(this.havingCoinTitle.getTarget());
    this.$root.appendChild(this.coinTable.getTarget());
  }

  setEvent() {
    const { requestRechargeCoin } = this.props;

    this.coinSubmit.getTarget().addEventListener(EVENT.CLICK, () => {
      const coinValue = this.coinInput.getTarget().value;

      if (isValidRecharge(coinValue)) {
        requestRechargeCoin(coinValue);
      }
    });
  }

  rerenderChargedAmount() {
    this.chargedAmount.render(this.vendingMachine.getRechargedCoinAmount());
  }

  rerenderCoinTable() {
    this.coinTable.render(this.vendingMachine.getRechargedCoin());
  }
}
