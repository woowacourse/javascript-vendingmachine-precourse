export default function productManage() {
  let productManageHtml = `<div>
    <h2>상품 추가하기</h2>
    <form>
      <input type="text" id="product-name-input" placeholder="상품명" />
      <input type="number" id="product-price-input" placeholder="가격" />
      <input type="number" id="product-quantity-input" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
    </form>
  </div>
  <div>
    <h2>상품 현황</h2>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
     
    </table>
  </div>
  `;
  return productManageHtml;
}
