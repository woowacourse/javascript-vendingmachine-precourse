export const saveCharegedAmountToStorage = (coinChargeInputValue) => {
  let chargedAmount = {}; // 추가할 값

  chargedAmount.value = coinChargeInputValue;

  // localStorage 저장된 값을 분해해서
  let prevChargedAmount = JSON.parse(localStorage.getItem('chargedAmount'));
  if (prevChargedAmount === null) {
    prevChargedAmount = [];
  }

  let finalChargedAmountList = prevChargedAmount.concat(chargedAmount);

  localStorage.setItem('chargedAmount', JSON.stringify(finalChargedAmountList));
};
