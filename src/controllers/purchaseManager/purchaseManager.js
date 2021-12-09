import { showMoneyCustomer } from "../../views/purchaseManager/showMoneyCustomer.js";
import { showProductsAbleToBuy } from "../../views/purchaseManager/showProductsAbleToBuy.js";
import { showReturnCoins } from "../../views/purchaseManager/showReturnCoins.js";
import { addPurchaseManagerClickEvents } from "./eventHandlers.js";

class PurchaseManager {
  constructor() {
    showMoneyCustomer();
    showProductsAbleToBuy();
    showReturnCoins(0);
    addPurchaseManagerClickEvents();
  }
}

export default PurchaseManager;
