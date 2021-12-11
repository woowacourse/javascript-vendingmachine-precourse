import elementCreator from "../dom/util.js"

const NAME_INPUT = 'product-name-input';
const PRICE_INPUT = 'product-price-input';
const QUANTITY_INPUT = 'product-quantity-input';
const ADD_BUTTON = 'product-add-button';

const createAddGoodsElement = (addTab) => {
    addTab.append(elementCreator('h3', null, '상품 추가하기'));

    const inputs = document.createElement('span');
    inputs.append(elementCreator('input', NAME_INPUT, null));
    inputs.append(elementCreator('input', PRICE_INPUT, null));
    inputs.append(elementCreator('input', QUANTITY_INPUT, null));
    inputs.append(elementCreator('button', ADD_BUTTON, '추가하기'));

    addTab.append(inputs);
}

const createGoodsStatusElement = (addTab) => {
    addTab.append(elementCreator('h3', null, '상품 현황'));
    
    const table = document.createElement('table');
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