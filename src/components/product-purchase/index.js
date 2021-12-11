import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Charge from './Charge.js';
import CurrentAmount from './CurrentAmount.js';
import ReturnChanges from './ReturnChanges.js';

class ProductPurchase extends Component {
  $charge;

  $currentAmount;

  $returnChanges;

  constructor() {
    super($tag('div'));

    this.$charge = new Charge();
    this.$currentAmount = new CurrentAmount();
    this.$returnChanges = new ReturnChanges();
    this.children = [this.$charge, this.$currentAmount, this.$returnChanges];

    this.setEvent();
  }

  #updateCurrentAmount() {
    this.$currentAmount.setState({
      amount: VendingMachineStore.instance.user.amount,
    });
  }

  #updateReturnChanges() {
    this.$returnChanges.update();
  }

  setEvent() {
    this.$charge.onSubmit = ({ amount }) => {
      VendingMachineStore.instance.chargeUser(amount);
      this.$charge.resetInputs();
      this.#updateCurrentAmount();
    };

    this.$returnChanges.onReturn = () => {
      VendingMachineStore.instance.returnChanges();
      this.#updateCurrentAmount();
      this.#updateReturnChanges();
    };
  }

  update() {
    // 상품 현황 업데이트
  }
}

export default ProductPurchase;
