import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import ProductAppend from './ProductAppend.js';

class ProductManage extends Component {
  $append;

  constructor() {
    super($tag('div'));

    this.$append = new ProductAppend();
    this.$table = '';
    this.setEvent();
  }

  setEvent() {
    this.$append.onSubmit = (product) => {
      VendingMachineStore.instance.addProduct(product);
      this.$append.resetInputs();
      this.$table;
    };
  }

  render() {
    this.renderChildrenView([this.$append]);
  }
}

export default ProductManage;
