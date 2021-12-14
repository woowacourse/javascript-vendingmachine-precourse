import { PRODUCT_MANAGE, PRODUCT_MANAGE_TABLE } from "../constants/constants.js";
import { createTd } from "../view/createDOM.js";

export default class ProductManage {
    constructor() {
        this.addProductList();
    }

    addProductList() {
        const $addButton = document.querySelector(`#${PRODUCT_MANAGE.ADD_BUTTON_ID}`);
        const $name = document.querySelector(`#${PRODUCT_MANAGE.NAME_ID}`);
        const $price = document.querySelector(`#${PRODUCT_MANAGE.PRICE_ID}`);
        const $quantity = document.querySelector(`#${PRODUCT_MANAGE.QUANTITY_ID}`);
        const itemClass = [
          PRODUCT_MANAGE_TABLE.NAME,
          PRODUCT_MANAGE_TABLE.PRICE,
          PRODUCT_MANAGE_TABLE.QUANTITY,
        ]

        $addButton.addEventListener('click', e => {
          e.preventDefault();
          const addValue = [$name.value, $price.value, $quantity.value];

          createTd(PRODUCT_MANAGE_TABLE.CLASS, itemClass, addValue);
        })
    };

    setLocalStorage(name, price, quantity) {
      localStorage.setItem();
    }
};
