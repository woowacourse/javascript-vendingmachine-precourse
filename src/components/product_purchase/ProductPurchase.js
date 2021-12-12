import Component from "../root/Component.js";
import InputForm from "./InputForm.js";

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
      <div>
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
            </tr>
          </thead>
          <tbody>
            <tr class="product-purchase-item">
              <td class="product-purchase-name" data-product-name="에시">예시</td>
              <td class="product-purchase-price" data-product-price="1000">1000</td>
              <td class="product-purchase-quantity" data-product-quantity="10">10</td>
              <td><button class="purchase-button">구매하기</button></td>
            </tr>
            <tr class="product-purchase-item">
              <td class="product-purchase-name" data-product-name="테스트">테스트</td>
              <td class="product-purchase-price" data-product-price="1000">1000</td>
              <td class="product-purchase-quantity" data-product-quantity="10">10</td>
              <td><button class="purchase-button">구매하기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
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
      $state: { purchaseChargeAmount },
    } = this;
    const $chargeInputForm = document.querySelector("#charge-input-form");

    new InputForm($chargeInputForm, {
      addPurchaseChargeAmount: addPurchaseChargeAmount.bind(this),
      purchaseChargeAmount,
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
}
