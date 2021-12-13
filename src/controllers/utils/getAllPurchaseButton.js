import { $$ } from '../../utils/DOMUtils.js';
import { default as UT } from '../../utils/utils.js';
import { default as V } from '../../utils/validators.js';
import { default as DOM } from '../../utils/DOMUtils.js';
import { SELECTOR } from '../../constants/selectors.js';

const getAllPurchaseButton = () => {
  $$(SELECTOR.PURCHASE_ITEM_BUTTON).forEach(button => addPurchaseButtonEvent(button));
};

const addPurchaseButtonEvent = element => {
  element.addEventListener('click', e => {
    e.preventDefault();

    const data = UT.getProductInformation(e.path[2].children);

    if (!V.isValidProductPurchase(data)) return;

    manageDatabaseAndRender(data);

    getAllPurchaseButton();
  });
};

const manageDatabaseAndRender = data => {
  manageChargeToPurchaseProduct(data);

  manageIntentoryToPurchaseProduct(data);

  renderProductAddManager();
};

const manageChargeToPurchaseProduct = data => {
  UT.updateDeductedCharge(data);

  DOM.showChargeToPurchaseProduct();
};

const manageIntentoryToPurchaseProduct = data => {
  UT.updateDeductedProductQuantity(data);

  DOM.showIntentoryToPurchaseProduct();
};

const renderProductAddManager = () => {
  DOM.showInventory();
};

export default getAllPurchaseButton;
