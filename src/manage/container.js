import {
    MANAGE_TAB_ID as ID,
    MANAGE_TAB_CLASS as CLASS,
    EMPTY,
    LOACL_STORAGE as LOCAL,
    TABLE_CLASS,
    ERROR_MESSAGE,
} from "../storage/constant.js";
import { Product } from "./product.js";
import { appendTable, clearInput } from "../storage/createElement.js";
import {
    appendLocalStorage,
    getLocalStorage,
} from "../storage/localStorage.js";
import {
    checkProductDuplicate,
    checkNumContainDivideTen,
    checkNumExceptDivedeTen,
} from "../storage/validation.js";
export default function ManageContainer() {
    const $name = document.getElementById(ID.NAME_INPUT);
    const $price = document.getElementById(ID.PRICE_INPUT);
    const $quantity = document.getElementById(ID.QUANTITY_INPUT);

    this.init = () => {
        setButtonListener();
    };

    const setButtonListener = () => {
        const $addButton = document.getElementById(ID.ADD_BUTTON);
        $addButton.addEventListener("click", function (e) {
            e.preventDefault();
            const productInfo = getProductInfo();
            const product = new Product(
                productInfo.$nameVal,
                productInfo.$priceVal,
                productInfo.$quantityVal,
            );
            appendTable(
                TABLE_CLASS.PRODUCT_TABLE,
                CLASS.EACH_ITEM,
                product,
                CLASS.MANAGE_NAME,
                CLASS.MANAGE_PRICE,
                CLASS.MANAGE_QUANTITY,
            );
            appendLocalStorage(LOCAL.PRODUCT, product);
            clearInput($name, $price, $quantity);
        });
    };

    const getProductInfo = () => {
        // 여기서 validation 검사 해야 함.
        const $nameVal = checkProductDuplicate($name.value);
        const $priceVal = checkNumContainDivideTen($price.value, true);
        const $quantityVal = checkNumExceptDivedeTen($quantity.value);

        return { $nameVal, $priceVal, $quantityVal };
    };

    this.init();
}
