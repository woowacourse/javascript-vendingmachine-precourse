import { $ } from '../dom.js';
import AddItem from './addItem.js';

function itemNameValidity(itemName) {
  if (itemName.length === 0) {
    alert('상품의 이름을 입력해주세요.');
  }
  return true;
}
function itemPriceValidity(itemPrice) {
  if (itemPrice < 0) {
    alert('상품의 금액은 0원 이상이여야 합니다.');

  }
  else if (itemPrice % 10 > 0) {
    alert('상품은 10원단위를 기준으로 합니다.');
  }
  return true;
}
function itemCountValidity(itemCount) {
  if (itemCount < 1) {
    alert('상품은 1개 이상이여야 합니다.');
  }
  return true;
}
export default function AddInputValidity() {
  const itemName = $('#product-name-input').value;
  const itemPrice = $('#product-price-input').value;
  const itemCount = $('#product-quantity-input').value;
  if (itemNameValidity(itemName) && itemPriceValidity(itemPrice) && itemCountValidity(itemCount)) {
    AddItem(itemName, itemPrice, itemCount);
  }
}