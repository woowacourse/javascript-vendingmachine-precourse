import Component from '../core/Component.js';
import ChargeInputForm from './purchase/ChargeInputForm.js';
import PurchaseList from './purchase/PurchaseList.js';
import ReturnCoinResult from './purchase/ReturnCoinResult.js';
import {
  handlePutAmount,
  handlePurchase,
  handleReturnAmount,
} from '../controller/VendingMachine.js';

import { $productState, $chargeState } from './StateList.js';

export default class PurchaseManage extends Component {
  htmlTemplate() {
    return `
    <section class="component" data-component="amount-charge-form"></section>
    <section class="component" data-component="product-purchase"></section>
    <section class="component" data-component="return-balance"></section>
    `;
  }

  mounted() {
    this.addMount('amount-charge-form', ChargeInputForm, {
      state: $chargeState,
      handlePutAmount,
    });

    this.addMount('product-purchase', PurchaseList, {
      state: $productState,
      handlePurchase,
    });

    this.addMount('return-balance', ReturnCoinResult, {
      state: $chargeState,
      handleReturnAmount,
    });
  }
}
