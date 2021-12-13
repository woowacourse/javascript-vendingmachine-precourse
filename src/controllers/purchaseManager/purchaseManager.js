import { showMoneyCustomer } from "../../views/purchaseManager/show/showMoneyCustomer.js";
import { showProductsAbleToBuy } from "../../views/purchaseManager/show/showProductsAbleToBuy.js";
import { showReturnCoinTable } from "../../views/purchaseManager/show/showReturnCoins.js";
import { addPurchaseManagerClickEvents } from "./eventHandlers.js";

class PurchaseManager {
  constructor() {
    showMoneyCustomer();
    showProductsAbleToBuy();
    showReturnCoinTable();
    addPurchaseManagerClickEvents();
  }
}

export default PurchaseManager;
