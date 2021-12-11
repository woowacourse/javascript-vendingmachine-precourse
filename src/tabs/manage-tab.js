import { elementCreator } from "../dom/util.js"
import { MANAGE_TAB_ID } from "../constants.js";

const createCoinTable = () => {
    return `<tbody><tr><td>500원</td><td id=${MANAGE_TAB_ID.COIN_FIVE_HUNDRED}></td></tr>
            <tr><td>100원</td><td id=${MANAGE_TAB_ID.COIN_HUNDRED}></td></tr>
            <tr><td>50원</td><td id=${MANAGE_TAB_ID.COIN_FIFTY}></td></tr>
            <tr><td>10원</td><td id=${MANAGE_TAB_ID.COIN_TEN}></td></tr>
            </tbody>`
}

const createChargeCoinElement = (manageTab) => {
    manageTab.append(elementCreator('h3', null, '자판기 동전 충전하기'));
    const chargeSpan = elementCreator('div', MANAGE_TAB_ID.CHARGE_DIV, null);
    chargeSpan.append(
        elementCreator('input', MANAGE_TAB_ID.CHARGE_INPUT, null),
        elementCreator('button', MANAGE_TAB_ID.CHARGE_BUTTON, '충전하기')
    );
    manageTab.append(
        chargeSpan,
        elementCreator('span', MANAGE_TAB_ID.AMOUNT_SPAN, '보유 금액: '),
        elementCreator('span', MANAGE_TAB_ID.AMOUNT_SPAN_VALUE, null)
    );
}

const createCoinViewElement = (manageTab) => {
    manageTab.append(elementCreator('h3', null, '자판기가 보유한 동전'));
    const coinTable = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableRow = document.createElement('tr');
    tableRow.append(
        elementCreator('th', null, '동전'),
        elementCreator('th', null, '개수'),
    )

    tableHead.append(tableRow);
    coinTable.append(tableHead);
    
    coinTable.insertAdjacentHTML('beforeend',createCoinTable());
    manageTab.append(coinTable);
}

export default () => {
    const manageTab = document.createElement('div');
    createChargeCoinElement(manageTab);
    createCoinViewElement(manageTab);

    return manageTab;
}