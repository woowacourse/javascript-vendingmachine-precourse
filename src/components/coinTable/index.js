import Table from '../table/index.js';
import createDataCell from '../table/createDataCell.js';
import createElement from '../utils/createElement.js';
import { COINS } from '../../machine/const.js';
import { TABLE_HEADERS } from './const.js';

class CoinTable extends Table {
  constructor(id) {
    super(id);
    this.setTableHeader(TABLE_HEADERS);
  }

  setTableRows(coins, idDictionary) {
    COINS.forEach((coin) => {
      const tr = createElement('tr');
      tr.appendChild(createDataCell(coin));
      tr.appendChild(createDataCell(`${coins[coin]}개`), {
        id: idDictionary[coin],
      });

      this.appendTableRow(tr);
    });
  }
}

export default CoinTable;
