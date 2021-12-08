import VisibleProductManager from "../productManager/visibleProductManager.js";
import VisibleChargeManager from "../chargeManager/visibleChargeManager.js";
import VisiblePurchaseManager from "../purchaseManager/visiblePurchaseManager.js";

const hideAllManager = () => {
  new VisibleProductManager().hide();
  new VisibleChargeManager().hide();
  new VisiblePurchaseManager().hide();
};

export { hideAllManager };
