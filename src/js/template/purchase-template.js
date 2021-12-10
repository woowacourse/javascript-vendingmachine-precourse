export const PURCHASE_PAGE_TEMPLATE = `
  <h2>금액 투입</h2>
  <div>
    <input type="number" id="charge-input"/>
    <button id="charge-button">투입하기</button>
  </div>
  <br/>
  <div id="charge-amount-container">
    투입한 금액:
    <span id="charge-amount"></span>
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
    <tbody id="purchase-table-body">
    </tbody>
  </table>
  <br/>
`;
