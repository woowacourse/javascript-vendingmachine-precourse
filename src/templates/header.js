import { ID } from '../constants/selector.js';

export default function header() {
  return `
    <h2>🥤 자판기 🥤</h2>
    <button id=${ID.HEADER.PRODUCT_ADD_MENU}>상품 관리</button>
    <button id=${ID.HEADER.VENDING_MACHINE_MANAGE_MENU}>잔돈 충전</button>
    <button id=${ID.HEADER.PRODUCT_PURCHASE_MENU}>상품 구매</button>
    `;
}
