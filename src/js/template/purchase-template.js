import { ID } from "../util/constant.js";

export const PURCHASE_PAGE_TEMPLATE = `
  <h2>금액 투입</h2>
  <div>
    <input type="number" id=${ID.CHARGE_INPUT} placeholder="투입할 금액"/>
    <button id=${ID.CHARGE_BUTTON}>투입하기</button>
  </div>
  <br/>
  <div id=${ID.CHARGE_AMOUNT_CONTAINER}>
    투입한 금액:
    <span id=${ID.CHARGE_AMOUNT}></span>
    원
  </div> 
  <br/>
  <h2>구매할 수 있는 상품 현황</h2>
  <table border="1">
    <colgroup>
      <col width="170px">
      <col width="120px">
      <col width="120px">
      <col width="120px">
    </colgroup>
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </tr>
    </thead>
    <tbody id=${ID.PURCHASE_TABLE_BODY}>
    </tbody>
  </table>
  <br/>
`;
