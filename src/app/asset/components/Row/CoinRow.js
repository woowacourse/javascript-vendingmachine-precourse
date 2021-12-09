import Row from './index.js';
import Cell from '../Cell/index.js';

const CoinRow = (coinValue, cell) => {
    const ret = Row();

    ret.append(Cell(coinValue));
    ret.append(cell);

    return ret;
};

export default CoinRow;
