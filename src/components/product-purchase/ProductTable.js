import { ELEMENT_CLASS } from '../../constants/index.js';
import { $tag } from '../../utils/index.js';
import Button from '../base/Button.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';

const tableRowProp = {
  className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM,
};

const tableDataRecord = {
  name: {
    head: '상품명',
    className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_NAME,
  },
  price: {
    head: '가격',
    className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_PRICE,
  },
  count: {
    head: '수량',
    className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_QUANTITY,
  },
};

const purchaseButtonProp = {
  className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_PURCHASE_BUTTON,
};

class ProductTable extends Component {
  $title;

  $tableHead;

  $tableRows;

  onPurchase;

  constructor() {
    super($tag('table'));

    this.$tableHead = Object.values(tableDataRecord).map(
      (record) => new Label('th', record.head)
    );
    this.$tableRows = [];
    this.children = [...this.$tableHead, ...this.$tableRows];

    this.setEvent();
  }

  setEvent() {
    this.$tableRows.forEach(($tableRow, idx) => {
      const $purchaseButton = $tableRow.children[$tableRow.children.length - 1];
      $purchaseButton.setOnClick(() => {
        this.onPurchase?.(idx);
      });
    });
  }

  static #tableRowComponent(data) {
    const $tableRow = new Component($tag('tr'), tableRowProp);

    $tableRow.children = [
      ...Object.entries(tableDataRecord).map(
        ([key, record]) =>
          new Label('td', data[key], { className: record.className })
      ),
      new Button('구매하기', purchaseButtonProp),
    ];
    return $tableRow;
  }

  update() {
    this.$tableRows = this.state.dataset.map(ProductTable.#tableRowComponent);
    this.children = [...this.$tableHead, ...this.$tableRows];
    this.setEvent();
    this.render();
  }
}

export default ProductTable;