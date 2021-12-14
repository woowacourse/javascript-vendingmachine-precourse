import { displayProductAddTab, displayPossessCoins, displayInputCoin, displayProductPurchaseTab } from './display.js';
const addTabRender = (instance)=>{
    for(let i=0; i<instance.products.length; i++){
        displayProductAddTab(instance.products[i]);
    }
}

const manageTabRender = (instance)=>{
    displayPossessCoins(instance);
}

const purchaseTabRender = (instance, controller)=>{
    displayInputCoin(instance.input);
    // added controller for evelnt listener
    for(let i=0; i<instance.products.length; i++){
        displayProductPurchaseTab(instance.products[i], controller);
    }
}

export const render = (instance, controller) => {   
    addTabRender(instance);
    manageTabRender(instance);
    purchaseTabRender(instance, controller);
}