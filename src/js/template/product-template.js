export const PRODUCT_PAGE_TEMPLATE = `
  <h2>상품 추가하기</h2>
  <input type="text" id="product-name-input" placeholder="상품명">
  <input type="number" id="product-price-input" placeholder="가격">
  <input type="number" id="product-quantity-input" placeholder="수량">
  <button id="product-add-button">추가하기</button>
  <br/>
  <br/>
  <h2>상품 현황</h2>
  <table id="product-table" border="1">
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
    <tbody id="product-table-body">
    </tbody>
  </table>
`;
