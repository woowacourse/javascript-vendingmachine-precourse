import { $ } from "../common/dom.js";
import { items } from "../model/store.js";
import {
  productAddTemplate,
  productAddInsertTable,
} from "../common/templates.js";

class ProductAddView {
  getItems() {
    return productAddInsertTable(items);
  }

  render() {
    $("#product-list").innerHTML = this.getItems();
  }

  getTemplate() {
    return productAddTemplate;
  }
}

export default ProductAddView;
