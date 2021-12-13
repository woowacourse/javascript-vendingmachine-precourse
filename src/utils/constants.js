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
          <td data-product-name=${item.name} class="product-purchase-name">${item.name}</td>
          <td data-product-price=${item.price} class="product-purchase-price">${item.price}</td>
          <td data-product-quantity=${item.quantity} class="product-purchase-quantity">${item.quantity}</td>
          <td><button class="purchase-button">구매하기</button></td>
        </tr>
      `
    )
    .join('');

  const { chargeAmount, coinList } = tabMenu['product_purchase_menu'];

  return `
    <section>
      <h4>금액 투입</h4>
      <form id="charge-form">
        <input type="number" id="charge-input" placeholder="투입할 금액"/>
        <button id="charge-button">충전하기</button>
      </form>
      <p>투입한 금액: <span id="charge-amount">${chargeAmount}</span></p>
    </section>
    <section>
      <h4>구매할 수 있는 상품 현황</h4>
      <table>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </tr>
        ${productPurchaseList}
      </table>
    </section>
    <section>
      <h4>잔돈</h4>
      <button id="coin-return-button">반환하기</button>
      <table id="coin-return-table">
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th>500원</th>
          <td  id="coin-500-quantity">${coinList['500']}개</td>
        </tr>
        <tr>
          <th>100원</th>
          <td id="coin-100-quantity">${coinList['100']}개</td>
        </tr>
        <tr>
          <th>50원</th>
          <td id="coin-50-quantity">${coinList['50']}개</td>
        </tr>
        <tr>
          <th>10원</th>
          <td id="coin-10-quantity">${coinList['10']}개</td>
        </tr>
      </table>
    </section>
  
`;
};
