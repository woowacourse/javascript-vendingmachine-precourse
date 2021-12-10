import VendingMachineStore from '../../store/vendingMachineStore.js';
import Component from '../base/Component.js';
import ProductAppend from './ProductAppend.js';

class ProductManage extends Component {
  $append;

  constructor() {
    super(document.createElement('div'));

    this.$append = new ProductAppend();
    this.setEvent();
  }

  setEvent() {
    this.$append.onSubmit = (product) => {
      VendingMachineStore.instance.addProduct(product);
      this.$append.resetInputs();
    };
  }

  render() {
    this.renderChildrenView([this.$append]);
  }
}

export default ProductManage;
