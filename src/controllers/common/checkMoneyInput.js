import { isPositiveInteger } from "./isPositiveInteger.js";

const isValidMoney = money => {
  return (
    money !== "" && isPositiveInteger(money) && parseInt(money, 10) % 10 === 0
  );
};

export { isValidMoney };
