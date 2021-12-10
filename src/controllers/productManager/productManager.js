import { onClickProductAddButton } from "./eventHandlers.js";
import { showProducts } from "../../views/productManager/showProducts.js";

class ProductManager {
  constructor() {
    onClickProductAddButton();
    showProducts();
  }
}

export default ProductManager;
