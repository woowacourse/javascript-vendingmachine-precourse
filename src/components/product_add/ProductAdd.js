import Component from "../root/Component.js";
import InputForm from "./InputForm.js";
import ProductStatus from "./ProductStatus.js";

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
      <div id="product-status"></div>
    `;
  }

  mounted() {
    console.log("add this", this);
    const {
      addProduct,
      $state: { products },
    } = this;
    const $inputForm = document.querySelector("#input-form");
    const $productStatus = document.querySelector("#product-status");

    new InputForm($inputForm, {
      addProduct: addProduct.bind(this),
      products,
    });

    new ProductStatus($productStatus, { products });
  }

  addProduct(newProduct) {
    this.setState({ products: [...this.$state.products, newProduct] });
  }
}
