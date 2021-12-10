import { showHeader } from "../header/showHeader.js";
import { addProductManager } from "../productManager/addProductManager.js";
import { addChargeManager } from "../chargeManager/addChargeManager.js";
import { addPurchaseManager } from "../purchaseManager/addPurchaseManager.js";
import { showProducts } from "../productManager/showProducts.js";
import { showProductsAbleToBuy } from "../purchaseManager/showProductsAbleToBuy.js";
import { showMoneyCustomer } from "../purchaseManager/showMoneyCustomer.js";
import { showMoneyInMachine } from "../chargeManager/showMoneyInMachine.js";
import { showCoinsInMachine } from "../chargeManager/showCoinsInMachine.js";

const showAll = () => {
  showHeader();
  addProductManager();
  addChargeManager();
  addPurchaseManager();
};

const showAfterAddOrPurchaseProduct = () => {
  showProducts();
  showProductsAbleToBuy();
  showMoneyCustomer();
};

const showAfterReturnCoins = () => {
  showMoneyInMachine();
  showCoinsInMachine();
  showMoneyCustomer();
};

export { showAll, showAfterAddOrPurchaseProduct, showAfterReturnCoins };
