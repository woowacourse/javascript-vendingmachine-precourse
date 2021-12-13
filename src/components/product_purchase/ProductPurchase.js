import Component from "../root/Component.js";
import InputForm from "./InputForm.js";
import ItemSatus from "./ItemSatus.js";
import CoinReturnStatus from "./CoinReturnStatus.js";

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
      <div id="coin-return-status"></div>
    `;
  }

  mounted() {
    const {
      addPurchaseChargeAmount,
      $state: { purchaseChargeAmount, products, chargeAmount, coins },
    } = this;
    const $chargeInputForm = document.querySelector("#charge-input-form");
    const $productPurchaseItemSatus = document.querySelector(
      "#product-purchase-item-satus"
    );
    const $coinReturnStatus = document.querySelector("#coin-return-status");

    new InputForm($chargeInputForm, {
      addPurchaseChargeAmount: addPurchaseChargeAmount.bind(this),
      purchaseChargeAmount,
    });

    new ItemSatus($productPurchaseItemSatus, {
      products,
      purchaseChargeAmount,
      purchaseItem: this.purchaseItem.bind(this),
    });

    new CoinReturnStatus($coinReturnStatus, {
      chargeAmount,
      coins,
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

  purchaseItem(props) {
    const payload = { ...props };

    this.callAPI.setVendingMachine(payload);
    this.setState(payload);
  }
}
