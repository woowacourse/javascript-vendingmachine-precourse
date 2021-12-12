import Component from "../root/Component.js";
import setTableStyled from "../../style/setTableStyled.js";

export default class ProductStatus extends Component {
  setup() {
    console.log("product status", this);
  }

  template() {
    const { products } = this.$props;

    return `
    <h3>상품 현황</h3>
    <table>
        <thead>
            <tr>
                <th>상품명</th><th>가격</th><th>수량</th>
            </tr>
        </thead>
        <tbody>
            ${products
              .map((product) => {
                const { name, price, quantity } = product;
                return `
                <tr>
                    <td>${name}</td><td>${price}</td><td>${quantity}</td>
                </tr>`;
              })
              .join("")}
        </tbody>
    </table>`;
  }

  mounted() {
    setTableStyled(this.$target);
  }
}
