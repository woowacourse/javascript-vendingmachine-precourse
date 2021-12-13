import Component from "../root/Component.js";
import InputForm from "./InputForm.js";
import CoinStatus from "./CoinStatus.js";
import { getRandomChargeCoins, getSumCoins } from "../../utils/coin.js";

import API from "../../libs/api.js";
export default class ChargeManage extends Component {
  setup() {
    this.$state;
    this.callAPI = new API();
    this.initCallAPI();
  }

  initCallAPI() {
    this.$state = this.callAPI.getVendingMachine();
  }

  template() {
    return `
      <div id="charge-input-form"></div>
      <div id="coin-status"></div>
    `;
  }

  mounted() {
    const {
      addChargeAmount,
      $state: { chargeAmount, coins },
    } = this;
    const $chargeInputForm = document.querySelector("#charge-input-form");
    const $coinStatus = document.querySelector("#coin-status");

    new InputForm($chargeInputForm, {
      addChargeAmount: addChargeAmount.bind(this),
      chargeAmount,
    });

    new CoinStatus($coinStatus, { coins });
  }

  addChargeAmount(charge) {
    const coins = getSumCoins({
      prevCoins: this.$state.coins,
      newCoins: getRandomChargeCoins(charge),
    });
    const payload = { chargeAmount: this.$state.chargeAmount + charge, coins };

    this.callAPI.setVendingMachine(payload);
    this.setState(payload);
  }
}
