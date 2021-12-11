const $app = document.querySelector('#app');
const $main = document.createElement('main');
$main.id = 'productAddMenuWrap';
const $fragment = new DocumentFragment();

function renderProductAdd() {
  const productAddWrap = document.createElement('section');
  productAddWrap.id = 'productAddWrap';
  const productAddHeader = document.createElement('h2');
  productAddHeader.textContent = '상품 추가하기';

  const productAddInputsWrap = document.createElement('div');
  productAddInputsWrap.innerHTML = `
    <input id="product-name-input" placeholder="상품명"></input>
    <input id="product-price-input" placeholder="가격"></input>
    <input id="product-quantity-input" placeholder="수량"></input>
    <button id="product-add-button">추가하기</button>
  `;

  productAddWrap.appendChild(productAddHeader);
  productAddWrap.appendChild(productAddInputsWrap);
  $fragment.appendChild(productAddWrap);
}

function renderProductCurrent() {
  const curProductWrap = document.createElement('section');
  curProductWrap.id = 'curProductWrap';

  const curProductHeader = document.createElement('h2');
  curProductHeader.textContent = '상품 현황';

  const curProductTable = document.createElement('table');
  curProductTable.innerHTML = `
    <thead>
        <th>상품명</th><th>가격</th><th>수량</th>
    </thead>
  `;

  curProductWrap.appendChild(curProductHeader);
  curProductWrap.appendChild(curProductTable);
  $fragment.appendChild(curProductWrap);
}

function renderProductAddMenu() {
  renderProductAdd();
  renderProductCurrent();
  $main.appendChild($fragment);
  $app.appendChild($main);
}

export { renderProductAddMenu };
