const $app = document.querySelector('#app');
const $header = document.createElement('header');
$header.id = 'header';
const $fragment = new DocumentFragment();

function title() {
  const $header = document.createElement('h1');
  $header.innerHTML =
    '<img src="../../images/beverage_icon.png" class="beverage_icon"/><h1>자판기</h1><img src="../../images/beverage_icon.png" class="beverage_icon"/>';

  $fragment.appendChild($header);
}

function buttons() {
  const $buttonWrap = document.createElement('div');
  $buttonWrap.innerHTML = `
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>`;

  $fragment.appendChild($buttonWrap);
}

export function renderHeader() {
  title();
  buttons();
  $header.appendChild($fragment);
  $app.appendChild($header);
}
