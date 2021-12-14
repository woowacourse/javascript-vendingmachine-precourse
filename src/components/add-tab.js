import {ADD_TAB_ID} from '../constants.js'
import { elementCreator } from "../utils/dom.js"

const createAddGoodsElement = (addTab) => {
    addTab.append(elementCreator('h3', null, '상품 추가하기'));

    const inputs = document.createElement('span');
    inputs.append(elementCreator('input', ADD_TAB_ID.NAME_INPUT, null));
    inputs.append(elementCreator('input', ADD_TAB_ID.PRICE_INPUT, null));
    inputs.append(elementCreator('input', ADD_TAB_ID.QUANTITY_INPUT, null));
    inputs.append(elementCreator('button', ADD_TAB_ID.ADD_BUTTON, '추가하기'));

    addTab.append(inputs);
}

const createGoodsStatusElement = () => {
    return `<h3>상품현황</h3>
        <table id=${ADD_TAB_ID.PRODUCT_TABLE}>
            <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
            </tr>
        </table>
    `
}

export default () => {
    const addTab = document.createElement('div');
    createAddGoodsElement(addTab);
    addTab.insertAdjacentHTML('beforeend', createGoodsStatusElement());

    return addTab;
}