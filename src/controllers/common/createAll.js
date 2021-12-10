import Menu from "../menu/menu.js";
import ProductManager from "../productManager/productManager.js";
import ChargeManager from "../chargeManager/chargeManager.js";
import PurchaseManager from "../purchaseManager/purchaseManager.js";

const createAll = () => {
  new Menu();
  new ProductManager();
  new ChargeManager();
  new PurchaseManager();
};

export { createAll };
