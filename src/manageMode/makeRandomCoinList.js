function range(number) {
  let canNumberList = [];
  for (let i = 0; i < number+1; i++){
    canNumberList.push(i);
  }
  return canNumberList;
}
export default function MakeRandomCoinList(money, coinList) {
  const coinUnit = [500, 100, 50, 10];
  for (let i = 0; i < coinList.length - 1; i++){
    let maximum = parseInt(parseInt(money) / coinUnit[i]);
    let newCoin = parseInt(coinList[i].count) + MissionUtils.Random.pickNumberInList(range(maximum));
    coinList[i].count = newCoin;
    money = money % coinUnit[i];
    console.log(coinList);
  }
  coinList[coinList.length - 1].count = money / coinUnit[coinList.length - 1];
  return coinList;
}