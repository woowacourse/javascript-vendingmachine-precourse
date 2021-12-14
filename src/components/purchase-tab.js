import {PURCHASE_TAB_ID} from '../constants.js';

const charge = () => {
  return `<h3>금액 투입</h3>
            <span>
                <input id=${PURCHASE_TAB_ID.CHARGE_INPUT} />
                <button id=${PURCHASE_TAB_ID.CHARGE_BUTTON}>투입하기</button>
            </span>
            <div>
                투입한 금액: <span id=${PURCHASE_TAB_ID.CHARGE_AMOUNT}></span>
            </div>
            `;
};

const createCoinTable = () => {
  return `<tr><td>500원</td><td id=${PURCHASE_TAB_ID.COIN_TABLE.FIRST}></td></tr>
            <tr><td>100원</td><td id=${PURCHASE_TAB_ID.COIN_TABLE.SECOND}></td></tr>
            <tr><td>50원</td><td id=${PURCHASE_TAB_ID.COIN_TABLE.THIRD}></td></tr>
            <tr><td>10원</td><td id=${PURCHASE_TAB_ID.COIN_TABLE.LAST}></td></tr>
            `;
};

const change = () => {
  return `<h3>잔돈</h3>
            <button id=${PURCHASE_TAB_ID.RETURN_BUTTON}>반환하기</button>
            <table>
                <tr>
                    <td>동전</td>
                    <td>개수</td>
                </tr>
                ${createCoinTable()}
            </table>
            `;
};

const purchase = () => {
  return `<h3>구매할 수 있는 상품 현황</h3>
            <table id=${PURCHASE_TAB_ID.PRODUCT_TABLE}>
                <tr>
                    <td>상품명</td>
                    <td>가격</td>
                    <td>수량</td>
                    <td>구매</td>
                </tr>
            `;
};

export default () => {
  const purchaseTab = document.createElement('div');
  purchaseTab.insertAdjacentHTML('beforeend', charge());
  purchaseTab.insertAdjacentHTML('beforeend', purchase());
  purchaseTab.insertAdjacentHTML('beforeend', change());
  return purchaseTab;
};
