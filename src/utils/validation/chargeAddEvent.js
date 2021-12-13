export function chargeAddValiate(coin) {
  let result = true;
  if (!coin) {
    alert("추가할 금액을 기입해주세요");
    result = false;
  } else if (Number(coin) - parseInt(Number(coin)) !== 0 || coin <= 0) {
    alert("자연수를 기입해주세요");
    result = false;
  }

  return result;
}

export function renderContainRandomCoin(coins) {
  const contain500Coin = document.querySelector('#vending-machine-coin-500-quantity');
  const contain100Coin = document.querySelector('#vending-machine-coin-100-quantity');
  const contain50Coin = document.querySelector('#vending-machine-coin-50-quantity');
  const contain10Coin = document.querySelector('#vending-machine-coin-10-quantity');
  contain500Coin.innerText = `${coins[0]}개`;
  contain100Coin.innerText = `${coins[1]}개`;
  contain50Coin.innerText = `${coins[2]}개`;
  contain10Coin.innerText = `${coins[3]}개`;
}