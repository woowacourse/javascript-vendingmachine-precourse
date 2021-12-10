import {
  blankInputException,
  outRangeProductPriceInputException,
  outRangeInputException,
  noIntegerException,
  notMultipleOfTenException,
  duplicatedProductException,
} from './exceptions.js';

const getProductInputValue = () => {
  return {
    productNameInput: document.getElementById('product-name-input').value,
    productPriceInput: Number(
      document.getElementById('product-price-input').value
    ),
    productQuantityInput: Number(
      document.getElementById('product-quantity-input').value
    ),
  };
};

export const getProductInput = () => {
  const product = getProductInputValue();

  if (
    blankInputException(product.productNameInput) ||
    duplicatedProductException(product.productNameInput) ||
    outRangeProductPriceInputException(product.productPriceInput) ||
    noIntegerException(product.productPriceInput) ||
    notMultipleOfTenException(product.productPriceInput) ||
    outRangeInputException(product.productQuantityInput) ||
    noIntegerException(product.productQuantityInput)
  ) {
    return null;
  }

  return product;
};

export const getVendingMachineChargeInput = () => {
  const vendingMachineChargeInput = Number(
    document.getElementById('vending-machine-charge-input').value
  );

  if (
    outRangeInputException(vendingMachineChargeInput) ||
    noIntegerException(vendingMachineChargeInput) ||
    notMultipleOfTenException(vendingMachineChargeInput)
  ) {
    return null;
  }

  return vendingMachineChargeInput;
};
