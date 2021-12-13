import CoinTable from '../../coinTable/index.js';
import { ID_COIN_QUANTITY } from './const.js';

class ReturnedCoinTable extends CoinTable {
  constructor(returnedCoins) {
    super('returned-coin-table');
    this.setTableRows(returnedCoins, ID_COIN_QUANTITY);
  }
}

export default ReturnedCoinTable;
