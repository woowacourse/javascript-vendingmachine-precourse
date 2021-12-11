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
    dataset: 'productName',
    className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_NAME,
  },
  price: {
    head: '가격',
    dataset: 'productPrice',
    className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_PRICE,
  },
  count: {
    head: '수량',
    dataset: 'productCount',
    className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_QUANTITY,
  },
};

const purchaseButtonProp = {
  className: ELEMENT_CLASS.PRODUCT_PURCHASE_ITEM_PURCHASE_BUTTON,
};

class ProductPurchaseTable extends Component {
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
      ...Object.entries(tableDataRecord).map(([key, record]) => {
        const $td = new Label('td', data[key], { className: record.className });
        $td.$element.dataset[record.dataset] = data[key];
        return $td;
      }),
      new Button('구매하기', purchaseButtonProp),
    ];
    return $tableRow;
  }

  update() {
    this.$tableRows = this.state.dataset.map(
      ProductPurchaseTable.#tableRowComponent
    );
    this.children = [...this.$tableHead, ...this.$tableRows];
    this.setEvent();
    this.render();
  }
}

export default ProductPurchaseTable;
