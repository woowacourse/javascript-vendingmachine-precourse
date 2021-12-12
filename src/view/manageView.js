class ManageView {
  constructor() {}

  render() {}

  template() {
    return `
      <section>
        <form>
          <h3>상품 추가하기</h3>
          <input id="product-name-input" type="text" placeholder="상품명" />
          <input id="product-price-input" type="number" placeholder="가격" />
          <input id="product-quantity-input" type="number" placeholder="수량" />
          <button id="product-add-button">추가하기</button>
        </form>
      </section>
      <section>
        <h3>상품 현황</h3>
        <table>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
          <tr class="product-manage-item">
            <td class="product-manage-name">임시상품</td>
            <td class="product-manage-price">1000</td>
            <td class="product-manage-quantity">20</td>
          </tr>
        </table>
      </section>
      `;
  }
}

export default ManageView;
