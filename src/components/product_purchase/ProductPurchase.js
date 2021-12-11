import Component from "../root/Component.js";

export default class ProductPurchase extends Component {
  setup() {
    console.log("ProductPurchase", this);
  }

  template() {
    return `ProductPurchase`;
  }
}
