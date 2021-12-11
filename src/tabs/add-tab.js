import {ADD_TAB_ID} from '../constants.js'
import { elementCreator } from "../dom/util.js"

const createAddGoodsElement = (addTab) => {
    addTab.append(elementCreator('h3', null, '상품 추가하기'));

    const inputs = document.createElement('span');
    inputs.append(elementCreator('input', ADD_TAB_ID.NAME_INPUT, null));
    inputs.append(elementCreator('input', ADD_TAB_ID.PRICE_INPUT, null));
    inputs.append(elementCreator('input', ADD_TAB_ID.QUANTITY_INPUT, null));
    inputs.append(elementCreator('button', ADD_TAB_ID.ADD_BUTTON, '추가하기'));

    addTab.append(inputs);
}

const createGoodsStatusElement = (addTab) => {
    addTab.append(elementCreator('h3', null, '상품 현황'));
    
    const table = elementCreator('table', ADD_TAB_ID.TABLE, null);
    const tableRow = document.createElement('tr');

    const nameHeader = elementCreator('th', null, '상품명');
    const priceHeader = elementCreator('th', null, '가격');
    const quantityHeader = elementCreator('th', null, '수량');
    
    tableRow.append(nameHeader, priceHeader, quantityHeader);
    table.append(tableRow);
    addTab.append(table);
}

export default () => {
    const addTab = document.createElement('div');
    createAddGoodsElement(addTab);
    createGoodsStatusElement(addTab);

    return addTab;
}