import { ID } from "../util/constant.js";

export const PRODUCT_PAGE_TEMPLATE = `
  <h2>상품 추가하기</h2>
  <input type="text" id=${ID.PRODUCT_NAME_INPUT} placeholder="상품명">
  <input type="number" id=${ID.PRODUCT_PRICE_INPUT} placeholder="가격">
  <input type="number" id=${ID.PRODUCT_QUANTITY_INPUT} placeholder="수량">
  <button id=${ID.PRODUCT_ADD_BUTTON}>추가하기</button>
  <br/>
  <br/>
  <h2>상품 현황</h2>
  <table border="1">
    <colgroup>
      <col width="180px">
      <col width="130px">
      <col width="130px">
    </colgroup>
    <thead>
    <tr>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
    </tr>
    </thead>
    <tbody id=${ID.PRODUCT_TABLE_BODY}>
    </tbody>
  </table>
`;
