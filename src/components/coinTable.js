import {
  Table,
  TableHead,
  TableRow,
  TableData,
  TableDataWithId,
} from './elements.js';
import { MACHINE } from '../constants/machine.js';

const createCoinRow = (coin, id) => {
  const tableRow = TableRow();
  const coinNameData = TableData(coin);
  const coinQuantityData = TableDataWithId('', id);

  tableRow.append(coinNameData, coinQuantityData);

  return tableRow;
};

export const createCoinTable = (tableId, rowId) => {
  const coinTable = Table(tableId);

  TableHead(coinTable, MACHINE.TABLE.COIN_HEADS);
  MACHINE.COIN.forEach((coin, index) => {
    const tableRow = createCoinRow(`${coin}${MACHINE.WON}`, rowId[index]);

    coinTable.append(tableRow);
  });

  return coinTable;
};
