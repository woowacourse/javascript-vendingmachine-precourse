export const purchaseTemplates = {
  inputMoney(money) {
    return `
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <h4 id="charge-amount">투입한 금액: ${money}</h4>
    `;
  },

  productList(product) {
    return `
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
        <tbody>
          <tr class="product-purchase-item">
            <td class="product-purchase-name" dataset="data-product-name">
              콜라
            </td>
            <td class="product-purchase-price" dataset="data-product-price">
              1500
            </td>
            <td class="product-purchase-quantity" dataset="data-product-quantity">
              20
            </td>
            <td>
              <button class="purchase-button">구매하기</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;
  },
};
