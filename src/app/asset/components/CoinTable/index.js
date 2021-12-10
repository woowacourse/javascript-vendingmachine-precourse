import { COINS, UNIT, TABLE_TITLE } from '../../constants/index.js';
import Cell from '../Cell/index.js';
import CoinRow from '../Row/CoinRow.js';
import Table from '../Table/index.js';

const CoinTable = ($coin500, $coin100, $coin50, $coin10) => {
    const $table = Table();

    $table.append(CoinRow(TABLE_TITLE.coin, Cell(TABLE_TITLE.count)));
    $table.append(CoinRow(`${COINS[0]}${UNIT.amount}`, $coin500));
    $table.append(CoinRow(`${COINS[1]}${UNIT.amount}`, $coin100));
    $table.append(CoinRow(`${COINS[2]}${UNIT.amount}`, $coin50));
    $table.append(CoinRow(`${COINS[3]}${UNIT.amount}`, $coin10));

    return $table;
};

export default CoinTable;
