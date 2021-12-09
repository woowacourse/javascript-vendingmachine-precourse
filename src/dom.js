const tabMenus = `
      <div>
        <h1>🥤자판기🥤</h1>
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu" >잔돈 충전</button>
        <button id="product-purchase-menu" style=>상품 구매</button>
      </div>
      <div id="tab"></div>
`;

const tab1 = `
<div class="tab1">
    <h2>상품 추가하기</h2>
    <form>
        <input type="text" id="product-name-input" placeholder="상품명" />
        <input type="number" id="product-price-input" placeholder="수량" />
        <input type="number" id="product-quantity-input" placeholder="가격"
        />
        <input type="submit" id="product-add-button" value="추가하기"></input>
    </form>
    <h2>상품 현황</h2>
    <table>
        <thead>
            <tr id="product-manage-item">
                <th id="product-manage-name">상품명</th>
                <th id="product-manage-price">가격</th>
                <th id="product-manage-quantity">수량</th>
            </tr>
        </thead>
        <tbody id="tbodyOfTab1"></tbody>
    </table>
</div>
`;

const tab2 = `
<div class="tab2">
    <h2>자판기 동전 충전하기</h2>
</div>
`;

const tab3 = `
<div class="tab3">
    <h2>금액 투입</h2>
</div>
`;

const productNameInput = () => document.getElementById('product-name-input');
const productPriceInput = () => document.getElementById('product-price-input');
const productQuantityInput = () =>
  document.getElementById('product-quantity-input');
const tbodyOfTab1 = () => document.getElementById('tbodyOfTab1');
const createTbody = (name, price, quantity) => `
  <tr id='product-manage-item'>
    <td id='product-manage-name'>${name}</td>
    <td id='product-manage-price'>${price}</td>
    <td id='product-manage-quantity'>${quantity}</td>
  </tr>
`;
const newRowOfTab1 = () =>
  createTbody(
    productNameInput().value,
    productPriceInput().value,
    productQuantityInput().value
  );

export { tabMenus, tab1, tab2, tab3, tbodyOfTab1, newRowOfTab1 };
