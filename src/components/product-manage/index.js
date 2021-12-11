import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import ProductAppend from './ProductAppend.js';
import ProductStatus from './ProductStatus.js';

class ProductManage extends Component {
  $append;

  $status;

  constructor() {
    super($tag('div'));

    this.$append = new ProductAppend();
    this.$status = new ProductStatus();
    this.setEvent();
    this.children = [this.$append, this.$status];
  }

  setEvent() {
    this.$append.onSubmit = (product) => {
      VendingMachineStore.instance.addProduct(product);
      this.$append.resetInputs();
      this.$status.update();
    };
  }
}

export default ProductManage;
