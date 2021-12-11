import Component from "../root/Component.js";
import { isValidProduct } from "../../utils/validation.js";

export default class InputForm extends Component {
  setup() {
    console.log("Form", this);
  }

  template() {
    return `
        <h3>상품 추가하기</h3>
        <form>
            <input id="product-name-input" type="text" placeholder="상품명"/>
            <input id="product-price-input" type="number" placeholder="가격"/>
            <input id="product-quantity-input" type="number" placeholder="수량"/>
            <button id="product-add-button">추가하기</button>
        </form>
    `;
  }

  mounted() {
    this.addEvent("submit", this.$target, (e) => this.onSubmitHandler(e));
  }

  onSubmitHandler(e) {
    e.preventDefault();

    console.log(e, this);
    const { addProduct, products } = this.$props;
    const [name, price, quantity] = e.target;

    const product = {
      name: name.value.trim(),
      price: price.value,
      quantity: quantity.value,
    };

    if (isValidProduct(product, products)) {
      addProduct({ ...product });
    }
  }
}
