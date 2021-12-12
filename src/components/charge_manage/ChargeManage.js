import Component from "../root/Component.js";
import InputForm from "./InputForm.js";
import { getRandomChargeCoins, getSumCoins } from "../../utils/coin.js";

import API from "../../libs/api.js";
export default class ChargeManage extends Component {
  setup() {
    this.$state;
    this.callAPI = new API();
    this.initCallAPI();
    console.log("ChargeManage", this);
  }

  initCallAPI() {
    this.$state = this.callAPI.getVendingMachine();
  }

  template() {
    return `
      <div id="charge-input-form"></div>
      <div id="coin-status">
        <h3>자판기가 보유한 동전</h3>
        <table>
          <thead>
            <tr><th>동전</th><th>개수</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="vending-machine-coin-500-quantity">--</td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="vending-machine-coin-100-quantity">--</td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="vending-machine-coin-50-quantity">--</td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="vending-machine-coin-10-quantity">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  mounted() {
    const {
      addChargeAmount,
      $state: { chargeAmount },
    } = this;
    const $chargeInputForm = document.querySelector("#charge-input-form");

    new InputForm($chargeInputForm, {
      addChargeAmount: addChargeAmount.bind(this),
      chargeAmount,
    });
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

// const test = { coin500: 10, coin100: 0, coin50: 20, coin10: 80 };

//     for (let coin in this.$state.coins) {
//       console.log("***", coin);
//       test[coin] += this.$state.coins[coin];
//     }
//     const payload = { coins: { ...test } };
