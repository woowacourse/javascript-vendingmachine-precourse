import { ID, TAB_MENU } from '../utils/constants.js';
import { getProductMangeListTemplate } from '../utils/template/productAddTemplate.js';
import { isValidProductAddData } from '../utils/validation/productAddValidation.js';

class ProductAddController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === ID.PRODUCT_ADD_MENU) {
      this.initScreen();
    }
  }

  initScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showProductAddScreen(tabMenu[TAB_MENU.PRODUCT_ADD_MENU]);

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$product_name_input = document.getElementById(ID.PRODUCT_NAME_INPUT);
    this.$product_price_input = document.getElementById(ID.PRODUCT_PRICE_INPUT);
    this.$product_quantity_input = document.getElementById(ID.PRODUCT_QUANTITY_INPUT);
    this.$product_status_table = document.getElementById(ID.PRODUCT_STATUS_TABLE);
    this.$product_add_form = document.getElementById(ID.PRODUCT_ADD_FORM);
  }

  initEventListener() {
    this.triggerProductAddFormSubmitEvent();
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.initScreen();
  }

  productAddSubmitLogic(name, price, quantity) {
    const tabMenu = this.vendingMachine.getLocalStorage();

    this.changeLocalStorageProductAddMenuValue(tabMenu, name, price, quantity);
    this.renderProductAddMenuContent(tabMenu);
  }

  changeLocalStorageProductAddMenuValue = (tabMenu, name, price, quantity) => {
    tabMenu[TAB_MENU.PRODUCT_ADD_MENU] = [
      ...tabMenu[TAB_MENU.PRODUCT_ADD_MENU],
      { name, price, quantity },
    ];

    this.vendingMachine.setLocalStorage(tabMenu);
  };

  renderProductAddMenuContent(tabMenu) {
    const productManageListTemplate = getProductMangeListTemplate(
      tabMenu[TAB_MENU.PRODUCT_ADD_MENU]
    );
    this.$product_status_table.innerHTML = productManageListTemplate;
  }

  initProductAddInputValue() {
    this.$product_name_input.value = '';
    this.$product_price_input.value = '';
    this.$product_quantity_input.value = '';
  }

  triggerProductAddFormSubmitEvent() {
    this.$product_add_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const productName = this.$product_name_input.value;
      const productPrice = this.$product_price_input.value;
      const productQuantity = this.$product_quantity_input.value;

      if (isValidProductAddData(productName, productPrice, productQuantity)) {
        this.initProductAddInputValue();
        this.productAddSubmitLogic(productName, productPrice, productQuantity);
      }
    });
  }
}

export default ProductAddController;
