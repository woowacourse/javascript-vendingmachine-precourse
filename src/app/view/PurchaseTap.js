import Tap from './Tap.js';
import {
    InputNumber,
    SubTitle,
    ButtonById,
    Table,
    CellById,
    SubmitForm,
    PurchaseHeadRow,
    PurchaseBodyRow,
    CoinTable,
    Span,
} from '../asset/components/index.js';
import {
    INPUT_ID,
    INPUT_ITEM,
    SUB_TITLE_TEXT,
    BUTTON,
    CHANGE_COIN_ID,
    GUIDE,
    UNIT,
} from '../asset/constants/index.js';

export default class PurchaseTap extends Tap {
    constructor($skeleton) {
        super($skeleton);
        this.$inputAmountInput = InputNumber(INPUT_ID.inputAmount, INPUT_ITEM.inputAmount);
        this.$inputButton = ButtonById(BUTTON.inputAmount.title, BUTTON.inputAmount.id);
        this.$inputAmount = Span(GUIDE.inputAmount.id);
        this.$purchaseContainer = document.createElement('tbody');
        this.$returnButton = ButtonById(BUTTON.returnChangeCoin.title, BUTTON.returnChangeCoin.id);
        this.$coin500 = CellById('', CHANGE_COIN_ID[0]);
        this.$coin100 = CellById('', CHANGE_COIN_ID[1]);
        this.$coin50 = CellById('', CHANGE_COIN_ID[2]);
        this.$coin10 = CellById('', CHANGE_COIN_ID[3]);
    }

    getInputButton() {
        return this.$inputButton;
    }

    getInputAmount() {
        return this.$inputAmountInput.value;
    }

    getPurchaseContainer() {
        return this.$purchaseContainer;
    }

    getReturnButton() {
        return this.$returnButton;
    }

    appendToPurchaseContainer($element) {
        this.$purchaseContainer.append($element);
    }

    init() {
        this.hide();
        this.createInputCoinForm();
        this.createPurchaseForm();
        this.createChangeCoinsForm();
    }

    render(inputAmount, products) {
        this.clearProducts();
        this.setInputAmount(inputAmount);
        this.setProducts(products);
        this.show();
    }

    setInputAmount(inputAmount) {
        this.$inputAmount.innerText = inputAmount;
    }

    setProducts(products) {
        this.appendToPurchaseContainer(
            products.reduce((frag, product, idx) => {
                frag.appendChild(PurchaseBodyRow(product, idx));

                return frag;
            }, document.createDocumentFragment()),
        );
    }

    clearProducts() {
        this.$purchaseContainer.replaceChildren();
    }

    setCoinCnts(distributedCoin) {
        this.$coin500.innerText = `${distributedCoin[0]}${UNIT.count}`;
        this.$coin100.innerText = `${distributedCoin[1]}${UNIT.count}`;
        this.$coin50.innerText = `${distributedCoin[2]}${UNIT.count}`;
        this.$coin10.innerText = `${distributedCoin[3]}${UNIT.count}`;
    }

    refreshProducts(products) {
        this.clearProducts();
        this.setProducts(products);
    }

    createInputCoinForm() {
        this.$inputButton.style.marginLeft = '5px';
        this.appendToApp(
            SubmitForm(
                SUB_TITLE_TEXT.inputAmount,
                this.$inputAmountInput,
                this.$inputButton,
                GUIDE.inputAmount.title,
                this.$inputAmount,
            ),
        );
    }

    createPurchaseForm() {
        const $wrap = document.createElement('div');
        const $table = Table();
        const $tHead = document.createElement('thead');

        $tHead.append(PurchaseHeadRow());
        $table.append($tHead);
        $table.append(this.$purchaseContainer);
        $wrap.style.marginTop = '30px';
        $wrap.append(SubTitle(SUB_TITLE_TEXT.purchageList));
        $wrap.append($table);
        this.appendToApp($wrap);
    }

    createChangeCoinsForm() {
        const $coinForm = document.createElement('div');

        this.$returnButton.style.marginTop = '5px';
        $coinForm.style.marginTop = '20px';
        $coinForm.append(SubTitle(SUB_TITLE_TEXT.changeCoin));
        $coinForm.append(this.$returnButton);
        $coinForm.append(CoinTable(this.$coin500, this.$coin100, this.$coin50, this.$coin10));
        this.appendToApp($coinForm);
    }
}