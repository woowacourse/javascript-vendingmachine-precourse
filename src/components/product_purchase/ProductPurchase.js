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
          <input id="charge-input" type="number" placeholder="투입할 금액"/>
          <button id="charge-button">투입하기</button>
        </form>
        <p>투입한 금액: <span id="charge-amount">000</span></p>
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
            <tr class="product-purchase-item">
              <td class="product-purchase-name" data-product-name="에시">예시</td>
              <td class="product-purchase-price" data-product-price="1000">1000</td>
              <td class="product-purchase-quantity" data-product-quantity="10">10</td>
              <td><button class="purchase-button">구매하기</button></td>
            </tr>
            <tr class="product-purchase-item">
              <td class="product-purchase-name" data-product-name="테스트">테스트</td>
              <td class="product-purchase-price" data-product-price="1000">1000</td>
              <td class="product-purchase-quantity" data-product-quantity="10">10</td>
              <td><button class="purchase-button">구매하기</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
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
      </div>
    `;
  }

  mounted() {
    setTableStyled(this.$target);
  }
}
