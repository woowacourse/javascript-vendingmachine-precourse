import Row from './index.js';
import Cell from '../Cell/index.js';
import TABLE_TITLE from '../../constants/TABLE_TITLE.js';

const PurchaseHeadRow = () => {
    const $ret = Row();

    $ret.append(Cell(TABLE_TITLE.productName));
    $ret.append(Cell(TABLE_TITLE.productPrice));
    $ret.append(Cell(TABLE_TITLE.productQuantity));
    $ret.append(Cell(TABLE_TITLE.purchase));

    return $ret;
};

export default PurchaseHeadRow;
