import Component from "../root/Component.js";
import InputForm from "./InputForm.js";
import ItemSatus from "./ItemSatus.js";

import API from "../../libs/api.js";
import setTableStyled from "../../style/setTableStyled.js";

export default class ProductPurchase extends Component {
  setup() {
    this.$state;
    this.callAPI = new API();
    this.initCallAPI();
    console.log("ProductPurchase", this);
  }

  initCallAPI() {
    this.$state = this.callAPI.getVendingMachine();
  }

  template() {
    return `
      <div id="charge-input-form"></div>
      <div id="product-purchase-item-satus"></div>
      <div>
        <h3>잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <table>
          <thead>
            <tr><th>동전</th><th>개수</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="coin-500-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="coin-100-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="coin-50-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="coin-10-quantity">
                00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  mounted() {
    const {
      addPurchaseChargeAmount,
      $state: { purchaseChargeAmount, products, purchaseItem },
    } = this;
    const $chargeInputForm = document.querySelector("#charge-input-form");
    const $productPurchaseItemSatus = document.querySelector(
      "#product-purchase-item-satus"
    );

    new InputForm($chargeInputForm, {
      addPurchaseChargeAmount: addPurchaseChargeAmount.bind(this),
      purchaseChargeAmount,
    });

    new ItemSatus($productPurchaseItemSatus, {
      products,
      purchaseChargeAmount,
      purchaseItem: this.purchaseItem.bind(this),
    });

    setTableStyled(this.$target);
  }

  addPurchaseChargeAmount(charge) {
    const payload = {
      purchaseChargeAmount: this.$state.purchaseChargeAmount + charge,
    };
    this.callAPI.setVendingMachine(payload);
    this.setState(payload);
  }

  purchaseItem(props) {
    const payload = { ...props };

    this.callAPI.setVendingMachine(payload);
    this.setState(payload);
  }
}
