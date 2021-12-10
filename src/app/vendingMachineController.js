import { DOM, INPUT_TYPE, TAB } from '../lib/constants.js';
import { $ } from '../lib/utils.js';

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
  registerProductPurchaseMenuEventHandler() {
    // $(DOM.PRODUCT_ADD_FORM).addEventListener('input', this.onInputProductAddForm.bind(this));
    // $(DOM.PRODUCT_ADD_FORM).addEventListener('submit', this.onSubmitProductAddForm.bind(this));
  }
  registerVendingMachineManageMenuEventHandler() {
    // $(DOM.PRODUCT_ADD_FORM).addEventListener('input', this.onInputProductAddForm.bind(this));
    // $(DOM.PRODUCT_ADD_FORM).addEventListener('submit', this.onSubmitProductAddForm.bind(this));
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
    if (this.$model.tab === TAB.PRODUCT_PURCHASE_MENU) {
      this.registerProductPurchaseMenuEventHandler();
      return;
    }
    if (this.$model.tab === TAB.VENDING_MACHINE_MANAGE_MENU) {
      this.registerVendingMachineManageMenuEventHandler();
      return;
    }
  }

  onInputProductAddForm(e) {
    const {
      target: { value, id, type },
    } = e;
    if (type === INPUT_TYPE.TEXT) {
      console.log(this.$model);
      this.$model.setProductAddInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
    }
    if (type === INPUT_TYPE.NUMBER) {
      this.$model.setProductAddInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
    }
  }

  onSubmitProductAddForm(e) {
    e.preventDefault();

    try {
      this.$model.addProduct();

      this.$view.renderProductAdd(this.$model.productList);
    } catch (e) {
      alert(e);
    }
  }
}
export default VendingMachineController;
