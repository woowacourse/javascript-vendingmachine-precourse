import { $ } from '../../lib/utils.js';
import { DOM, INPUTS_DEFAULT_VALUE } from '../constants.js';
import VendingMachineUtil from '../util.js';

class ProductAddController {
  constructor({ view, model }) {
    this.$view = view;
    this.$model = model;
  }

  registerEventHandler() {
    $(DOM.PRODUCT_ADD_FORM).addEventListener('input', this.onInputProductAddForm.bind(this));
    $(DOM.PRODUCT_ADD_FORM).addEventListener('submit', this.onSubmitProductAddForm.bind(this));
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
}
export default ProductAddController;
