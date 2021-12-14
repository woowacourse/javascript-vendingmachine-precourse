import Component from '../../../core/Component.js';
import { COINS } from '../../../constants/index.js';

import PurchaseChargeForm from '../purchase-charge-form/index.js';
import PurchaseTable from '../purchase-table/index.js';
import CoinReturn from '../coin-return/index.js';

export default class ProductPurchaseTab extends Component {
  template() {
    return `
        <div data-component="purchase-charge-form"></div>
        <br>
        <div data-component="purchase-table"></div>
        <br>
        <div data-component="coin-return"></div>
      `;
  }

  mounted() {
    const { tabData, chargeUserMoney, purchase, returnChange } = this.$props;

    const $chargeForm = this.$target.querySelector('[data-component="purchase-charge-form"]');
    const $table = this.$target.querySelector('[data-component="purchase-table"]');
    const $coinReturn = this.$target.querySelector('[data-component="coin-return"]');

    new PurchaseChargeForm($chargeForm, { tabData, chargeUserMoney });
    new PurchaseTable($table, { tabData, purchase });
    new CoinReturn($coinReturn, { tabData, returnChange });
  }
}
