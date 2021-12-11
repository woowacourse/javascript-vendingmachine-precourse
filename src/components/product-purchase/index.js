import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Charge from './Charge.js';
import CurrentAmount from './CurrentAmount.js';

class ProductPurchase extends Component {
  $charge;

  $currentAmount;

  constructor() {
    super($tag('div'));

    this.$charge = new Charge();
    this.$currentAmount = new CurrentAmount();
    this.children = [this.$charge, this.$currentAmount];

    this.setEvent();
  }

  #updateCurrentAmount() {
    this.$currentAmount.setState({
      amount: VendingMachineStore.instance.user.amount,
    });
  }

  setEvent() {
    this.$charge.onSubmit = ({ amount }) => {
      VendingMachineStore.instance.chargeUser(amount);
      this.$charge.resetInputs();
      this.#updateCurrentAmount();
    };
  }

  update() {
    // 상품 현황 업데이트
  }
}

export default ProductPurchase;
