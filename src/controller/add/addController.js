import AddView from '../../view/add/addView.js';
import { isValidProductInput } from '../../utils/validator.js';
import { showError } from '../../utils/error.js';

export default class AddController {
  constructor() {
    this.addView = new AddView();
  }

  init() {
    this.addView.init();

    this.addView.renderAddTab();
    this.addView.selectAddTabDOMS();
    this.attachAddTabEvents();
  }

  attachAddTabEvents() {
    this.addView.$productAddForm.addEventListener('submit', this.handleAddItem.bind(this));
  }

  handleAddItem(e) {
    e.preventDefault();

    const name = this.addView.$productNameInput.value;
    const price = this.addView.$productPriceInput.value;
    const quantity = this.addView.$productQuantityInput.value;

    if (isValidProductInput(name, price, quantity)) {
      // console.log(name, price, quantity);

      return true;
    }

    return showError();
  }
}
