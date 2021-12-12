import Component from "../root/Component.js";
import setTableStyled from "../../style/setTableStyled.js";

export default class CoinStatus extends Component {
  setup() {
    console.log("CoinStatus", this);
  }

  template() {
    const {
      coins: { coin500, coin100, coin50, coin10 },
    } = this.$props;

    return `
    <h3>자판기가 보유한 동전</h3>
        <table>
          <thead>
            <tr><th>동전</th><th>개수</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="vending-machine-coin-500-quantity">
                ${this.getCoinQuantityText(coin500)}
              </td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="vending-machine-coin-100-quantity">
                ${this.getCoinQuantityText(coin100)}
              </td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="vending-machine-coin-50-quantity">
                ${this.getCoinQuantityText(coin50)}
              </td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="vending-machine-coin-10-quantity">
                ${this.getCoinQuantityText(coin10)}
              </td>
            </tr>
          </tbody>
        </table>
    `;
  }

  mounted() {
    setTableStyled(this.$target);
  }

  getCoinQuantityText(coin) {
    return coin ? `${coin}개` : ``;
  }
}
