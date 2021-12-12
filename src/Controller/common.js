const resetTable = (table) => {
  while (table.children.length > 1) {
    table.removeChild(table.lastChild);
  }
};

const getMoneySum = (coin) => {
  let sum = 0;
  const coins = [500, 100, 50, 10];
  coin.forEach((count, index) => {
    sum += count * coins[index];
  });
  return sum;
};

const printValue = (value) => {
  let print = "";
  if (+value > 0) print = value;
  return print;
};

const printCount = (value) => {
  return `${value}개`;
};

const checkEmpty = (value) => value.trim().length > 0;
const checkInteger = (value) => Number.isInteger(+value);
const checkOverHundred = (value) => +value >= 100;
const checkTenTimes = (value) => +value % 10 === 0;
const checkOverZero = (value) => +value > 0;
const checkUnderZero = (value) => +value > 10;
const getIndex = (value) => {
  let index = 0;
  if (value === 500) index = 0;
  if (value === 100) index = 1;
  if (value === 50) index = 2;
  if (value === 10) index = 3;
  return index;
};

const getValue = (index) => {
  let money = 0;
  if (index === 0) money = 500;
  if (index === 1) money = 100;
  if (index === 2) money = 50;
  if (index === 3) money = 10;
  return money;
};

export {
  resetTable,
  getMoneySum,
  printValue,
  printCount,
  checkEmpty,
  checkInteger,
  checkOverHundred,
  checkTenTimes,
  checkOverZero,
  checkUnderZero,
  getIndex,
  getValue,
};
