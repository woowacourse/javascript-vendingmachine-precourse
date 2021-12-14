const getRandomCoin = (list) => {
  return MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
};

export const getRandomCoinList = (chargeInputValue) => {
  const randomCoinList = { 500: 0, 100: 0, 50: 0, 10: 0 };
  let sum = 0;

  while (chargeInputValue !== sum) {
    const number = getRandomCoin([500, 100, 50, 10]);

    if (sum + number > chargeInputValue) {
      continue;
    }

    randomCoinList[number] += 1;
    sum += number;
  }

  return randomCoinList;
};
