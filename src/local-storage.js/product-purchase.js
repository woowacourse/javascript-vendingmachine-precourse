export const saveAmountOfMoneyToStorage = (moneyChargeInputValue) => {
  let moneychargedAmount = {}; // 추가할 값

  moneychargedAmount.value = moneyChargeInputValue;

  // localStorage 저장된 값을 분해해서
  let prevChargedAmount = JSON.parse(
    localStorage.getItem('moneyChargedAmount')
  );
  if (prevChargedAmount === null) {
    prevChargedAmount = [];
  }

  let finalChargedAmountList = prevChargedAmount.concat(moneychargedAmount);

  localStorage.setItem(
    'moneyChargedAmount',
    JSON.stringify(finalChargedAmountList)
  );
};
