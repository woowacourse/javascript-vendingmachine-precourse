import { $ } from '../dom.js';
import PurchaseMoneyInput from './purchaseMoneyInput.js';

export default function PurchaseValidity() {
  const money = $('#charge-input').value;
  if (money < 0 || money==="") {
    return alert('금액을 입력해주세요.');
  }
  else if (money % 10 > 0) {
    return alert('금액은 10원 이상 단위로 입력해주세요');
  }
  return PurchaseMoneyInput(money);
}