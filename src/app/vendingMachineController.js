import { DOM, INPUT_TYPE } from '../lib/constants.js';
import { $ } from '../lib/utils.js';

/** Controller */
class VendingMachineController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;

    this.initView();
    this.registerTabEventHandler();
    this.registerProductAddMenuInputEventHandler();
    this.registerProductAddFormSubmitHandler();
  }

  initView() {
    this.$view.renderMain(this.$model);
  }

  registerTabEventHandler() {
    this.$view.tabMenuSection.addEventListener('click', this.onClickTabMenuSection.bind(this));
  }

  registerProductAddMenuInputEventHandler() {
    $(DOM.PRODUCT_ADD_FORM).addEventListener('input', this.onInputProductAddForm.bind(this));
  }

  registerProductAddFormSubmitHandler() {
    $(DOM.PRODUCT_ADD_FORM).addEventListener('submit', this.onSubmitProductAddForm.bind(this));
  }

  onClickTabMenuSection(e) {
    const {
      target: { textContent },
    } = e;

    this.$model.setTab(textContent);
    this.$view.renderMain(this.$model);
  }

  onInputProductAddForm(e) {
    const {
      target: { value, id, type },
    } = e;
    if (type === INPUT_TYPE.TEXT) {
      this.$model.setProductAddInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
    }
    if (type === INPUT_TYPE.NUMBER) {
      this.$model.setProductAddInputsValue((prev) => ({ ...prev, [`${id}`]: value }));
    }
  }

  onSubmitProductAddForm(e) {
    e.preventDefault();

    this.$model.addProduct();

    this.$view.renderProductAdd(this.$model.productList);
  }
}
export default VendingMachineController;
