export const productManageItemTemplate = (
  productNameInput,
  productPriceInput,
  productQuantityInput
) => `
<tr class="product-manage-item">
  <td class="product-manage-name">${productNameInput}</td>
  <td class="product-manage-price">${productPriceInput}</td>
  <td class="product-manage-quantity">${productQuantityInput}</td>
</tr>
`;

export const getProduceAddText = (tabMenu) => {
  const productManageListText = tabMenu['product_add_menu']
    .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
    .join('');

  return `
  
    <section>
      <h4>상품 추가하기</h4>
      <form id="product-add-form">
        <input id="product-name-input" placeholder="상품명"/>
        <input type="number" id="product-price-input" placeholder="가격"/>
        <input type="number" id="product-quantity-input" placeholder="수량"/>
        <button id="product-add-button">추가하기</button>
      </form>
    </section>
    <section>
      <h4>상품 현황</h4>
      <table id="product-status-table">
        <tr>
          <th>상품명</th>
          <th>가격</th> 
          <th>수량</th>
        </tr>
        ${productManageListText}
      </table>
    </section>

  `;
};
