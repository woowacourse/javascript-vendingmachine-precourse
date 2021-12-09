import { showProducts } from "../../views/productManager/showProducts.js";
import { showMoneyCustomer } from "../../views/purchaseManager/showMoneyCustomer.js";
import { showProductsAbleToBuy } from "../../views/purchaseManager/showProductsAbleToBuy.js";

const showAll = () => {
  showProducts();
  showProductsAbleToBuy();
  showMoneyCustomer();
};

export { showAll };
