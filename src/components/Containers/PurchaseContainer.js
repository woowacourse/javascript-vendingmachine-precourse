import {STORAGE_KEY} from '../../utils/constants.js';
import {getLocalStorage} from '../../utils/localStorage.js';
import Component from '../core/Component.js';

export default class PurchaseContainer extends Component {
  init() {
    this.$state = {
      purchaseAmount: getLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, 0),
      vendingMachineAmount: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, 0),
      vendingMachinecoins: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, {}),
      products: getLocalStorage(STORAGE_KEY.PRODUCT_MANAGE, [])
    };
  }
}
