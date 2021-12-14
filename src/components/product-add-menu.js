const productAddMenu = {
  tableHeader: `
  <div>
    <section>
      <h3>상품 추가하기</h3>
      <form>
        <input id="product-name-input" placeholder="상품명"/>
        <input id="product-price-input" placeholder="가격" type="number"/>
        <input id="product-quantity-input" placeholder="수량" type="number"/>
        <button id="product-add-button">추가하기</button>
      </form>
    </section><br />
    <section>
      <h3>상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th class="product-manage-name">상품명</th>
            <th class="product-manage-price">가격</th>
            <th class="product-manage-quantity">수량</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </section>
  </div>
  `,
  tableRow: (product) => `
  <tr class="product-manage-item">
    <td class="product-manage-name">${product.name}</td>
    <td class="product-manage-price">${product.price}</td>
    <td class="product-manage-quantity">${product.quantity}</td>
  </tr>
  `,
};

export default productAddMenu;
