export const headerTemplate = () => {
  return `
  <h2>🥤자판기🥤</h2>
  <nav>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  </nav>
  <main></main>
  `;
};

export const addTabTemplate = () => {
  return `
    <h2>상품 추가하기</h2>
    <div>
      <input id="product-name-input" type="text" placeholder="상품명" />
      <input id="product-price-input" type="number" placeholder="가격" />
      <input id="product-quantity-input" type="number" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    </div>
    <h2>상품 현황</h2>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `;
};
