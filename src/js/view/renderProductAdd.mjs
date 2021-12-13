import { products } from '../model/products.mjs';

const $fragment = new DocumentFragment();

function productAdd() {
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

function productStatus() {
  const $productStatusWrap = document.createElement('section');
  $productStatusWrap.id = 'product-status-wrap';

  $productStatusWrap.innerHTML = `
    <h2>상품 현황</h2>
    <table>
      <thead>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </thead>
      <tbody id="product-status">
      </tbody>
    </table>
  `;
  $fragment.appendChild($productStatusWrap);
}

export function renderProductAdd() {
  const $app = document.querySelector('#app');
  const $main = document.createElement('main');
  $main.id = 'productAddWrap';

  productAdd();
  productStatus();
  $main.appendChild($fragment);
  $app.appendChild($main);
}

export function renderProductConfirm() {
  const $productStatus = document.querySelector('#product-status');

  $productStatus.innerHTML = products
    .map(product => {
      return `
      <tr class="product-manage-item">
        <td class="product-manage-name">${product.name}</td>
        <td class="product-manage-price">${product.price}</td>
        <td class="product-manage-quantity">${product.quantity}</td>
      </tr>`;
    })
    .join('');
}
