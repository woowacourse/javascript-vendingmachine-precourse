export const purchaseTemplates = {
  inputMoney(money) {
    return `
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <h4 id="charge-amount">투입한 금액: ${money}</h4>
    `;
  },

  productTable: `
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
        <tbody class="product-purchase-list">
        </tbody>
      </table>
    `,
  productItem(product) {
    const { id, name, price, quantity } = product;
    return `
      <tr class="product-purchase-item" data-product-id=${id}>
        <td class="product-purchase-name" data-product-name=${name}>${name}</td>
        <td class="product-purchase-price" data-product-price=${price}>${price}</td>
        <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
        <td><button class="purchase-button">구매하기</button></td>
      </tr>
    `;
  },
};
