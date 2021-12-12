import { clearArea } from "../Model/utils.js";
import { makeElement, makeTableForm, makeTableRow } from "./template.js";
import { PRODUCT_MANAGE } from "../constant/vendingMachine.js";
import Product from "../Model/Product.js";

const productId = [
  PRODUCT_MANAGE.NEW_PRODUCT_NAME_ID,
  PRODUCT_MANAGE.NEW_PRODUCT_PRICE_ID,
  PRODUCT_MANAGE.NEW_PRODUCT_QUANTITY_ID,
];

const updateProductList = () => {
  const tableBodyArea = document.querySelector("tbody");
  tableBodyArea.innerText = "";
  const products = Product.getProductData();
  if (products === null) return;
  products.forEach(product => {
    makeTableRow(
      tableBodyArea,
      Product.changeTableRowFormat(productId, {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      }),
      PRODUCT_MANAGE.NEW_PRODUCT_ID
    );
  });
};

const addProduct = () => {
  const newProduct = Product.getNewProductData();
  if (Product.checkValidNewProductData(newProduct)) {
    Product.addNewProduct(newProduct);
    updateProductList();
  }
};

const renderInputForm = container => {
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
  productAddButton.addEventListener("click", () => addProduct());

  inputFormArea.append(
    inputFormTitle,
    productNameInput,
    productPriceInput,
    productQuantityInput,
    productAddButton
  );
  container.append(inputFormArea);
};

const renderProductTable = container => {
  const productTableTitle = makeElement({ tag: "h3", innerText: PRODUCT_MANAGE.TABLE_TEXT });
  const tableArea = makeTableForm(PRODUCT_MANAGE.COLUMNS);
  container.append(productTableTitle, tableArea);
  updateProductList();
};

const productAddView = container => {
  clearArea(container);
  renderInputForm(container);
  renderProductTable(container);
};

export default productAddView;
