import { clearArea, clearInputValue } from "../Model/utils.js";
import { makeElement, makeTableForm, makeTableRow } from "./template.js";
import { PRODUCT_MANAGE } from "../constant/vendingMachine.js";
import Product from "../Model/Product.js";

export default class ProductAddView {
  constructor(container) {
    this.container = container;
    this.product = new Product();
  }

  render() {
    clearArea(this.container);
    this.renderInputForm();
    this.renderProductTable();
    this.bindInputs();
    this.bindAddProductEvent();
  }

  bindInputs() {
    this.productNameInput = document.getElementById(PRODUCT_MANAGE.PRODUCT_NAME.ID);
    this.productPriceInput = document.getElementById(PRODUCT_MANAGE.PRICE.ID);
    this.productQuantityInput = document.getElementById(PRODUCT_MANAGE.QUANTITY.ID);
  }

  bindAddProductEvent() {
    const addButton = document.getElementById(PRODUCT_MANAGE.ADD_BUTTON.ID);
    addButton.addEventListener("click", () => this.addProduct());
  }

  renderInputForm() {
    const inputFormArea = makeElement({ tag: "form" });
    const inputFormTitle = makeElement({
      tag: "h3",
      innerText: PRODUCT_MANAGE.ADD_PRODUCT_TEXT,
    });
    const productNameInput = makeElement({
      tag: "input",
      type: "text",
      id: PRODUCT_MANAGE.PRODUCT_NAME.ID,
      placeholder: PRODUCT_MANAGE.PRODUCT_NAME.TEXT,
    });
    const productPriceInput = makeElement({
      tag: "input",
      type: "number",
      id: PRODUCT_MANAGE.PRICE.ID,
      placeholder: PRODUCT_MANAGE.PRICE.TEXT,
    });
    const productQuantityInput = makeElement({
      tag: "input",
      type: "number",
      id: PRODUCT_MANAGE.QUANTITY.ID,
      placeholder: PRODUCT_MANAGE.QUANTITY.TEXT,
    });
    const productAddButton = makeElement({
      tag: "button",
      type: "button",
      id: PRODUCT_MANAGE.ADD_BUTTON.ID,
      innerText: PRODUCT_MANAGE.ADD_BUTTON.TEXT,
    });

    inputFormArea.append(
      inputFormTitle,
      productNameInput,
      productPriceInput,
      productQuantityInput,
      productAddButton
    );
    this.container.append(inputFormArea);
  }

  renderProductTable() {
    const productTableTitle = makeElement({ tag: "h3", innerText: PRODUCT_MANAGE.TABLE_TEXT });
    const tableArea = makeTableForm(PRODUCT_MANAGE.COLUMNS);
    this.container.append(productTableTitle, tableArea);
    this.updateProductList();
  }

  getNewProductData() {
    const inputs = [this.productNameInput, this.productPriceInput, this.productQuantityInput];
    const newProduct = inputs.map(input => input.value);
    clearInputValue(inputs);
    return newProduct;
  }

  addProduct() {
    const newProduct = this.getNewProductData();
    if (this.product.checkValidNewProductData(newProduct)) {
      this.product.addNewProduct(newProduct);
      this.updateProductList();
    }
  }

  updateProductList() {
    const tableBodyArea = document.querySelector("tbody");
    clearArea(tableBodyArea);
    const products = this.product.getProductData();
    if (products === null) return;

    products.forEach(product => {
      const rowData = this.product.changeTableRowFormat(PRODUCT_MANAGE.NEW_PRODUCT_COLUMNS_ID, {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
      const tableRow = makeTableRow(rowData, PRODUCT_MANAGE.NEW_PRODUCT_ID);
      tableBodyArea.appendChild(tableRow);
    });
  }
}
