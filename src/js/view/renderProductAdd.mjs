const $fragment = new DocumentFragment();

function renderProductAddWrap() {
  const $productAddWrap = document.createElement('section');
  $productAddWrap.id = 'product-add-wrap';

  $productAddWrap.innerHTML = `
    <h2>상품 추가하기</h2>  
    <div>
      <input type="text" id="product-name-input" placeholder="상품명"></input>
      <input type="number" id="product-price-input" placeholder="가격"></input>
      <input type="number" id="product-quantity-input" placeholder="수량"></input>
      <button id="product-add-button">추가하기</button>
    </div>
  `;
  $fragment.appendChild($productAddWrap);
}

function renderProductStatusWrap() {
  const $productStatusWrap = document.createElement('section');

  $productStatusWrap.innerHTML = `
    <h2>상품 현황</h2>
    <table>
      <thead>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </thead>
      <tbody id="tbody-product-status">
      </tbody>
    </table>
  `;
  $fragment.appendChild($productStatusWrap);
}

function renderProductStatusTable() {
  const productStatus = JSON.parse(localStorage.getItem('products'));
  const $productStatusTable = document.querySelector('#tbody-product-status');

  if (!productStatus) return;
  $productStatusTable.innerHTML = productStatus
    .map(
      product => `
        <tr class="product-manage-item">
          <td class="product-manage-name">${product.name}</td>
          <td class="product-manage-price">${product.price}</td>
          <td class="product-manage-quantity">${product.quantity}</td>
        </tr>`
    )
    .join('');
}

function renderProductAddPageInit() {
  const $app = document.querySelector('#app');
  const $main = document.createElement('main');
  $main.id = 'product-add-wrap';

  renderProductAddWrap();
  renderProductStatusWrap();
  $main.appendChild($fragment);
  $app.appendChild($main);

  renderProductStatusTable();
}

function renderProductAddPage() {
  renderProductAddPageInit();
}

export { renderProductStatusTable, renderProductAddPage };
