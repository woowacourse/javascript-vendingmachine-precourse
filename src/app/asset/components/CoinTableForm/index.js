import COIN from '../../constants/COIN.js';
import TABLE_TITLE from '../../constants/TABLE_TITLE.js';
import UNIT from '../../constants/UNIT.js';
import Cell from '../Cell/index.js';
import CoinRow from '../Row/CoinRow.js';
import SubTitle from '../SubTitle/index.js';
import Table from '../Table/index.js';

const CoinTable = ($coin500, $coin100, $coin50, $coin10) => {
    const $table = Table();

    $table.append(CoinRow(TABLE_TITLE.coin, Cell(TABLE_TITLE.count)));
    $table.append(CoinRow(`${COIN[0]}${UNIT.amount}`, $coin500));
    $table.append(CoinRow(`${COIN[1]}${UNIT.amount}`, $coin100));
    $table.append(CoinRow(`${COIN[2]}${UNIT.amount}`, $coin50));
    $table.append(CoinRow(`${COIN[3]}${UNIT.amount}`, $coin10));

    return $table;
};

const CoinTableForm = (subTitleText, $coin500, $coin100, $coin50, $coin10) => {
    const $wrap = document.createElement('div');

    $wrap.style.marginTop = '30px';
    $wrap.append(SubTitle(subTitleText));
    $wrap.append(CoinTable($coin500, $coin100, $coin50, $coin10));

    return $wrap;
};

export default CoinTableForm;
