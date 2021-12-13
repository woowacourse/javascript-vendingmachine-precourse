import updateDrinkStorage from '../storage/updateDrinkStorage.js';
import updateUserMoneyStorage from '../storage/updateUserMoneyStorage.js';
import renderUpdateNowSellingProductTable from '../views/renderUpdateNowSellingProductTable.js';
import renderInsertCoinShowElement from '../views/renderInsertCoinShowElement.js';
import checkSoldOutError from './checkSoldOutError.js';
import computeUserMoneyAndPrice from './computeUserMoneyAndPrice.js';

export default function handlePurchaseButtonEvent(e) {
  const clickedParentNode = e.target.parentElement.parentElement;
  const productName = clickedParentNode.children[0].dataset.productName;
  const productPrice = clickedParentNode.children[1].dataset.productPrice;
  const productQuantity = clickedParentNode.children[2].dataset.productQuantity;
  if (checkSoldOutError(productQuantity)) {
    if (computeUserMoneyAndPrice(productPrice)) {
      updateUserMoneyStorage(productPrice);
      updateDrinkStorage(productName);
      renderInsertCoinShowElement();
      renderUpdateNowSellingProductTable(productName, clickedParentNode);
    }
  }
}
