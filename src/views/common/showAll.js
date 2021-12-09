import { showProducts } from "../../views/productManager/showProducts.js";
import { showMoneyCustomer } from "../../views/purchaseManager/showMoneyCustomer.js";
import { showProductsAbleToBuy } from "../../views/purchaseManager/showProductsAbleToBuy.js";
import { showCoinsInMachine } from "../chargeManager/showCoinsInMachine.js";
import { showMoneyInMachine } from "../chargeManager/showMoneyInMachine.js";

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

export { showAfterAddOrPurchaseProduct, showAfterReturnCoins };
