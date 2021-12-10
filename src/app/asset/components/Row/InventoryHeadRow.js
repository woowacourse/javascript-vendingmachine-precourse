import Row from './index.js';
import Cell from '../Cell/index.js';
import { TABLE_TITLE } from '../../constants/index.js';

const InventoryHeadRow = () => {
    const ret = Row();

    ret.append(Cell(TABLE_TITLE.productName));
    ret.append(Cell(TABLE_TITLE.productPrice));
    ret.append(Cell(TABLE_TITLE.productQuantity));

    return ret;
};

export default InventoryHeadRow;
