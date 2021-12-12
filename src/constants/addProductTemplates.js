export const addProductTemplates = {
  addMenuInputs: `
      <input id="product-name-input" type="text" placeholder="상품명" />
      <input id="product-price-input" type="number" placeholder="가격" />
      <input id="product-quantity-input" type="number" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    `,

  addMenuTable: `
    <h3>상품 현황</h3>
      <table class="menu_table">
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody id="product-list"></tbody>
      </table>
    `,

  productItem(product) {
    return `
        <tr class="product-manage-item">
         <td class="product-manage-name">${product.name}</td>
         <td class="product-manage-price">${product.price}</td>
         <td class="product-manage-quantity">${product.quantity}</td>
       </tr>
      `;
  },
};
