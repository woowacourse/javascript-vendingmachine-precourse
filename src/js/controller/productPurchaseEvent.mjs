import { renderProductPurchase, renderProductPurchaseStatus, renderChargedMoney } from '../view/index.mjs';
import { products } from '../model/products.mjs';

/*
  4) 상품 구매 탭
  
  1. 사용자는 투입할 금액 입력 요소에 투입 금액을 입력한 후, 투입하기버튼을 이용하여 금액을 투입한다.
  (금액은 누적으로 투입할 수 있다.)
  
  2. 보유한 상품 현황 출력
  클릭하면 해당 제품 수량 감소, localStorage에 있던 총 금액 감소, 감소한 금액 보관(추후 잔돈에서 500원부터 뺄 것)
  

  잔돈 반환하기
  1. 반환하기 클릭
  2. 최소 개수로 잔돈을 돌려준다. (500원 우선) + '개' 포함
  
  
  예외처리
  - 금액은 10원으로 나누어 떨어지는 금액만 투입할 수 있다.
  - 자판기가 보유한 금액은 {금액}원 형식으로 나타낸다.
*/

function renderProductPurchaseTab() {
  document.querySelector('main').remove();
  renderProductPurchase(products);
}

function addPurchaseMoney() {
  window.addEventListener('click', e => {});
}

export function productPurchaseEvent() {
  const $productPurchaseMenu = document.querySelector('#product-purchase-menu');
  $productPurchaseMenu.addEventListener('click', renderProductPurchaseTab);

  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#charge-button')) return;

    e.preventDefault();
    let money = document.querySelector('#charge-input').value;

    if (localStorage.getItem('charge-input')) {
      money = Number(localStorage.getItem('charge-input')) + Number(money);
    }
    localStorage.setItem('charge-input', money);

    renderChargedMoney();
  });

  renderProductPurchaseStatus();
}
