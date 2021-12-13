import {
  VENDING_MACHINE,
  PRODUCT,
  COIN_LIST,
} from '../../common/constants/constants.js';
import { $ } from '../../common/dom/dom.js';
import {
  getRandomCoinsAmongList,
  returnChangesinCoins,
} from '../../common/utils.js';

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
export const printProductPurchaseItemsToScreen = () => {
  const productPurchseListArray = JSON.parse(
    localStorage.getItem(PRODUCT.LIST)
  );
  const $itemName = $('.product-purchase-name');
  const $itemPrice = $('.product-purchase-price');
  const $itemQuantity = $('.product-purchase-quantity');

  for (let i = 0; i < productPurchseListArray.length; i++) {
    console.log(productPurchseListArray[i].name);
    $itemName.innerHTML = productPurchseListArray[i].name;
    $itemPrice.innerHTML = productPurchseListArray[i].price;
    $itemQuantity.innerHTML = productPurchseListArray[i].quantity;
  }
};

//Returning coins

export const printReturnedCoins = () => {
  const sum = printInsertedMoney();
  const randomCoinAmount = returnChangesinCoins(sum, getRandomCoinsAmongList());
  const $vendingMachinereturn500Coin = $('#vending-machine-coin-500-quantity');
  const $vendingMachinereturn100Coin = $('#vending-machine-coin-100-quantity');
  const $vendingMachinereturn50Coin = $('#vending-machine-coin-50-quantity');
  const $vendingMachinereturn10Coin = $('#vending-machine-coin-10-quantity');

  $vendingMachinereturn500Coin.innerHTML = `${
    randomCoinAmount[COIN_LIST[0]]
  }개`;
  $vendingMachinereturn100Coin.innerHTML = `${
    randomCoinAmount[COIN_LIST[1]]
  }개`;
  $vendingMachinereturn50Coin.innerHTML = `${randomCoinAmount[COIN_LIST[2]]}개`;
  $vendingMachinereturn10Coin.innerHTML = `${randomCoinAmount[COIN_LIST[3]]}개`;
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
    for (const item of productListArray) {
      // const sum = printInsertedMoney();

      if (event.target.getAttribute('data-purchase-button') === item.name) {
        $productQuantity.innerHTML--;
        $productQuantity.setAttribute(
          'data-product-quantity',
          parseInt($productQuantity.innerHTML, 10)
        );
        // manageDifference(sum);
      }
    }
  });
};

// 차이 가격 각 행마다 나올수 있게
export const manageDifference = (sum) => {
  const $originAmount = parseInt($('.product-manage-quantity').innerHTML, 10);
  const $afterAmount = parseInt($('.product-purchase-quantity').innerHTML, 10);
  const $price = parseInt($('.product-purchase-price').innerHTML, 10);
  const $chargedAmount = $('#charge-amount');
  const productListArray = JSON.parse(localStorage.getItem(PRODUCT.LIST));
  const $purchaseBtn = $('.purchase-button');
  let difference = 0;

  $purchaseBtn.addEventListener('click', (event) => {
    for (const item of productListArray) {
      if (event.target.getAttribute('data-purchase-button') === item.name) {
        difference = sum - ($originAmount - $afterAmount) * $price;
      }
    }
  });

  $chargedAmount.innerHTML = `${VENDING_MACHINE.INSERTED} ${difference} ${VENDING_MACHINE.WON}`;
};
