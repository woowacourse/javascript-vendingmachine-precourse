import { PRODUCT_MANAGE, PRODUCT_MANAGE_TABLE } from "../constants/constants.js";
import { createTd } from "../view/createDOM.js";

export default class ProductManage {
    constructor() {
      const itemClass = [
        PRODUCT_MANAGE_TABLE.NAME,
        PRODUCT_MANAGE_TABLE.PRICE,
        PRODUCT_MANAGE_TABLE.QUANTITY,
      ];
        this.addProductList(itemClass);
        this.loadLocalStorage(itemClass);
    }

    addProductList(itemClass) {
        const $addButton = document.querySelector(`#${PRODUCT_MANAGE.ADD_BUTTON_ID}`);
        const $name = document.querySelector(`#${PRODUCT_MANAGE.NAME_ID}`);
        const $price = document.querySelector(`#${PRODUCT_MANAGE.PRICE_ID}`);
        const $quantity = document.querySelector(`#${PRODUCT_MANAGE.QUANTITY_ID}`);

        $addButton.addEventListener('click', e => {
          e.preventDefault();
          const addValue = [$name.value, $price.value, $quantity.value];

          createTd(PRODUCT_MANAGE_TABLE.CLASS, itemClass, addValue);
          this.setLocalStorage(...addValue);
        });
    };

    setLocalStorage(nameValue, priceValue, quantityValue) {
      let storeInfo = JSON.parse(localStorage.getItem("productList"));
      const product = [nameValue, priceValue, quantityValue];

      console.log(storeInfo);
      storeInfo = storeInfo !== null ? storeInfo : [];
      storeInfo.push(product);
      localStorage.setItem("productList", JSON.stringify(storeInfo));
    }

    loadLocalStorage(itemClass) {
      let storeInfo = JSON.parse(localStorage.getItem("productList"));

      storeInfo.forEach((list) => {
        createTd(PRODUCT_MANAGE_TABLE.CLASS, itemClass, list);
      });
    }
};
