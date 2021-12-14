import Observer from '../../abstracts/observer.js';
import { ELEMENT_CLASSES, ELEMENT_DATA_ATTRIBUTES, ELEMENT_IDS } from '../../constants.js';
import { htmlToElement } from '../../utils.js';

class ProductPurchaseTableView extends Observer {
  static template = `
    <div class="component">
      <h2>구매할 수 있는 상품 현황</h2>
      <div class="row">
        <table id="${ELEMENT_IDS.PRODUCT_PURCHASE.TABLE}">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  `;

  static productTemplate = ({ name, price, quantity }) => {
    const { ITEM, ITEM_NAME, ITEM_PRICE, ITEM_QUANTITY, PURCHASE_BUTTON } =
      ELEMENT_CLASSES.PRODUCT_PURCHASE;
    const {
      ITEM_NAME: DATA_ITEM_NAME,
      ITEM_PRICE: DATA_ITEM_PRICE,
      ITEM_QUANTITY: DATA_ITEM_QUANTITY,
    } = ELEMENT_DATA_ATTRIBUTES.PRODUCT_PURCHASE;
    return `
      <tr class="${ITEM}">
        <td class="${ITEM_NAME}" ${DATA_ITEM_NAME}="${name}">${name}</td>
        <td class="${ITEM_PRICE}" ${DATA_ITEM_PRICE}="${price}">${price}원</td>
        <td class="${ITEM_QUANTITY}" ${DATA_ITEM_QUANTITY}="${quantity}">${quantity}개</td>
        <td><button type="button" class="${PURCHASE_BUTTON}">구매하기</button></td>
      </tr>
    `;
  };

  constructor($container) {
    super(ELEMENT_IDS.PRODUCT_PURCHASE.TABLE);
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(ProductPurchaseTableView.template);
    this.$container.appendChild(this.$view);
    this.registerObserver();
    this.render();
    this.bindingElements();
    return this;
  }

  unmount() {
    this.unregisterObserver();
    this.$container.removeChild(this.$view);
    this.$view = null;
  }

  bindingElements() {
    this.$purchaseButtons = document.querySelectorAll(
      `.${ELEMENT_CLASSES.PRODUCT_PURCHASE.PURCHASE_BUTTON}`
    );
  }

  render() {
    this.renderProductItems();
  }

  renderProductItems() {
    const { productItems } = this.model;
    const $tableBody = document.querySelector(`#${ELEMENT_IDS.PRODUCT_PURCHASE.TABLE} tbody`);
    $tableBody.replaceChildren();
    productItems.forEach((item) => {
      const $row = htmlToElement(ProductPurchaseTableView.productTemplate(item));
      $tableBody.appendChild($row);
    });
  }

  notify() {
    if (this.$view === null) {
      return;
    }
    this.renderProductItems();
  }
}

export default ProductPurchaseTableView;
