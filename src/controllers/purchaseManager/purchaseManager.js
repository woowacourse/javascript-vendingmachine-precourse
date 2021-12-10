import { showMoneyCustomer } from "../../views/purchaseManager/showMoneyCustomer.js";
import { showProductsAbleToBuy } from "../../views/purchaseManager/showProductsAbleToBuy.js";
import { showReturnCoinTable } from "../../views/purchaseManager/showReturnCoins.js";
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
