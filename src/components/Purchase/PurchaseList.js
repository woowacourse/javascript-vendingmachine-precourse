import Component from '../../core/Component.js';
import UserStore from '../../stores/UserStore.js';
import ProductStore from '../../stores/ProductStore.js';

import { filterPurchaseableProduct } from '../../utils/helpers.js';
import { purchaseProductsView } from '../../utils/views.js';

export default class PurchaseList extends Component {
  getGlobalState() {
    const { chargedMoney } = UserStore.getState();
    const { products } = ProductStore.getState();
    return { chargedMoney, products };
  }

  render() {
    const { chargedMoney, products } = this.getGlobalState();
    const purchaseableProducts = filterPurchaseableProduct(
      chargedMoney,
      products
    );

    this.$container.innerHTML = `
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
        <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
        </tr>
        ${purchaseProductsView(purchaseableProducts)}
        </table>
      `;
  }
}
