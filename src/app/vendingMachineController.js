import { DOM, INPUT_TYPE, PLAIN_TEXT, TAB } from '../lib/constants.js';
import { $ } from '../lib/utils.js';
import Coin from '../modules/coin.js';
import VendingMachineUtil from './vendingMachineUtil.js';

/** Controller */
class VendingMachineController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;

    this.initView();
    this.registerTabEventHandler();
    this.registerProductAddMenuEventHandler();
  }

  initView() {
    this.$view.renderMain(this.$model);
  }

  registerTabEventHandler() {
    this.$view.tabMenuSection.addEventListener('click', this.onClickTabMenuSection.bind(this));
  }
  registerProductAddMenuEventHandler() {
    $(DOM.PRODUCT_ADD_FORM).addEventListener('input', this.onInputProductAddForm.bind(this));
    $(DOM.PRODUCT_ADD_FORM).addEventListener('submit', this.onSubmitProductAddForm.bind(this));
  }
  registerVendingMachineManageMenuEventHandler() {
    $(DOM.VENDING_MACHINE_CHARGE_FORM).addEventListener(
      'input',
      this.onInputVendingMachineChargeForm.bind(this)
    );
    $(DOM.VENDING_MACHINE_CHARGE_FORM).addEventListener(
      'submit',
      this.onSubmitVendingMachineChargeForm.bind(this)
    );
  }
  registerProductPurchaseMenuEventHandler() {
    $(DOM.PRODUCT_PURCHASE_LIST_TABLE).addEventListener(
      'click',
      this.onClickProductPurchaseListTable.bind(this)
    );
    $(DOM.CHARGE_FORM).addEventListener('input', this.onInputChargeForm.bind(this));
    $(DOM.CHARGE_FORM).addEventListener('submit', this.onSubmitChargeForm.bind(this));
    $(DOM.COIN_RETURN_BUTTON).addEventListener('click', this.onClickCoinReturnButton.bind(this));
  }
  onClickTabMenuSection(e) {
    const {
      target: { textContent },
    } = e;

    this.$model.setTab(textContent);
    this.$view.renderMain(this.$model);

    if (this.$model.tab === TAB.PRODUCT_ADD_MENU) {
      this.registerProductAddMenuEventHandler();
      return;
    }
    if (this.$model.tab === TAB.VENDING_MACHINE_MANAGE_MENU) {
      this.registerVendingMachineManageMenuEventHandler();
      return;
    }
    if (this.$model.tab === TAB.PRODUCT_PURCHASE_MENU) {
      this.registerProductPurchaseMenuEventHandler();
      return;
    }
  }

  onInputProductAddForm(e) {
    const {
      target: { value, id, type },
    } = e;
    this.$model.setProductAddInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
  }

  onSubmitProductAddForm(e) {
    e.preventDefault();
    try {
      this.$model.addProduct();
      this.$model.setProductAddInputsValue((prev) => ({
        ...prev,
        [`${DOM.PRODUCT_NAME_INPUT}`]: PLAIN_TEXT,
        [`${DOM.PRODUCT_PRICE_INPUT}`]: PLAIN_TEXT,
        [`${DOM.PRODUCT_QUANTITY_INPUT}`]: PLAIN_TEXT,
      }));
      this.$view.renderProductAdd(this.$model.productList, this.$model.productAddInputsValue);
    } catch (e) {
      alert(e);
    }
  }
  onInputVendingMachineChargeForm(e) {
    const {
      target: { value, id },
    } = e;

    this.$model.setVendingMachineChargeInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
  }
  onSubmitVendingMachineChargeForm(e) {
    e.preventDefault();
    try {
      this.$model.addCoins();
      this.$model.setVendingMachineChargeInputsValue((prev) => ({
        ...prev,
        [`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]: PLAIN_TEXT,
      }));
      this.$view.renderCoins(
        this.$model.coins,
        this.$model.vendingMachineChargeInputsValue[`${DOM.VENDING_MACHINE_CHARGE_INPUT}`]
      );
    } catch (e) {
      alert(e);
    }
  }
  onClickProductPurchaseListTable(e) {
    if (VendingMachineUtil.isPurchaseButton(e.target)) {
      const {
        target: {
          dataset: { id: productId },
        },
      } = e;
      try {
        this.$model.purchaseProduct(productId);
        this.$view.renderProductPurchaseList(this.$model.productList);
        this.$view.renderCharge(this.$model.chargeAmount);
      } catch (e) {
        alert(e);
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
      this.$model.addCharge();
      this.$model.setChargeInputsValue((prev) => ({
        ...prev,
        [`${DOM.CHARGE_INPUT}`]: PLAIN_TEXT,
      }));
      this.$view.renderCharge(
        this.$model.chargeAmount,
        this.$model.chargeInputsValue[DOM.CHARGE_INPUT]
      );
    } catch (e) {
      alert(e);
    }
  }
  /** renderCharge - clearChageInput 하는 로직 분리하기 */
  onClickCoinReturnButton() {
    const returnCoin = this.generateReturnCoin();

    this.$view.renderCharge(
      this.$model.chargeAmount,
      this.$model.chargeInputsValue[DOM.CHARGE_INPUT]
    );
    this.$view.renderReturnCoins(returnCoin);
  }
  generateReturnCoin() {
    const { returnCoins, chargeAmount, coins } = Coin.generateReturnCoin(
      this.$model.chargeAmount,
      this.$model.coins
    );
    this.$model.setChargeAmount(chargeAmount);
    this.$model.setCoins(coins);
    return returnCoins;
  }
}
export default VendingMachineController;
