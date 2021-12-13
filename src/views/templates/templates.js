import { SELECTOR } from '../../constants/selectors.js';
import { default as R } from '../../utils/removeFirstCharacter.js';

const templates = {
  commonHTML: `
    <h1>🥤 자판기 🥤</h1>
    <nav id="${R(SELECTOR.TAB_MENU)}">
        <button id="${R(SELECTOR.PRODUCT_MENU)}">상품 관리</button>
        <button id="${R(SELECTOR.COIN_MENU)}">잔돈 충전</button>
        <button id="${R(SELECTOR.PURCHASE_MENU)}">상품 구매</button>
    </nav>

    <div id="${R(SELECTOR.COMPONENT)}"></div>
    `,

  productAddHTML: `
    <div id="${R(SELECTOR.PRODUCT_COMPONENT)}">

        <h3>상품 추가하기</h3>
        <form id="${R(SELECTOR.PRODUCT_ADD_FORM)}">
            <input type="text" id="${R(SELECTOR.PRODUCT_NAME_INPUT)}" placeholder="상품명" />
            <input type="number" id="${R(SELECTOR.PRODUCT_PRICE_INPUT)}" placeholder="가격" />
            <input type="number" id="${R(SELECTOR.PRODUCT_QUANTITY_INPUT)}" placeholder="수량" />
            <button id="${R(SELECTOR.PRODUCT_ADD_BUTTON)}">추가하기</button>
        </form>

        <h3 style="margin-top:50px;">상품 현황</h3>
        <product-table 
            tbodyid="${R(SELECTOR.PRODUCT_INVENTORY)}"
            width="400" 
        ></product-table>

    </div>`,

  vendingMachineManageHTML: `
  <div id="${R(SELECTOR.COIN_COMPONENT)}">

        <h3>자판기 동전 충전하기</h3>
        <charge-form
            inputid="${R(SELECTOR.COIN_CHARGE_INPUT)}"
            placeholder="자판기가 보유할 금액"
            buttonid="${R(SELECTOR.COIN_CHARGE_BUTTON)}"
            buttontext="충전하기"
            labeltext="보유 금액 : "
            chargeid="${R(SELECTOR.COIN_CHARGE_AMOUNT)}"
            monetaryid="${R(SELECTOR.COIN_CHARGE_UNIT)}"
        ></charge-form>

        <h3 style="margin-top:50px;">자판기가 보유한 동전</h3>
        <coin-table 
            coin500id="${R(SELECTOR.COIN_500)}"
            coin100id="${R(SELECTOR.COIN_100)}"
            coin50id="${R(SELECTOR.COIN_50)}"
            coin10id="${R(SELECTOR.COIN_10)}"
        ></coin-table>

    </div>`,

  productPurchaseHTML: `
    <div id="${R(SELECTOR.PURCHASE_COMPONENT)}">

        <h3>금액 투입</h3>
        <charge-form
            inputid="${R(SELECTOR.PURCHASE_CHARGE_INPUT)}"
            placeholder="투입할 금액"
            buttonid="${R(SELECTOR.PURCHASE_CHARGE_BUTTON)}"
            buttontext="투입하기"
            labeltext="투입한 금액 : "
            chargeid="${R(SELECTOR.PURCHASE_CHARGE_AMOUNT)}"
            monetaryid="${R(SELECTOR.PURCHASE_CHARGE_UNIT)}"
        ></charge-form>

        <h3 style="margin-top:50px;">구매할 수 있는 상품 현황</h3>
        <product-table 
            tbodyid="${R(SELECTOR.PURCHASE_INVENTORY)}"
            width="470" 
            children="<th>구매</th>"
        ></product-table>

        <h3 style="margin-top:50px;">잔돈</h3>
        <button id="${R(SELECTOR.COIN_RETURN_BUTTON)}">반환하기</button>
        <coin-table 
            coin500id="${R(SELECTOR.RETURN_COIN_500)}"
            coin100id="${R(SELECTOR.RETURN_COIN_100)}"
            coin50id="${R(SELECTOR.RETURN_COIN_50)}"
            coin10id="${R(SELECTOR.RETURN_COIN_10)}"
        ></coin-table>

    </div>`,

  inventoryTableRowHTML: object => {
    return `
        <tr class="${R(SELECTOR.PRODUCT_ITEM)}">
            <td class="${R(SELECTOR.PRODUCT_NAME)}">${object.name}</td>
            <td class="${R(SELECTOR.PRODUCT_PRICE)}">${object.price}</td>
            <td class="${R(SELECTOR.PRODUCT_QUANTITY)}">${object.quantity}</td>
        </tr>`;
  },

  purchaseInventoryTableRowHTML: object => {
    return `
        <tr class="${R(SELECTOR.PRODUCT_PURCHASE_ITEM)}">
            <td data-product-name="${object.name}" 
                class="${R(SELECTOR.PRODUCT_PURCHASE_NAME)}"
            >${object.name}</td>
            <td data-product-price="${object.price}" 
                class="${R(SELECTOR.PRODUCT_PURCHASE_PRICE)}">
            ${object.price}</td>
            <td data-product-quantity="${object.quantity}"
            class="${R(SELECTOR.PRODUCT_PURCHASE_QUANTITY)}"
            >${object.quantity}</td>
            <td>
                <button class="${R(SELECTOR.PURCHASE_ITEM_BUTTON)}">구매하기</button>
            </td>
        </tr>`;
  },
};

export default templates;
