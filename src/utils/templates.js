import { ID } from './dom.js';

export const productAddMenuTemplate = () => {
  return `
    <h3>상품 추가하기</h3>
    <form>
      <input type="text" id=${ID.PRODUCT_NAME_INPUT} placeholder="상품명" required />
      <input type="number" id=${ID.PRODUCT_PRICE_INPUT} placeholder="가격" required />
      <input type="number" id=${ID.PRODUCT_QUANTITY_INPUT} placeholder="수량" required />
      <button type="submit" id=${ID.PRODUCT_ADD_BTN}>추가하기</button>
    </form>

    <h3>상품 현황</h3>
    <table>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
    </table>
  `;
};

export const vendingMachineManageMenuTemplate = () => {
  return `
    <h3>자판기 동전 충전하기</h3>

    <input type="number" />
    <button>충전하기</button>
    <div>보유 금액: <span></span></div>

    <h3>자판기가 보유한 동전</h3>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <td>500원</td>
        <td></td>
      </tr>
      <tr>
        <td>100원</td>
        <td></td>
      </tr>
      <tr>
        <td>50원</td>
        <td></td>
      </tr>
      <tr>
        <td>10원</td>
        <td></td>
      </tr>
    </table>
  `;
};

export const productPurchaseMenuTemplate = () => {
  return `
    <h3>금액 투입</h3>
    <input type="number" />
    <button>투입하기</button>
    <div>투입한 금액: <span></span></div>

    <h3>구매할 수 있는 상품 현황</h3>
    <table>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </tr>
      <tr>
        <td>상품명1</td>
        <td>1</td>
        <td>1</td>
        <td><button>구매하기</button></td>
      </tr>
      <tr>
        <td>상품명2...</td>
        <td>2</td>
        <td>2</td>
        <td><button>구매하기</button></td>
      </tr>
    </table>

    <h3>잔돈</h3>
    <button>반환하기</button>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <td>500원</td>
        <td></td>
      </tr>
      <tr>
        <td>100원</td>
        <td></td>
      </tr>
      <tr>
        <td>50원</td>
        <td></td>
      </tr>
      <tr>
        <td>10원</td>
        <td></td>
      </tr>
    </table>
  `;
};
