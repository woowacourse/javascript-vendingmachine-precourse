import VendingMachineStore from '../../store/vendingMachineStore.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';
import ProductPurchaseTable from './ProductPurchaseTable.js';

class ProductStatus extends Component {
  $title;

  $table;

  constructor() {
    super($tag('div'));

    this.$title = new Label('h3', '상품 현황');
    this.$table = new ProductPurchaseTable();
    this.children = [this.$title, this.$table];

    this.setEvent();
  }

  setEvent() {
    VendingMachineStore.instance.productStorage.observe(() => {
      const products = VendingMachineStore.instance.productStorage.items;
      this.$table.setState({ dataset: products });
    });
  }
}

export default ProductStatus;
