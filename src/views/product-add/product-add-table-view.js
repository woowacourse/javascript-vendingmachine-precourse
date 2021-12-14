import Observer from '../../abstracts/observer.js';
import { ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';

class ProductAddTableView extends Observer {
  static template = `
    <div class="component">
      <h2>상품 현황</h2>
      <div class="row">
        <table id="${ELEMENT_IDS.PRODUCT_ADD_TABLE}">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  `;

  static productTemplate = ({ name, price, quantity }) => {
    return `
      <tr>
        <td>${name}</td>
        <td>${price}원</td>
        <td>${quantity}개</td>
      </tr>
    `;
  };

  constructor($container) {
    super(ELEMENT_IDS.PRODUCT_ADD_TABLE);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductAddTableView.template);
    this.$container.appendChild(this.$view);
    this.registerObserver();
    return this;
  }

  unmount() {
    this.unregisterObserver();
    this.$container.removeChild(this.$view);
  }

  renderProductItems() {
    const { productItems } = this.model;
    const $tableBody = document.querySelector(`#${ELEMENT_IDS.PRODUCT_ADD_TABLE} tbody`);
    $tableBody.replaceChildren();
    productItems.forEach((item) => {
      const $row = htmlToElement(ProductAddTableView.productTemplate(item));
      $tableBody.appendChild($row);
    });
  }

  notify() {
    this.renderProductItems();
  }
}

export default ProductAddTableView;
