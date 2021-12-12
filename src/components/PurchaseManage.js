import { ERROR } from '../constants/constants.js';
import { checkAmountVaild } from '../models/UserInputCheck.js';
import { errorAlert } from '../utils/error-alert.js';

import Product from '../models/Product.js';
import Coins from '../models/Coins.js';

import Component from '../core/Component.js';
import ChargeInputForm from './purchase/ChargeInputForm.js';
import PurchaseList from './purchase/PurchaseList.js';
import ReturnBalanceList from './purchase/ReturnBalanceList.js';

import { $productState, $coinState, $chargeState } from './StateList.js';

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
      putAmount: this.putAmount.bind(this),
    });

    this.addMount('product-purchase', PurchaseList, {
      state: $productState,
      purchase: this.purchase.bind(this),
    });

    const { returnCoins } = this._state;
    this.addMount('return-balance', ReturnBalanceList, {
      state: $chargeState,
      returnCoins,
      returnAmount: this.returnAmount.bind(this),
    });
  }

  putAmount(amount) {
    const inputAmount = Number(amount);

    const resultCode = checkAmountVaild(inputAmount);
    if (errorAlert(resultCode) === true) return false;

    $chargeState.value += inputAmount;
  }

  purchase(primaryKey) {
    const productManager = new Product($productState.value);
    const { price } = productManager.itemInfo(primaryKey);

    if ($chargeState.value < price) {
      errorAlert(ERROR.PURCHASE_NEED_BALANCE);
      return false;
    }

    $chargeState.value -= price;
    $productState.value = productManager.purchase(primaryKey).result;
  }

  returnAmount() {
    if ($chargeState.value === 0) {
      errorAlert(ERROR.RETURN_AMOUNT_NO_BALANCE);
      return false;
    }

    const coinManager = new Coins($coinState.value);
    const { output, failed } = coinManager.return($chargeState.value);

    $chargeState.value = failed;
    $coinState.value = coinManager.result;

    return output;
  }
}
