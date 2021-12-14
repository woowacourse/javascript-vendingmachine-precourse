import { $ } from "../common/dom.js";
import { items } from "../model/store.js";
import {
  productPurchaseTemplate,
  productPurchaseInsertTable,
} from "../common/templates.js";

class ProductPurchaseView {
  getInput() {
    return +$("#charge-input").value;
  }

  getItems() {
    return productPurchaseInsertTable(items);
  }

  getTemplate() {
    return productPurchaseTemplate;
  }

  render() {
    $("#purchase-list").innerHTML = this.getItems();
  }
}

export default ProductPurchaseView;
