import Component from "../root/Component.js";
import InputForm from "./InputForm.js";

export default class ProductAdd extends Component {
  setup() {
    this.$state = {
      products: [],
    };
    console.log("ProductAdd", this);
  }

  template() {
    return `
      <div id="input-form"></div>
      <div id="product-status">
        <h3>상품 현황</h3>
        <table border="1px solid">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          <thdead>
          <tbody>
            <tr>
              <td>111</td>
              <td>22</td>
              <td>333</td>
            <tr>
          </tbody>
        </table>
      </div>
    `;
  }

  mounted() {
    console.log("add this", this);
    const {
      addProduct,
      $state: { products },
    } = this;
    const $inputForm = document.querySelector("#input-form");

    new InputForm($inputForm, {
      addProduct: addProduct.bind(this),
      products,
    });
  }

  addProduct(newProduct) {
    this.setState({ products: [...this.$state.products, newProduct] });
  }
}
