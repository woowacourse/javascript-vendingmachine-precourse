import Component from "../root/Component.js";
import { getNewCoinBox } from "../../utils/coin.js";

export default class CoinReturnStatus extends Component {
  setup() {
    console.log("CoinReturnStatus", this);
  }

  template() {
    return `
        <h3>잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <table>
          <thead>
            <tr><th>동전</th><th>개수</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="coin-500-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="coin-100-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="coin-50-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="coin-10-quantity">
                00
              </td>
            </tr>
          </tbody>
        </table>
    `;
  }

  mounted() {
    const { chargeAmount, coins, purchaseChargeAmount } = this.$props;

    // console.log(chargeAmount, coins, purchaseChargeAmount);
    const result = this.getMinimumReturnedCoins({
      currentCoins: { ...coins },
      purchaseChargeAmount,
      chargeAmount,
    });
    console.log("result", result);
  }

  getMinimumReturnedCoins({
    currentCoins,
    purchaseChargeAmount,
    chargeAmount,
  }) {
    const returnedCoins = {
      coin500: 0,
      coin100: 0,
      coin50: 0,
      coin10: 0,
    };

    let coinBox = [500, 100, 50, 10];

    while (coinBox.length) {
      if (purchaseChargeAmount === 0) break;

      coinBox = getNewCoinBox(coinBox, purchaseChargeAmount);
      const pickCoin = coinBox[0];

      if (this.isNoneCoin(pickCoin, currentCoins)) {
        coinBox.shift();
        continue;
      }

      purchaseChargeAmount -= pickCoin;
      chargeAmount -= pickCoin;

      this.setCoinsAmount({ pickCoin, returnedCoins, currentCoins });
    }

    return {
      coins: currentCoins,
      purchaseChargeAmount,
      returnedCoins,
      chargeAmount,
    };
  }

  setCoinsAmount({ pickCoin, returnedCoins, currentCoins }) {
    switch (pickCoin) {
      case 500:
        returnedCoins.coin500++;
        currentCoins.coin500--;
        return;
      case 100:
        returnedCoins.coin100++;
        currentCoins.coin100--;
        return;
      case 50:
        returnedCoins.coin50++;
        currentCoins.coin50--;
        return;
      case 10:
        returnedCoins.coin10++;
        currentCoins.coin10--;
        return;
      default:
        return;
    }
  }

  isNoneCoin(pickCoin, currentCoins) {
    if (pickCoin === 500 && currentCoins.coin500 === 0) {
      return true;
    }
    if (pickCoin === 100 && currentCoins.coin100 === 0) {
      return true;
    }
    if (pickCoin === 50 && currentCoins.coin50 === 0) {
      return true;
    }
    if (pickCoin === 10 && currentCoins.coin10 === 0) {
      return true;
    }

    return false;
  }
}
