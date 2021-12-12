import Component from "../root/Component.js";
import setTableStyled from "../../style/setTableStyled.js";

export default class ProductPurchase extends Component {
  setup() {
    console.log("ProductPurchase", this);
  }

  template() {
    return `
      <div>
        <h3>금액 투입</h3>
        <form>
          <input type="number" placeholder="투입할 금액"/>
          <button>투입하기</button>
        </form>
        <p>투입한 금액: <span>000</span></p>
      </div>
      <div>
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>예시</td>
              <td>1000</td>
              <td>10</td>
              <td><button>구매하기</button></td>
            </tr>
            <tr>
              <td>테스트</td>
              <td>1000</td>
              <td>10</td>
              <td><button>구매하기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>잔돈</h3>
        <button>반환하기</button>
        <table>
          <thead>
            <tr><th>동전</th><th>개수</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="vending-machine-coin-500-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="vending-machine-coin-100-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="vending-machine-coin-50-quantity">
                00
              </td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="vending-machine-coin-10-quantity">
                00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  mounted() {
    setTableStyled(this.$target);
  }
}
