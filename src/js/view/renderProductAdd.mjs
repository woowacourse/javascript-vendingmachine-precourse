import { products } from '../model/products.mjs';

const $fragment = new DocumentFragment();

function productAdd() {
  const $productAddWrap = document.createElement('section');
  $productAddWrap.id = 'productAddWrap';

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

function productCurrent() {
  const $curProductWrap = document.createElement('section');
  $curProductWrap.id = 'curProductWrap';

  $curProductWrap.innerHTML = `
    <h2>상품 현황</h2>
    <table id="productsStatus">
      <thead>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </thead>
      <tbody>
        <tr class="product-manage-item">
          <td class="product-manage-name"></td>
          <td class="product-manage-price"></td>
          <td class="product-manage-quantity"></td>
        </tr>
      </tbody>
    </table>
  `;
  $fragment.appendChild($curProductWrap);
}

export function renderProductAdd() {
  const $app = document.querySelector('#app');
  const $main = document.createElement('main');
  $main.id = 'productAddWrap';

  productAdd();
  productCurrent();
  $main.appendChild($fragment);
  $app.appendChild($main);
}

export function renderProductConfirm() {
  console.log(products);
}
