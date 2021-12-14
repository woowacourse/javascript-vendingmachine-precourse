import {showProductList, showCurrentChanges, showPurchaseView} from "./views.js"

export function rendering() {
  showCurrentChanges();
  showProductList();
  showPurchaseView();
}