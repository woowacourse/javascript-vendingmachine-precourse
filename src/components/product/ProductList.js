import Component from '../../core/Component.js';
import ProductTable from '../table/ProductTable.js';

export default class ProductList extends Component {
  init() {
    this._props.state.add(this);
  }

  domTemplate() {
    const { state } = this._props;

    const createTable = new ProductTable('상품 현황');
    const $productTable = createTable.setContents(state.value).result;

    return $productTable;
  }
}
