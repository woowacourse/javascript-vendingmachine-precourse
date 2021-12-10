import { ID } from "../util/constant.js";

export const INIT_TEMPLATE = `
  <div id="head">
    <h1>🥤자판기🥤</h1>
    <button id=${ID.PRODUCT_ADD_MENU}>상품관리</button>
    <button id=${ID.VENDING_MACHINE_MANAGE_MENU}>잔돈충전</button>
    <button id=${ID.PRODUCT_PURCHASE_MENU}>상품 구매</button>
  </div>
`;
