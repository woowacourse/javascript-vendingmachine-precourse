import { ERROR, CONSTANTS } from '../constants/constants.js';
import { checkAmountVaild } from '../models/UserInputCheck.js';
import { errorAlert } from '../utils/error-alert.js';
import { cloneObject } from '../utils/data-utils.js';

import Product from '../models/Product.js';
import Coins from '../models/Coins.js';

import Component from '../core/Component.js';
import ChargeAmount from './purchase/ChargeAmount.js';
import ProductPurchase from './purchase/ProductPurchase.js';
import ReturnBalance from './purchase/ReturnBalance.js';

import { ProductState, CoinState, ChargeState } from '../core/Store.js';

export default class PurchaseManage extends Component {
  init() {
    this._state = {
      returnCoins: cloneObject(CONSTANTS.COIN_LIST),
    };
  }

  htmlTemplate() {
    return `
    <section class="component" data-component="amount-charge-form"></section>
    <section class="component" data-component="product-purchase"></section>
    <section class="component" data-component="return-balance"></section>
    `;
  }

  mounted() {
    this.addMount('amount-charge-form', ChargeAmount, {
      state: ChargeState,
      putAmount: this.putAmount.bind(this),
    });

    this.addMount('product-purchase', ProductPurchase, {
      state: ProductState,
      purchase: this.purchase.bind(this),
    });

    const { returnCoins } = this._state;
    this.addMount('return-balance', ReturnBalance, {
      state: ChargeState,
      returnCoins,
      returnAmount: this.returnAmount.bind(this),
    });
  }

  putAmount(amount) {
    const inputAmount = Number(amount);

    const resultCode = checkAmountVaild(inputAmount);
    if (errorAlert(resultCode) === true) return false;

    ChargeState.value += inputAmount;
  }

  purchase(primaryKey) {
    const productManager = new Product(ProductState.value);
    const { price } = productManager.getItem(primaryKey);

    if (ChargeState.value < price) {
      errorAlert(ERROR.PURCHASE_NEED_BALANCE);
      return false;
    }

    ChargeState.value -= price;
    ProductState.value = productManager.purchase(primaryKey).result;
  }

  returnAmount() {
    if (ChargeState.value === 0) {
      errorAlert(ERROR.RETURN_AMOUNT_NO_BALANCE);
      return false;
    }

    const coinManager = new Coins(CoinState.value);
    const { output, failed } = coinManager.return(ChargeState.value);

    this.returnCoinUpdate(output);
    ChargeState.value = failed;
    CoinState.value = coinManager.result;
  }

  returnCoinUpdate(coinResult) {
    const { returnCoins } = this._state;

    returnCoins.forEach((value, index) => {
      returnCoins[index] = coinResult[index];
    });
  }
}
