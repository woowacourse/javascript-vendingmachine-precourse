export const TAB_MENUS_TEXT = `
  <header>
    <h1>🥤자판기🥤</h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu" >잔돈 충전</button>
    <button id="product-purchase-menu" style=>상품 구매</button>
  </header>
  <main>
  </main>
`;

export const getProductPurchaseText = (tabMenu) => {
  const productPurchaseList = tabMenu['product_add_menu']
    .map(
      (item) => `
        <tr class="product-purchase-item">
          <td class="product-purchase-name">${item.name}</td>
          <td class="product-purchase-price">${item.price}</td>
          <td class="product-purchase-quantity">${item.quantity}</td>
          <td><button>구매하기</button></td>
        </tr>
      `
    )
    .join('');

  return `
    <section>
      <h4>금액 투입</h4>
      <form id="charge-form">
        <input type="number" id="charge-input" placeholder="투입할 금액"/>
        <button id="charge-button">충전하기</button>
      </form>
      <p>투입한 금액: <div id="charge-amount"></div></p>
    </section>
    <section>
      <h4>구매할 수 있는 상품 현황</h4>
      <table>
        <tr>
          <th dataset="data-product-name">상품명</th>
          <th dataset="data-product-price">가격</th>
          <th dataset="data-product-quantity">수량</th>
          <th>구매</th>
        </tr>
        ${productPurchaseList}
      </table>
    </section>
    <section>
      <h4>잔돈</h4>
      <button id="coin-return-button">반환하기</button>
      <table>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th id="coin-500-quantity">500원</th>
          <td></td>
        </tr>
        <tr>
          <th id="coin-100-quantity">100원</th>
          <td></td>
        </tr>
        <tr>
          <th id="coin-50-quantity">50원</th>
          <td></td>
        </tr>
        <tr>
          <th id="coin-10-quantity">10원</th>
          <td></td>
        </tr>
      </table>
    </section>
  
`;
};
