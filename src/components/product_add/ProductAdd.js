import Component from "../root/Component.js";
import InputForm from "./InputForm.js";
import ProductStatus from "./ProductStatus.js";

import API from "../../libs/api.js";

export default class ProductAdd extends Component {
  setup() {
    this.$state;
    this.callAPI = new API();
    this.initCallAPI();
    console.log("ProductAdd", this);
  }

  initCallAPI() {
    this.$state = this.callAPI.getVendingMachine();
  }

  template() {
    return `
      <div id="input-form"></div>
      <div id="product-status"></div>
    `;
  }

  mounted() {
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
    const payload = { products: [...this.$state.products, newProduct] };
    this.callAPI.setProducts(payload);
    this.setState(payload);
  }
}
