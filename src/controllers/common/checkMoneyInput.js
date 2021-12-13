import { isPositiveInteger } from "./isPositiveInteger.js";

// 입력된 돈이 조건에 맞는지 확인
// 조건: 자연수이며 10으로 나누어 떨어져야 함
const isValidMoney = money => {
  return (
    money !== "" && isPositiveInteger(money) && parseInt(money, 10) % 10 === 0
  );
};

export { isValidMoney };
