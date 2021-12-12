import CoinTable from '../../coinTable/index.js';
import { ID_TABLE_CHARGED_COIN, ID_COIN_QUANTITY } from './const.js';

class VendingMachineCoinTable extends CoinTable {
  constructor(coins) {
    super(ID_TABLE_CHARGED_COIN);
    this.setTableRows(coins, ID_COIN_QUANTITY);
  }
}

export default VendingMachineCoinTable;
