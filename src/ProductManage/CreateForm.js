import { BUTTON, PRODUCT } from '../common/constants.js';
import {
  createButton,
  createForm,
  createNumberInput,
} from '../common/CreateElement.js';

function createProductAddTextInput() {
  const [id, placeholder] = ['product-name-input', PRODUCT.NAME];
  const productAddTextInput = createNumberInput(id, placeholder);
  productAddTextInput.setAttribute('type', 'text');

  return productAddTextInput;
}

function createProductAddNumberInputs() {
  const inputAttrs = [
    ['product-price-input', PRODUCT.PRICE],
    ['product-quantity-input', PRODUCT.QUANTITY],
  ];
  const productAddNumberInputs = inputAttrs.map((attr) => {
    const [id, placeholder] = attr;

    return createNumberInput(id, placeholder);
  });

  return productAddNumberInputs;
}

function createProductAddInputs() {
  const productAddTextInput = createProductAddTextInput();
  const productAddNumberInputs = createProductAddNumberInputs();
  const productAddInputs = [productAddTextInput, ...productAddNumberInputs];

  return productAddInputs;
}

function createProductAddButton() {
  const [id, innerText] = ['product-add-button', BUTTON.ADD];
  const productAddButton = createButton(id, innerText);

  return productAddButton;
}

export default function createProductAddForm() {
  const productAddForm = createForm();
  const productAddInputs = createProductAddInputs();
  productAddInputs.forEach((input) => productAddForm.append(input));
  const productAddButton = createProductAddButton();
  productAddForm.append(productAddButton);

  return productAddForm;
}
