import { getData, setData } from "../utils/localStorage.js";

export default class ProductAddMenuController {
  initialize() {
    this.products = getData("products");
  }
}
