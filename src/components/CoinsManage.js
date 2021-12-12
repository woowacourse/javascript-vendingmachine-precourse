import Component from '../core/Component.js';
import Coins from '../models/Coins.js';

import { checkAmountVaild } from '../models/UserInputCheck.js';
import { errorAlert } from '../utils/error-alert.js';

import CoinInputForm from './coins/CoinInputForm.js';
import CoinList from './coins/CoinList.js';

import { CoinState } from '../core/Store.js';

export default class CoinsManage extends Component {
  init() {
    CoinState.add(this);
  }

  htmlTemplate() {
    return `
    <section class="component" data-component="coin-input-form"></section>
    <section class="component" data-component="coin-list"></section>
    `;
  }

  mounted() {
    this.addMount('coin-input-form', CoinInputForm, {
      addCoins: this.addCoins.bind(this),
      chargeAmount: this.chargeAmount,
    });

    this.addMount('coin-list', CoinList, {
      state: CoinState,
    });
  }

  addCoins(amount) {
    const inputAmount = Number(amount);

    const resultCode = checkAmountVaild(inputAmount);
    if (errorAlert(resultCode) === true) return false;

    CoinState.value = new Coins(CoinState.value).add(inputAmount).result;
  }

  get chargeAmount() {
    return new Coins(CoinState.value).total;
  }
}
