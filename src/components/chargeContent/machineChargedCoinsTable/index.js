import { COINS } from '../../../machine/const.js';
import createDataCell from '../../table/createDataCell.js';
import Table from '../../table/index.js';
import createElement from '../../utils/createElement.js';
import {
  ID_TABLE_CHARGED_COIN,
  ID_TABLE_COIN_QUANTITY,
  TABLE_HEADERS,
} from './const.js';

class MachineChargedCoinsTable extends Table {
  constructor(coins) {
    super(ID_TABLE_CHARGED_COIN);
    this.setTableHeader(TABLE_HEADERS);
    this.setTableRows(coins);
  }

  setTableRows(coins) {
    COINS.forEach((coin) => {
      const tr = createElement('tr');
      tr.appendChild(createDataCell(coin));
      tr.appendChild(createDataCell(`${coins[coin]}개`), {
        id: ID_TABLE_COIN_QUANTITY[coin],
      });

      this.appendTableRow(tr);
    });
  }
}

export default MachineChargedCoinsTable;
