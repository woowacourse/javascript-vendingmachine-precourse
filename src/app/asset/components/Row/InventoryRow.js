import RowByClassName from './RowByClassName.js';
import CellByClassName from '../Cell/CellByClassName.js';
import TABLE_ROW_CLASS_NAME from '../../constants/TABLE_ROW_CLASS_NAME.js';
import TABLE_CELL_CLASS_NAME from '../../constants/TABLE_CELL_CLASS_NAME.js';

const InventoryRow = (productName, productPrice, productQuantity) => {
    const ret = RowByClassName(TABLE_ROW_CLASS_NAME.inventory);

    ret.append(CellByClassName(productName, TABLE_CELL_CLASS_NAME.inventory.productName));
    ret.append(CellByClassName(productPrice, TABLE_CELL_CLASS_NAME.inventory.productPrice));
    ret.append(CellByClassName(productQuantity, TABLE_CELL_CLASS_NAME.inventory.productQuantity));

    return ret;
};

export default InventoryRow;
