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
  }

  setEvent() {
    this.$charge.onSubmit = ({ amount }) => {
      VendingMachineStore.instance.chargeUser(amount);
      this.$charge.resetInputs();
    };

    this.$productStatus.$table.onPurchase = (idx) => {
      VendingMachineStore.instance.buyProduct(idx);
    };

    this.$returnChanges.onReturn = () => {
      VendingMachineStore.instance.returnChanges();
    };
  }
}

export default ProductPurchase;
