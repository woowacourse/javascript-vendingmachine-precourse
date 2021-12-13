import { DOM, ERROR_MESSAGE, INPUTS_DEFAULT_VALUE, TAB } from '../lib/constants.js';
import { $ } from '../lib/utils.js';
import Coin from '../modules/coin.js';
import VendingMachineUtil from './vendingMachineUtil.js';

/** Controller */
class VendingMachineController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;

    this.registerTabEventHandler();
    this.triggerRenderMainView();
  }

  triggerRenderMainView() {
    const tab = this.$model.getTab();

    if (tab === TAB.PRODUCT_ADD_MENU) {
      this.executeRenderProductAddMenu();
    }
    if (tab === TAB.VENDING_MACHINE_MANAGE_MENU) {
      this.executeRenderVendingMachineManageMenu();
    }
    if (tab === TAB.PRODUCT_PURCHASE_MENU) {
      this.executeRenderProductPurchaseMenu();
    }
  }

  executeRenderProductAddMenu() {
    this.$view.renderProductAddMenu(
      this.$model.getProductAddInputsValue(),
      this.$model.getProductList()
    );
    this.registerProductAddMenuEventHandler();
  }

  executeRenderVendingMachineManageMenu() {
    this.$view.renderVendingMachineManageMenu(
      this.$model.getVendingMachineChargeInputsValue(),
      this.$model.getCoins()
    );
    this.registerVendingMachineManageMenuEventHandler();
  }

  executeRenderProductPurchaseMenu() {
    this.$view.renderProductPurchaseMenu(
      this.$model.getChargeInputsValue(),
      this.$model.getChargeAmount(),
      this.$model.getProductList()
    );
    this.registerProductPurchaseMenuEventHandler();
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
    /** 절차지향적 ? */
    this.$model.setTab(textContent);

    this.triggerRenderMainView();
  }

  onInputProductAddForm(e) {
    const {
      target: { value, id },
    } = e;
    this.$model.setProductAddInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
  }

  onSubmitProductAddForm(e) {
    e.preventDefault();
    try {
      this.addProduct();
      this.$model.setProductAddInputsValue(() => INPUTS_DEFAULT_VALUE.PRODUCT_ADD);
      this.$view.mainView.renderProductAdd(
        this.$model.getProductList(),
        this.$model.getProductAddInputsValue()
      );
    } catch (error) {
      alert(error);
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
      this.addCoins();
      this.$model.setVendingMachineChargeInputsValue(
        () => INPUTS_DEFAULT_VALUE.VENDING_MACHINE_CHARGE
      );
      this.$view.mainView.renderCoins(
        this.$model.getCoins(),
        this.$model.getVendingMachineChargeInputsValue()
      );
    } catch (error) {
      alert(error);
    }
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

  /** Add Product 로직 */
  addProduct() {
    if (VendingMachineUtil.isValidProduct(this.$model.getProductAddInputsValue())) {
      const newProduct = {
        id: VendingMachineUtil.generateProductId(this.$model.getProductList()),
        name: this.$model.getProductAddInputValueById(DOM.PRODUCT_NAME_INPUT),
        price: Number(this.$model.getProductAddInputValueById(DOM.PRODUCT_PRICE_INPUT)),
        quantity: Number(this.$model.getProductAddInputValueById(DOM.PRODUCT_QUANTITY_INPUT)),
      };
      this.$model.setProductList([...this.$model.getProductList(), newProduct]);
    }
  }

  /** 동전을 추가하는 로직 */
  addCoins() {
    const vendingMachineInputsValue = this.$model.getVendingMachineChargeInputsValue();
    const vendingMachineChargeInputValue = this.$model.getVendingMachineChargeInputValueByInputId(
      DOM.VENDING_MACHINE_CHARGE_INPUT
    );
    /** 캡슐화 완료 */
    if (
      VendingMachineUtil.isValidCharge(vendingMachineInputsValue, DOM.VENDING_MACHINE_CHARGE_INPUT)
    ) {
      const newCoins = VendingMachineUtil.getNewCoins(Number(vendingMachineChargeInputValue));
      this.$model.setCoins(
        VendingMachineUtil.combineCurrentCoinsAndNewCoins(this.$model.getCoins(), newCoins)
      );
    }
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
export default VendingMachineController;
