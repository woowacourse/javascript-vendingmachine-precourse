import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';
import ProductTable from './ProductTable.js';

class ProductStatus extends Component {
  $title;

  $table;

  constructor() {
    super($tag('div'));

    this.$title = new Label('h3', '상품 현황');
    this.$table = new ProductTable();
    this.children = [this.$title, this.$table];
    this.update();
  }

  update() {
    const products = VendingMachineStore.instance.productStorage.items;
    this.$table.setState({ dataset: products });
  }
}

export default ProductStatus;
