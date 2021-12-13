import AddView from '../../view/add/addView.js';
import { isValidProductInput } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';

export default class AddController {
  constructor(appModel) {
    this.addView = new AddView();
    this.appModel = appModel;
  }

  init() {
    this.addView.init();

    this.addView.renderAddTab(this.appModel.products, this.appModel.addTabInput);
    this.addView.selectAddTabDOMS();
    this.attachAddTabEvents();
  }

  attachAddTabEvents() {
    this.addView.$productAddForm.addEventListener('submit', this.handleAddItem.bind(this));
    this.addView.$productAddForm.addEventListener('input', this.handleChangeInput.bind(this));
  }

  handleAddItem(e) {
    e.preventDefault();
    const [name, price, quantity] = this.getInputValue();

    if (isValidProductInput(name, price, quantity, this.appModel.products)) {
      this.appModel.addProduct({ name, price, quantity });
      this.addView.renderProduct(name, price, quantity);

      return true;
    }
    return showError();
  }

  getInputValue() {
    const name = this.addView.$productNameInput.value;
    const price = this.addView.$productPriceInput.value;
    const quantity = this.addView.$productQuantityInput.value;

    return [name, price, quantity];
  }

  handleChangeInput(e) {
    const key = e.target.id.split('-')[1];
    const { value } = e.target;

    this.appModel.setAddTabInput(key, value);
  }
}
