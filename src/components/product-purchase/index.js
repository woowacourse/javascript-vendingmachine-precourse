import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Charge from './Charge.js';
import CurrentAmount from './CurrentAmount.js';
import ProductStatus from './ProductStatus.js';
import ReturnChanges from './ReturnChanges.js';

class ProductPurchase extends Component {
  $charge;

  $currentAmount;

  $productStatus;

  $returnChanges;

  constructor() {
    super($tag('div'));

    this.$charge = new Charge();
    this.$currentAmount = new CurrentAmount();
    this.$productStatus = new ProductStatus();
    this.$returnChanges = new ReturnChanges();

    this.children = [
      this.$charge,
      this.$currentAmount,
      this.$productStatus,
      this.$returnChanges,
    ];
    this.setEvent();
    this.#updateCurrentAmount(); // TODO: 삭제 필요
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

    this.$productStatus.$table.onPurchase = (idx) => {
      VendingMachineStore.instance.buyProduct(idx);
      this.#updateCurrentAmount();
      this.$productStatus.render();
    };

    this.$returnChanges.onReturn = () => {
      VendingMachineStore.instance.returnChanges();
      this.#updateCurrentAmount();
      this.$returnChanges.render();
    };
  }
}

export default ProductPurchase;
