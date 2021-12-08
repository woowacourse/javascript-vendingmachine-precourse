import { showProducts } from "../../views/productManager/showProducts.js";
import { onClickProductAddButton } from "./eventHandlers.js";

class ProductManager {
  constructor() {
    onClickProductAddButton();
    showProducts();
  }
}

export default ProductManager;
