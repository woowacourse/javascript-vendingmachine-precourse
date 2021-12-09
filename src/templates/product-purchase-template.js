const productPurchaseTemplate = {
  main: `
  <section>
    <h3>금액 투입</h3>
    <form>
      <input id="charge-input" placeholder="투입할 금액" type="number"/>
      <button id="charge-button">투입하기</button>
    </form><br />
    투입한 금액: <span id="charge-amount"></span>
  </section><br />
  <section>
    <h3>구매할 수 있는 상품 현황</h3>
    <table id="product-purchase-table">
      <thead>
        <tr>
          <th>상품명</th><th>가격</th><th>수량</th><th>구매</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </section><br />
  <section>
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <table id="coin-return-table">
      <thead>
        <tr>
          <th>동전</th><th>개수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>500원</td><td id="coin-500-quantity"></td>
        </tr>
        <tr>
          <td>100원</td><td id="coin-100-quantity"></td>
        </tr>
        <tr>
          <td>50원</td><td id="coin-50-quantity"></td>
        </tr>
        <tr>
          <td>10원</td><td id="coin-10-quantity"></td>
        </tr>
      </tbody>
    </table>
  </section>
  `,
  tableItem: (product) => `
  <tr class="product-purchase-item">
    <td class="product-purchase-name">${product.name}</td>
    <td class="product-purchase-price">${product.price}</td>
    <td class="product-purchase-quantity">${product.quantity}</td>
    <td>
      <button class="purchase-button" data-product-name=${product.name} data-product-price=${product.price} data-product-quantity=${product.quantity}>
        구매하기
      </button>
    </td>
  </tr>
  `,
};

export default productPurchaseTemplate;
