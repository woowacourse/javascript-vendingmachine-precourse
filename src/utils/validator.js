export function isNotEmpty(input) {
  return input.replace(/ /gi, '') !== '';
}

function isNumber(input) {
  return !Number.isNaN(input);
}

function isOverZero(input) {
  return input > 0;
}

function isMultipleOfTen(input) {
  return input % 10 === 0;
}

function isMoreThanHundred(input) {
  return input >= 100;
}

export function isValidPrice(input) {
  let numInput = Number(input);

  return (
    isNotEmpty(input) &&
    isNumber(numInput) &&
    isMoreThanHundred(numInput) &&
    isMultipleOfTen(numInput)
  );
}

export function isValidQuantity(input) {
  let numInput = Number(input);

  return isNotEmpty(input) && isNumber(numInput) && isOverZero(numInput);
}

export function isValidMoney(input) {
  let numInput = Number(input);

  return (
    isNotEmpty(input) && isNumber(numInput) && isOverZero(numInput) && isMultipleOfTen(numInput)
  );
}
