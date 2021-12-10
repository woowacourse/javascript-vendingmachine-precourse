import { ID } from './constants/index.js';
import { $ } from './utils/selector.js';
import { mainTemplate } from './utils/template/mainTemplate.js';
import ProductContainer from './components/product/ProductContainer.js';

class App {
  constructor($target) {
    this.$target = $target;

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = mainTemplate();
  }

  selectDom() {
    this.$buttonContainer = $(`#${ID.MENU_BUTTON_CONTAINER}`);
    this.$resultContainer = $(`#${ID.RESULT_CONTAINER}`);
  }

  addEvent() {
    this.$buttonContainer.addEventListener(
      'click',
      this.clickButton.bind(this)
    );
  }

  clickButton(e) {
    const { id } = e.target;

    if (id === ID.PRODUCT_ADD_MENU) {
      new ProductContainer(this.$resultContainer);
    }
  }
}

export default App;
