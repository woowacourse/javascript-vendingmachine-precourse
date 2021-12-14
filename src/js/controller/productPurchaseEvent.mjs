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

  ------------------------------------------------------------------------------
  1. [구매하기] 버튼을 눌렀을 때 해당 상품 [가격만큼] [수량] 차감.
  2. 차감된 charge-input 다시 [투입한 금액]에 반영

*/

function renderProductPurchaseTab() {
  document.querySelector('main').remove();
  renderProductPurchase(products);
}

function addPurchaseMoney() {
  window.addEventListener('click', e => {});
}

function purchase() {
  window.addEventListener('click', e => {
    if (!e.target.classList.contains('purchase-button')) return;
    const productName = e.target.closest('.product-purchase-item').children[0].innerText;
    let setProducts = products.map(product => {
      if (product.name === productName) {
        product.quantity--;

        // localStorage 변경
        let input = localStorage.getItem('charge-input');
        let finalInput = input - product.price;
        localStorage.setItem('charge-input', finalInput);
        renderChargedMoney();
      }
      return product;
    });
    localStorage.setItem('products', JSON.stringify(setProducts));
    renderProductPurchaseStatus(setProducts);
  });
}

// 반환하기 버튼 클릭
function coinReturn() {
  window.addEventListener('click', e => {
    if (e.target !== document.querySelector('#coin-return-button')) return;
    // 투입한 금액 500원을
    // while문으로 돌리면서 500_WON -> 100_WON -> 50_WON -> 10_WON 개수만큼 계속차감.
    // while문을 돌면서 투입한 금액이 0원이 됬거나 10_WON까지 개수가 0개면 끝

    // 끝났을 때 잔돈 동전들 렌더링, 투입한 금액에 남은 금액 렌더링

    let chargeMoney = localStorage.getItem('charge-input'); // 500원
    let amountOfCoins = JSON.parse(localStorage.getItem('amount-of-coins'));

    let coinsType = ['500_WON', '100_WON', '50_WON', '10_WON'];
    let moneys = [500, 100, 50, 10];

    let flag = false;
    for (let i = 0; i < coinsType.length; i++) {
      if (flag) break;

      while (amountOfCoins[coinsType[i]] > 0) {
        chargeMoney -= moneys[i];
        amountOfCoins[coinsType[i]]--;
        if (chargeMoney < 0) {
          flag = true;
        }
      }
    }
    console.log(amountOfCoins, chargeMoney);
    localStorage.setItem('amount-of-coins', JSON.stringify(amountOfCoins));
    localStorage.setItem('charge-input', chargeMoney);
    renderChargedMoney();
  });
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
  coinReturn();
  purchase();
}
