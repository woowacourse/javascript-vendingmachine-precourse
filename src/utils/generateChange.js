/* global MissionUtils */

export default function generateChange(chargeAmount) {
  let remain = chargeAmount;
  const change = { '500': 0, '100': 0, '50': 0, '10': 0 };

  while (remain > 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

    if (remain - randomCoin >= 0) {
      remain -= randomCoin;
      change[randomCoin.toString()] = change[randomCoin.toString()] + 1;
    }
  }

  return change;
}
