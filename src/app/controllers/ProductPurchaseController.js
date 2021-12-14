import { $ } from '../../lib/utils.js';
import Coin from '../../modules/coin.js';
import { DOM, ERROR_MESSAGE, INPUTS_DEFAULT_VALUE } from '../constants.js';
import VendingMachineUtil from '../util.js';

class ProductPurchaseController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;
  }

  registerEventHandler() {
    $(DOM.PRODUCT_PURCHASE_LIST_TABLE).addEventListener(
      'click',
      this.onClickProductPurchaseListTable.bind(this)
    );
    $(DOM.CHARGE_FORM).addEventListener('input', this.onInputChargeForm.bind(this));
    $(DOM.CHARGE_FORM).addEventListener('submit', this.onSubmitChargeForm.bind(this));
    $(DOM.COIN_RETURN_BUTTON).addEventListener('click', this.onClickCoinReturnButton.bind(this));
  }

  onClickProductPurchaseListTable(e) {
    if (VendingMachineUtil.isPurchaseButton(e.target)) {
      const {
        target: { dataset },
      } = e;
      try {
        this.purchaseProduct(dataset.id);
        this.$view.mainView.renderProductPurchaseList(this.$model.getProductList());
        this.$view.mainView.renderCharge(
          this.$model.getChargeAmount(),
          this.$model.getChargeInputsValue()
        );
      } catch (error) {
        alert(error);
      }
    }
  }

  onInputChargeForm(e) {
    const {
      target: { value, id },
    } = e;

    this.$model.setChargeInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
  }

  onSubmitChargeForm(e) {
    e.preventDefault();

    try {
      this.addCharge();
      this.$model.setChargeInputsValue(() => INPUTS_DEFAULT_VALUE.CHARGE);
      this.$view.mainView.renderCharge(
        this.$model.getChargeAmount(),
        this.$model.getChargeInputsValue()
      );
    } catch (error) {
      alert(error);
    }
  }

  /** renderCharge - clearChageInput 하는 로직 분리하기 */
  onClickCoinReturnButton() {
    const returnCoins = this.generateReturnCoin();
    this.$view.mainView.renderCharge(
      this.$model.getChargeAmount(),
      this.$model.getChargeInputsValue()
    );
    this.$view.mainView.renderReturnCoins(returnCoins);
  }

  generateReturnCoin() {
    const { returnCoins, chargeAmount, coins } = Coin.computeReturnCoin(
      this.$model.getChargeAmount(),
      this.$model.getCoins()
    );
    this.$model.setChargeAmount(chargeAmount);
    this.$model.setCoins(coins);
    return returnCoins;
  }

  purchaseProduct(productId) {
    const { targetProduct, position } = this.$model.findProduct(productId);
    if (targetProduct === undefined) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_UNDEFINED);
    }
    if (targetProduct.quantity === 0) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_ZERO);
    }
    if (targetProduct.price > this.$model.getChargeAmount()) {
      throw new Error(ERROR_MESSAGE.PURCHASE_PRODUCT_ERROR_TARGET_PRODUCT_IS_TOO_EXPENSIVE);
    }
    this.sellProduct(targetProduct, position);
  }

  sellProduct(targetProduct, position) {
    this.$model.setProductInProductList({
      newProduct: { ...targetProduct, quantity: targetProduct.quantity - 1 },
      position,
    });

    this.$model.setChargeAmount(this.$model.getChargeAmount() - targetProduct.price);
  }

  addCharge() {
    if (VendingMachineUtil.isValidCharge(this.$model.getChargeInputsValue(), DOM.CHARGE_INPUT)) {
      const newChargeAmount =
        this.$model.getChargeAmount() +
        Number(this.$model.getChargeInputValueById(DOM.CHARGE_INPUT));

      this.$model.setChargeAmount(newChargeAmount);
    }
  }
}
export default ProductPurchaseController;
