import { $ } from '../../common/dom/dom.js';

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
};

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
