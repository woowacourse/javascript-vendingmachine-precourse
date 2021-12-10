import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import ProductAppend from './ProductAppend.js';

class ProductManage extends Component {
  $append;

  $table;

  constructor() {
    super($tag('div'));

    this.$append = new ProductAppend();
    this.$table = '';
    this.setEvent();
    this.children = [this.$append];
  }

  setEvent() {
    this.$append.onSubmit = (product) => {
      VendingMachineStore.instance.addProduct(product);
      this.$append.resetInputs();
      // this.$table;
    };
  }
}

export default ProductManage;
