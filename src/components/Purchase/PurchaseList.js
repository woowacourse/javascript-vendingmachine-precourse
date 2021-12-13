import Component from '../../core/Component.js';
import UserStore from '../../stores/UserStore.js';
import ProductStore from '../../stores/ProductStore.js';
import { spendMoney } from '../../actions/user.js';
import { sellProduct } from '../../actions/product.js';

import { getProductInformations } from '../../utils/dom.js';
import { filterPurchaseableProduct } from '../../utils/helpers/product.js';
import { purchaseProductsTemplate } from '../../templates/Purchase.js';

export default class PurchaseList extends Component {
  getGlobalState() {
    const { chargedMoney } = UserStore.getState();
    const { products } = ProductStore.getState();
    return { chargedMoney, products };
  }

  bindEvents() {
    this.appendRootEvents('click', event => this.onClickPurchase(event));
  }

  onClickPurchase({ target }) {
    if (target.className !== 'purchase-button') return;
    const { productName, productPrice } = getProductInformations(target);
    ProductStore.dispatch(sellProduct(productName));
    UserStore.dispatch(spendMoney(productPrice));
  }

  render() {
    const { chargedMoney, products } = this.getGlobalState();
    this.$container.innerHTML = `
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
          <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
          </tr>
        ${purchaseProductsTemplate(
          filterPurchaseableProduct(chargedMoney, products)
        )}
        </table>
      `;
  }
}
