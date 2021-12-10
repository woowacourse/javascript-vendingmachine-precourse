import Tap from './Tap.js';
import {
    InputNumber,
    InputText,
    SubTitle,
    ButtonById,
    Table,
    InventoryHeadRow,
    InventoryBodyRow,
} from '../asset/components/index.js';
import { INPUT_ID, INPUT_ITEM, SUB_TITLE_TEXT, BUTTON } from '../asset/constants/index.js';

export default class InventoryTap extends Tap {
    constructor($skeleton) {
        super($skeleton);
        this.$productNameInput = InputText(INPUT_ID.productName, INPUT_ITEM.productName);
        this.$productPriceInput = InputNumber(INPUT_ID.productPrice, INPUT_ITEM.productPrice);
        this.$productQuantityInput = InputNumber(
            INPUT_ID.productQuantity,
            INPUT_ITEM.productQuantity,
        );
        this.$addButton = ButtonById(BUTTON.addProduct.title, BUTTON.addProduct.id);
        this.$inventoryContainer = document.createElement('tbody');
    }

    getAddButton() {
        return this.$addButton;
    }

    getProductName() {
        return this.$productNameInput.value;
    }

    getProductPrice() {
        return this.$productPriceInput.value;
    }

    getProductQuantity() {
        return this.$productQuantityInput.value;
    }

    appendToInventoryContainer($element) {
        this.$inventoryContainer.append($element);
    }

    init() {
        this.hide();
        this.createAddProductForm();
        this.createProductInventory();
    }

    render(products) {
        this.clearProducts();
        products.forEach(({ productName, productPrice, productQuantity }) => {
            this.addProductRow(productName, productPrice, productQuantity);
        });
        this.show();
    }

    clearProducts() {
        this.$inventoryContainer.replaceChildren();
    }

    createAddProductForm() {
        const $wrap = document.createElement('div');

        $wrap.style.marginBottom = '15px';
        $wrap.append(SubTitle(SUB_TITLE_TEXT.addProduct));
        $wrap.append(this.getAddProductFormInput());
        this.appendToApp($wrap);
    }

    getAddProductFormInput() {
        const $inputWrap = document.createElement('div');

        this.$addButton.style.marginLeft = '5px';
        this.$productPriceInput.style.margin = '0 5px';
        $inputWrap.append(this.$productNameInput);
        $inputWrap.append(this.$productPriceInput);
        $inputWrap.append(this.$productQuantityInput);
        $inputWrap.append(this.$addButton);

        return $inputWrap;
    }

    createProductInventory() {
        const $wrap = document.createElement('div');
        const $table = Table();
        const $tHead = document.createElement('thead');

        $tHead.append(InventoryHeadRow());
        $table.append($tHead);
        $table.append(this.$inventoryContainer);
        $wrap.append(SubTitle(SUB_TITLE_TEXT.productInventory));
        $wrap.append($table);
        this.appendToApp($wrap);
    }

    addProductRow(productName, productPrice, productQuantity) {
        this.appendToInventoryContainer(
            InventoryBodyRow(productName, productPrice, productQuantity),
        );
    }
}
