import { ELEMENT_CLASS } from '../../constants/index.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';

const tableRowProp = {
  className: ELEMENT_CLASS.PRODUCT_MANAGE_TABLE_ITEM,
};

const tableDataRecord = {
  name: {
    head: '상품명',
    className: ELEMENT_CLASS.PRODUCT_MANAGE_TABLE_ITEM_NAME,
  },
  price: {
    head: '가격',
    className: ELEMENT_CLASS.PRODUCT_MANAGE_TABLE_ITEM_PRICE,
  },
  count: {
    head: '수량',
    className: ELEMENT_CLASS.PRODUCT_MANAGE_TABLE_ITEM_QUANTITY,
  },
};

class ProductTable extends Component {
  $title;

  $tableHead;

  $tableRows;

  constructor() {
    super($tag('table'));

    this.$tableHead = Object.values(tableDataRecord).map(
      (record) => new Label('th', record.head)
    );
    this.$tableRows = [];
    this.children = [...this.$tableHead, ...this.$tableRows];
  }

  static #tableRowComponent(data) {
    const $tableRow = new Component($tag('tr'), tableRowProp);
    $tableRow.children = Object.entries(tableDataRecord).map(
      ([key, record]) =>
        new Label('td', data[key], { className: record.className })
    );
    return $tableRow;
  }

  beforeRender() {
    this.$tableRows = this.state.dataset.map(ProductTable.#tableRowComponent);
    this.children = [...this.$tableHead, ...this.$tableRows];
  }
}

export default ProductTable;
