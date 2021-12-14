import { DATA_MODEL_KEYS, DOM } from '../../lib/constants.js';
import { $, isCanBuyProduct, isPurchaseButton, isValidCharge } from '../../lib/utils.js';
import Coin from '../../modules/coin.js';
import { defaultValueGenerators } from '../model/index.js';

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
    if (isPurchaseButton(e.target)) {
      const {
        target: {
          dataset: { id },
        },
      } = e;
      this.executeProductPurchaseProcess(id);
    }
  }

  executeProductPurchaseProcess(productId) {
    try {
      this.purchaseProduct(productId);
      this.$view.mainView.renderProductPurchaseList(this.$model.getProductList());
      this.$view.mainView.renderCharge(
        this.$model.getChargeAmount(),
        this.$model.getChargeInputsValue()
      );
    } catch (error) {
      alert(error);
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
    this.executeInputChargeProcess();
  }

  executeInputChargeProcess() {
    try {
      this.addCharge();
      this.$model.setChargeInputsValue(() =>
        defaultValueGenerators[DATA_MODEL_KEYS.CHARGE_INPUTS_VALUE]()
      );
      this.$view.mainView.renderCharge(
        this.$model.getChargeAmount(),
        this.$model.getChargeInputsValue()
      );
    } catch (error) {
      alert(error);
    }
  }

  onClickCoinReturnButton() {
    const { returnCoins, chargeAmount, coins } = Coin.computeReturnCoins(
      this.$model.getChargeAmount(),
      this.$model.getCoins()
    );

    this.executeUpdateModelAfterReturnCoins(Coin.getCoinsAmount(returnCoins), chargeAmount, coins);
    this.$view.mainView.renderCharge(
      this.$model.getChargeAmount(),
      this.$model.getChargeInputsValue()
    );
    this.$view.mainView.renderReturnCoins(returnCoins);
  }

  executeUpdateModelAfterReturnCoins(returnCoinsAmount, chargeAmount, coins) {
    const newVendingMachineChargeAmount =
      this.$model.getVendingMachineChargeAmount() - returnCoinsAmount;

    this.$model.setVendingMachineChargeAmount(newVendingMachineChargeAmount);
    this.$model.setChargeAmount(chargeAmount);
    this.$model.setCoins(coins);
  }

  purchaseProduct(productId) {
    const { targetProduct, position } = this.$model.findProduct(productId);
    if (isCanBuyProduct(targetProduct, this.$model.getChargeAmount())) {
      this.$model.setProductInProductList({
        newProduct: { ...targetProduct, quantity: targetProduct.quantity - 1 },
        position,
      });
      this.$model.setChargeAmount(this.$model.getChargeAmount() - targetProduct.price);
    }
  }

  addCharge() {
    if (isValidCharge(this.$model.getChargeInputsValue(), DOM.CHARGE_INPUT)) {
      this.$model.addChargeAmount(
        Number(this.$model.getChargeInputValueById(DOM.CHARGE_INPUT)),
        DATA_MODEL_KEYS.CHARGE_AMOUNT
      );
    }
  }
}
export default ProductPurchaseController;
