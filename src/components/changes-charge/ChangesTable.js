import { COINS_PRICE, ELEMENT_ID } from '../../constants/index.js';
import { $tag } from '../../utils/index.js';
import Component from '../base/Component.js';
import Label from '../base/Label.js';

const tableHeadRecord = {
  price: '동전',
  count: '개수',
};

const priceIdRecord = {
  [COINS_PRICE[0]]: ELEMENT_ID.CHANGES_CHARGE_COIN_500_QUANTITY,
  [COINS_PRICE[1]]: ELEMENT_ID.CHANGES_CHARGE_COIN_100_QUANTITY,
  [COINS_PRICE[2]]: ELEMENT_ID.CHANGES_CHARGE_COIN_50_QUANTITY,
  [COINS_PRICE[3]]: ELEMENT_ID.CHANGES_CHARGE_COIN_10_QUANTITY,
};

class ChangesTable extends Component {
  $title;

  $tableHead;

  $tableRows;

  constructor() {
    super($tag('table'));

    this.$tableHead = Object.values(tableHeadRecord).map(
      (head) => new Label('th', head)
    );
    this.$tableRows = [];
    this.children = [...this.$tableHead, ...this.$tableRows];
  }

  static #tableRowComponent(data) {
    const $tableRow = new Component($tag('tr'));
    $tableRow.children = [
      new Label('td', `${data.price}원`),
      new Label('td', `${data.count}개`, { id: priceIdRecord[data.price] }),
    ];
    return $tableRow;
  }

  update() {
    this.$tableRows = this.state.dataset.map(ChangesTable.#tableRowComponent);
    this.children = [...this.$tableHead, ...this.$tableRows];
    this.render();
  }
}

export default ChangesTable;
