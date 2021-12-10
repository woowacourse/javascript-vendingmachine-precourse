import RowByClassName from './RowByClassName.js';
import Cell from '../Cell/index.js';
import CellByClassNameAndDataset from '../Cell/CellByClassNameAndDataset.js';
import ButtonByClassName from '../Button/ButtonByClassName.js';
import {
    TABLE_ROW_CLASS_NAME,
    TABLE_CELL_CLASS_NAME,
    TABLE_CELL_DATASET,
    BUTTON,
} from '../../constants/index.js';

const createCell = (text, property) =>
    CellByClassNameAndDataset(
        text,
        TABLE_CELL_CLASS_NAME.purchase[property],
        TABLE_CELL_DATASET[property],
    );

const PurchaseBodyRow = ({ productName, productPrice, productQuantity }, id) => {
    const $ret = RowByClassName(TABLE_ROW_CLASS_NAME.purchase);
    const $cell = Cell('');
    const $button = ButtonByClassName(BUTTON.purchase.title, BUTTON.purchase.className);

    $button.dataset.id = id;
    $cell.append($button);
    $ret.append(createCell(productName, 'productName'));
    $ret.append(createCell(productPrice, 'productPrice'));
    $ret.append(createCell(productQuantity, 'productQuantity'));
    $ret.append($cell);

    return $ret;
};

export default PurchaseBodyRow;
