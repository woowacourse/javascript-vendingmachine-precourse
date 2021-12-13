export default function addProduct() {
  const ChangeInput = document.querySelector('#vending-machine-charge-input');

  let change = ChangeInput.value;
  let amount = change;
  let coin_500 = 0;
  let coin_100 = 0;
  let coin_50 = 0;
  let coin_10 = 0;
  while (change > 0) {
    const randomCoin = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);
    if (randomCoin > change) {
      continue;
    }
    change -= randomCoin;

    if (randomCoin == 500) {
      coin_500 += 1;
    } else if (randomCoin == 100) {
      coin_100 += 1;
    } else if (randomCoin == 50) {
      coin_50 += 1;
    } else if (randomCoin == 10) {
      coin_10 += 1;
    }
    console.log(change);
  }
  console.log(change);
  return [amount, coin_500, coin_100, coin_50, coin_10];
}
