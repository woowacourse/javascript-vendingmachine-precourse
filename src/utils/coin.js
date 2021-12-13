const getRandomChargeCoins = (charge) => {
  const chargeCoins = {
    coin500: 0,
    coin100: 0,
    coin50: 0,
    coin10: 0,
  };
  let money = Number(charge);
  let coinBox = [500, 100, 50, 10];

  while (money) {
    coinBox = getNewCoinBox(coinBox, money);
    const pickCoin = getPickRandomCoin(coinBox);
    money -= pickCoin;

    switch (pickCoin) {
      case 500:
        chargeCoins.coin500++;
        break;
      case 100:
        chargeCoins.coin100++;
        break;
      case 50:
        chargeCoins.coin50++;
        break;
      case 10:
        chargeCoins.coin10++;
        break;
      default:
        break;
    }
  }

  return chargeCoins;
};

const getNewCoinBox = (coinBox, money) => {
  return coinBox.filter((coin) => coin <= money);
};

const getPickRandomCoin = (coinBox) =>
  MissionUtils.Random.pickNumberInList(coinBox);

const getSumCoins = ({ prevCoins, newCoins }) => {
  const coins = {};
  console.log("prevCoins:", prevCoins);
  console.log("newCoins:", newCoins);
  for (let coin in prevCoins) {
    coins[coin] = prevCoins[coin] + newCoins[coin];
  }

  return coins;
};

export { getRandomChargeCoins, getSumCoins, getNewCoinBox };
