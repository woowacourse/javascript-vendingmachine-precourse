const getRandomCoin = () => {
  return MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
};

const countCoin = (coin, coins) => {
  if (coin === 500) {
    coins.fiveHundred += 1;
  } else if (coin === 100) {
    coins.oneHundred += 1;
  } else if (coin === 50) {
    coins.fifty += 1;
  } else if (coin === 10) {
    coins.ten += 1;
  }
};

export const isValidCharge = chargeInput => {
  if (chargeInput === '') {
    alert('공백입니다.');
    return false;
  }
  if (Number(chargeInput) < 10) {
    alert('상품 가격은 10원 이상을 입력해야합니다.');
    return false;
  }
  if (Number(chargeInput % 10 !== 0)) {
    alert('상품 가격이 10원으로 나눠지지 않습니다.');
    return false;
  }
  return true;
};

export const chargeMoney = (chargeInput, coins) => {
  coins.amount += chargeInput;
  while (chargeInput) {
    const coin = getRandomCoin();
    if (coin > chargeInput) {
      continue;
    }
    countCoin(coin, coins);
    chargeInput -= coin;
  }
  return coins;
};
