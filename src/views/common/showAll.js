import { addHeader } from "../header/addHeader.js";
import { addProductManager } from "../productManager/addProductManager.js";
import { addChargeManager } from "../chargeManager/addChargeManager.js";
import { addPurchaseManager } from "../purchaseManager/addPurchaseManager.js";
import { showProducts } from "../productManager/show/showProducts.js";
import { showProductsAbleToBuy } from "../purchaseManager/show/showProductsAbleToBuy.js";
import { showMoneyCustomer } from "../purchaseManager/show/showMoneyCustomer.js";
import { showMoneyInMachine } from "../chargeManager/show/showMoneyInMachine.js";
import { showCoinsInMachine } from "../chargeManager/show/showCoinsInMachine.js";

// 초기 화면
// 헤더를 보여주고 각 탭은 숨김 상태에서 시작
const showAll = () => {
  addHeader();
  addProductManager();
  addChargeManager();
  addPurchaseManager();
};

// 상품을 추가하거나 구매하였을 때 새로 불러올 화면
const showAfterAddOrPurchaseProduct = () => {
  showProducts();
  showProductsAbleToBuy();
  showMoneyCustomer();
};

// 잔돈을 반환하였을 때 새로 불러올 화면
const showAfterReturnCoins = () => {
  showMoneyInMachine();
  showCoinsInMachine();
  showMoneyCustomer();
};

export { showAll, showAfterAddOrPurchaseProduct, showAfterReturnCoins };
