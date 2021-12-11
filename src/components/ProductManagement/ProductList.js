import Component from '../../core/Component.js';
import ProductStore from '../../stores/ProductStore.js';
import { ProductListView } from '../../utils/views.js';

export default class ProductList extends Component {
  getGlobalState() {
    return ProductStore.getState();
  }

  render() {
    const { products } = this.getGlobalState();

    this.$container.innerHTML = `
        <h3>상품 현황</h3>
        <table>
            <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
            </tr>
            ${ProductListView(products)}
        </table>
    `;
  }
}
