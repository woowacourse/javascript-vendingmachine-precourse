import {
  VENDING_MACHINE,
  PRODUCT,
  COIN_LIST,
} from '../../common/constants/constants.js';
import { $ } from '../../common/dom/dom.js';
import { returnChangesinCoins } from '../../common/utils.js';

export const printInsertedMoney = () => {
  const moneychargedAmountList = JSON.parse(
    localStorage.getItem(VENDING_MACHINE.AMOUNT)
  );
  const $currentMoney = $('#charge-amount');
  let amountArray = [];
  let sum = 0;

  for (let i = 0; i < moneychargedAmountList.length; i++) {
    amountArray.push(moneychargedAmountList[i].value);
  }
  sum = amountArray.reduce((a, b) => a + b);
  $currentMoney.innerHTML = `${VENDING_MACHINE.INSERTED} ${sum} ${VENDING_MACHINE.WON}`;

  return sum;
};

// print purchase items to screen
export const printProductItemsToPurchaseToScreen = () => {
  const productPurchseListArray = JSON.parse(
    localStorage.getItem(PRODUCT.LIST)
  );
  const $itemName = $('.product-purchase-name');
  const $itemPrice = $('.product-purchase-price');
  const $itemQuantity = $('.product-purchase-quantity');

  for (const item of productPurchseListArray) {
    $itemName.innerHTML = item.name;
    $itemPrice.innerHTML = item.price;
    $itemQuantity.innerHTML = item.quantity;
  }
};

// Purchase items

export const manageDataAttribute = () => {
  const $productName = $('.product-purchase-name');
  const $productPrice = $('.product-purchase-price');
  const $productQuantity = $('.product-purchase-quantity');
  const $purchaseBtn = $('.purchase-button');
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));

  for (const item of productListArray) {
    $productName.setAttribute('data-product-name', item.name);
    $productPrice.setAttribute('data-product-price', item.price);
    $productQuantity.setAttribute('data-product-quantity', item.quantity);
    $purchaseBtn.setAttribute('data-purchase-button', item.name);
  }
};

// 구매하기 버튼 클릭시 구매한 상품 (price, quantitiy) 각 -1 값 출력
export const manageProductListAfterPuchased = () => {
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  const $productQuantity = $('.product-purchase-quantity');
  const $purchaseBtn = $('.purchase-button');

  $purchaseBtn.addEventListener('click', (event) => {
    const sum = printInsertedMoney();
    for (const item of productListArray) {
      if (event.target.getAttribute('data-purchase-button') === item.name) {
        $productQuantity.innerHTML--;
        $productQuantity.setAttribute(
          'data-product-quantity',
          parseInt($productQuantity.innerHTML, 10)
        );
      }
    }
    manageDifference(sum);
  });
};

const getCurrentQuantity = (targetProduct) => {
  console.log(targetProduct);

  const parent = targetProduct.parentNode.parentNode;

  const targetProductQuantity = parent
    .querySelector('.product-purchase-quantity')
    .getAttribute('data-product-quantity');

  console.log(targetProductQuantity);
  return targetProductQuantity;
};

// 차이 가격 각 행마다 나올수 있게
export const manageDifference = (sum) => {
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  const $chargedAmount = $('#charge-amount');
  const $tabelBody = $('#purchase-table-body');
  // console.log($tabelBody);
  $tabelBody.addEventListener('click', (event) => {
    if (event.target.className !== 'purchase-button') return;

    for (const item of productListArray) {
      if (event.target.getAttribute('data-purchase-button') === item.name) {
        // 차이금액 (보유금액 - (기존 수량 - 현재 수량 ) * 상품 가격)
        sum -=
          (parseInt(item.quantity, 10) - getCurrentQuantity(event.target)) *
          parseInt(item.price, 10);

        $chargedAmount.innerHTML = `${VENDING_MACHINE.INSERTED} ${sum} ${VENDING_MACHINE.WON}`;
      }
    }

    return sum;
  });
};

//Returning coins

export const printReturnedCoins = () => {
  const coinList = JSON.parse(localStorage.getItem('coinList'));
  const randomCoinAmount = returnChangesinCoins(32490, coinList);

  const $vendingMachinereturn500Coin = $('#coin-500-quantity');
  const $vendingMachinereturn100Coin = $('#coin-100-quantity');
  const $vendingMachinereturn50Coin = $('#coin-50-quantity');
  const $vendingMachinereturn10Coin = $('#coin-10-quantity');

  $vendingMachinereturn500Coin.innerHTML = `${
    randomCoinAmount[COIN_LIST[0]]
  }개`;
  $vendingMachinereturn100Coin.innerHTML = `${
    randomCoinAmount[COIN_LIST[1]]
  }개`;
  $vendingMachinereturn50Coin.innerHTML = `${randomCoinAmount[COIN_LIST[2]]}개`;
  $vendingMachinereturn10Coin.innerHTML = `${randomCoinAmount[COIN_LIST[3]]}개`;
};
