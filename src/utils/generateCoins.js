/* global MissionUtils */

export default function generateCoins(chargeAmount) {
  let remain = chargeAmount;
  const coins = { '500': 0, '100': 0, '50': 0, '10': 0 };

  while (remain > 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

    if (remain - randomCoin >= 0) {
      remain -= randomCoin;
      coins[randomCoin.toString()] = coins[randomCoin.toString()] + 1;
    }
  }

  return coins;
}
