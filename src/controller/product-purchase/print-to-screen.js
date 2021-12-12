import { $ } from '../../common/dom/dom.js';
import {
  getRandomCoinsAmongList,
  returnChangesinCoins,
} from '../../common/utils.js';

export const printInsertedMoney = () => {
  const moneychargedAmountList = JSON.parse(
    localStorage.getItem('moneyChargedAmount')
  );
  const $moneyChargePtag = $('#charge-amount');
  let amountArray = [];
  let sum = 0;

  for (let i = 0; i < moneychargedAmountList.length; i++) {
    amountArray.push(moneychargedAmountList[i].value);
  }
  sum = amountArray.reduce((a, b) => a + b);
  $moneyChargePtag.innerHTML = `투입한 금액: ${sum}원`;

  return sum;
};

export const purchaseItems = () => {};

export const printProductPurchaseItemsToScreen = () => {
  const productPurchseListArray = JSON.parse(
    localStorage.getItem('productList')
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

export const printReturnedCoins = () => {
  const sum = printInsertedMoney();
  const randomCoinAmount = returnChangesinCoins(sum, getRandomCoinsAmongList());
  const $vendingMachinereturn500Coin = $('#vending-machine-coin-500-quantity');
  const $vendingMachinereturn100Coin = $('#vending-machine-coin-100-quantity');
  const $vendingMachinereturn50Coin = $('#vending-machine-coin-50-quantity');
  const $vendingMachinereturn10Coin = $('#vending-machine-coin-10-quantity');

  $vendingMachinereturn500Coin.innerHTML = `${randomCoinAmount['500']}개`;
  $vendingMachinereturn100Coin.innerHTML = `${randomCoinAmount['100']}개`;
  $vendingMachinereturn50Coin.innerHTML = `${randomCoinAmount['50']}개`;
  $vendingMachinereturn10Coin.innerHTML = `${randomCoinAmount['10']}개`;
};
