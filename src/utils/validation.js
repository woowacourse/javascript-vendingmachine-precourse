const trim = (input) => {
  return input.trim();
};

const isValidName = (input) => {
  const result = trim(input);
  if (result === "") {
    return false;
  }

  return true;
};

const isVaildPrice = (input) => {
  const result = parseInt(trim(input), 10);

  if (typeof result === "number" && result >= 100 && result % 10 === 0) {
    return true;
  }

  return false;
};

const isValidQuantity = (input) => {
  const result = parseInt(trim(input), 10);

  if (typeof result === "number" && result > 0) {
    return true;
  }

  return false;
};

const isValidCoin = (input) => {
  const result = parseInt(trim(input), 10);

  if (typeof result === "number" && result >= 10 && result % 10 === 0) {
    return true;
  }

  return false;
};

export { trim, isValidName, isVaildPrice, isValidQuantity, isValidCoin };
