import { ID } from './dom.js';

export const productAddMenuTemplate = () => {
  return `
    <h3>상품 추가하기</h3>
    <form>
      <input
        type="text"
        id=${ID.PRODUCT_NAME_INPUT}
        placeholder="상품명"
        required
      />
      <input
        type="number"
        id=${ID.PRODUCT_PRICE_INPUT}
        placeholder="가격"
        required
      />
      <input
        type="number"
        id=${ID.PRODUCT_QUANTITY_INPUT}
        placeholder="수량"
        required
      />
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
    <form>
      <input
        type="number"
        id=${ID.VENDING_MACHINE_CHARGE_INPUT}
        placeholder="자판기가 보유할 금액"
        required
      />
      <button type="submit" id=${ID.VENDING_MACHINE_CHARGE_BTN}>충전하기</button>
    </form>
    <div>보유 금액: <span id=${ID.VENDING_MACHINE_CHARGE_AMOUNT}></span></div>

    <h3>자판기가 보유한 동전</h3>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <td>500원</td>
        <td id=${ID.VENDING_MACHINE_COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id=${ID.VENDING_MACHINE_COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id=${ID.VENDING_MACHINE_COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id=${ID.VENDING_MACHINE_COIN_10_QUANTITY}></td>
      </tr>
    </table>
  `;
};

export const productPurchaseMenuTemplate = () => {
  return `
    <h3>금액 투입</h3>
    <form>
      <input
        type="number"
        id=${ID.CHARGE_INPUT}
        placeholder="투입할 금액"
        required
      />
      <button type="submit" id=${ID.CHARGE_BTN}>투입하기</button>
    </form>
    <div>투입한 금액: <span id=${ID.CHARGE_AMOUNT}></span></div>

    <h3>구매할 수 있는 상품 현황</h3>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

    <h3>잔돈</h3>
    <button id=${ID.COIN_RETURN_BTN}>반환하기</button>
    <table>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
      <tr>
        <td>500원</td>
        <td id=${ID.COIN_500_QUANTITY}></td>
      </tr>
      <tr>
        <td>100원</td>
        <td id=${ID.COIN_100_QUANTITY}></td>
      </tr>
      <tr>
        <td>50원</td>
        <td id=${ID.COIN_50_QUANTITY}></td>
      </tr>
      <tr>
        <td>10원</td>
        <td id=${ID.COIN_10_QUANTITY}></td>
      </tr>
    </table>
  `;
};
