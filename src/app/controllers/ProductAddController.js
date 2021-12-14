import { DATA_MODEL_KEYS, DOM, PRODUCT_ID_LENGTH } from '../../lib/constants.js';
import { $, getRandomNumber, isNotDuplicatedId, isValidProduct } from '../../lib/utils.js';
import { defaultValueGenerators } from '../model/index.js';

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
      this.$model.setProductAddInputsValue(() =>
        defaultValueGenerators[DATA_MODEL_KEYS.PRODUCT_ADD_INPUTS_VALUE]()
      );
      this.$view.mainView.renderProductAdd(
        this.$model.getProductList(),
        this.$model.getProductAddInputsValue()
      );
    } catch (error) {
      alert(error);
    }
  }

  addProduct() {
    if (isValidProduct(this.$model.getProductAddInputsValue())) {
      const newProduct = {
        id: this.generateProductId(this.$model.getProductList()),
        name: this.$model.getProductAddInputValueById(DOM.PRODUCT_NAME_INPUT),
        price: Number(this.$model.getProductAddInputValueById(DOM.PRODUCT_PRICE_INPUT)),
        quantity: Number(this.$model.getProductAddInputValueById(DOM.PRODUCT_QUANTITY_INPUT)),
      };
      this.$model.setProductList([...this.$model.getProductList(), newProduct]);
    }
  }

  generateProductId(productList) {
    while (true) {
      const randomProductId = this.generateRandomProductId();
      if (isNotDuplicatedId(productList, randomProductId)) {
        return randomProductId;
      }
    }
  }

  generateRandomProductId() {
    return [...new Array(PRODUCT_ID_LENGTH)].map(() => getRandomNumber()).join('');
  }
}
export default ProductAddController;
