
import { elementCreatorWithClass } from '../utils/dom.js';
import { ADD_TAB_ID, ADD_TAB_CLASS, MANAGE_TAB_ID, COIN_VALUE, COIN_TABLE_ID, PURCHASE_TAB_ID, PURCHASE_TAB_CLASS, PURCHASE_TAB_DATASET} from '../constants.js';

export const displayProductAddTab= (product)=>{
    const tr = elementCreatorWithClass('tr', ADD_TAB_CLASS.TABLE_TR, null);
    tr.append(
        elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_NAME, product.name),
        elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_PRICE, product.price),
        elementCreatorWithClass('td', ADD_TAB_CLASS.TABLE_TD_QUANTITY, product.quantity),
    );
    document.getElementById(ADD_TAB_ID.PRODUCT_TABLE).append(tr);
}

export const displayPossessCoins= (item)=>{
    for(let key in item.coins){
        document.getElementById(COIN_TABLE_ID[key]).innerHTML = `${item.coins[key]}개`;
    }
}

export const displayPossessTotal= (total)=>{
    document.getElementById(MANAGE_TAB_ID.AMOUNT_SPAN_VALUE).innerHTML = total;
}

export const displayProductPurchaseTab= (product) =>{
    const tr = `<tr id= ${product.id} class= ${PURCHASE_TAB_CLASS.PURCHASE_ITEM}>
                    <td class=${PURCHASE_TAB_CLASS.PRODUCT_NAME} 
                        ${PURCHASE_TAB_DATASET.PRODUCT_NAME}=${product.name}>${product.name}</td>
                    <td class=${PURCHASE_TAB_CLASS.PRODUCT_PRICE} 
                        ${PURCHASE_TAB_DATASET.PRODUCT_PRICE}=${product.price}>${product.price}</td>
                    <td class=${PURCHASE_TAB_CLASS.PRODUCT_QUANTITY} 
                        ${PURCHASE_TAB_DATASET.PRODUCT_QUANTITY}=${product.quantity}>${product.quantity}</td>
                    <td>
                        <button class=${PURCHASE_TAB_CLASS.PURCHASE_BUTTON}>구매하기</button>
                    </td>
                </tr>
                `
    document.getElementById(PURCHASE_TAB_ID.PRODUCT_TABLE).insertAdjacentHTML('beforeend',tr);
}

export const displayInputCoin=(input)=>{
    document.getElementById(PURCHASE_TAB_ID.CHARGE_AMOUNT).innerHTML = input;
}

export const displayChangedProduct=(product, item)=>{
    document.querySelector(`#${product.id} .${PURCHASE_TAB_CLASS.PRODUCT_QUANTITY}`).innerHTML = product.quantity;
    document.getElementById(PURCHASE_TAB_ID.CHARGE_AMOUNT).innerHTML = item.input;
}

export const displayReturnedCoins =(coins)=>{
    for(let key in COIN_VALUE){
        document.getElementById(PURCHASE_TAB_ID.COIN_TABLE[key]).innerHTML = `${coins[key]}개`;
    }
}

export const displayRemainCoins =(item) =>{
    for(let key in COIN_VALUE){
        document.getElementById(COIN_TABLE_ID[key]).innerHTML = `${item.coins[key]}개`;   
    }
}