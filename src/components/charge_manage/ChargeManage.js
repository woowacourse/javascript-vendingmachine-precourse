import Component from "../root/Component.js";
import InputForm from "./InputForm.js";

import API from "../../libs/api.js";
export default class ChargeManage extends Component {
  setup() {
    console.log("ChargeManage", this);
    this.$state;
    this.callAPI = new API();
    this.initCallAPI();
    console.log("ProductAdd", this);
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
    const $chargeInputForm = document.querySelector("#charge-input-form");

    new InputForm($chargeInputForm);
  }
}
