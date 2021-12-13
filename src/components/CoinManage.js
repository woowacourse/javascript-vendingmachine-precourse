import { $coinState } from './StateList.js';
import {
  handleAddCoins,
  handleTotalAmountCoins,
} from '../controller/VendingMachine.js';

import Component from '../core/Component.js';
import CoinInputForm from './coins/CoinInputForm.js';
import CoinList from './coins/CoinList.js';

export default class CoinManage extends Component {
  init() {
    $coinState.add(this);
  }

  htmlTemplate() {
    return `
    <section class="component" data-component="coin-input-form"></section>
    <section class="component" data-component="coin-list"></section>
    `;
  }

  mounted() {
    this.addMount('coin-input-form', CoinInputForm, {
      state: $coinState,
      chargeAmount: handleTotalAmountCoins(),
      handleAddCoins,
    });

    this.addMount('coin-list', CoinList, {
      state: $coinState,
    });
  }
}
