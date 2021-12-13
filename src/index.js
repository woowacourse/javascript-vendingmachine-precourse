import { elementCreator } from './dom/util.js';
import createAddTab from './tabs/add-tab.js';
import createManageTab from './tabs/manage-tab.js';
import createPurchaseTab from './tabs/purchase-tab.js';

import createEventListeners from './eventListeners.js';
import VendingMachine from './machine.js';
import { checkStorage } from './util/storage.js';

const addButtonId = 'product-add-menu';
const manageButtonId = 'vending-machine-manage-menu';
const purchaseButtonId = 'product-purchase-menu';

const app = document.getElementById('app');

app.append(elementCreator('h1','title','🥤 자판기 🥤'));

const buttons = elementCreator('span','buttons',null);

const addButton = elementCreator('button', addButtonId, '상품 관리');
const manageButton = elementCreator('button', manageButtonId,'잔돈 충전');
const purchaseButton = elementCreator('button', purchaseButtonId,'상품 구매');

buttons.append(addButton, manageButton, purchaseButton);
app.append(buttons);

// 탭 구현
const addTab = createAddTab();
const manageTab = createManageTab();
const purchaseTab = createPurchaseTab();

// 처음화면, addTab
manageTab.hidden = true;
purchaseTab.hidden = true;

app.append(addTab,manageTab,purchaseTab);

// 탭 버튼 이벤트 리스너
let tabs = {};
tabs[addButtonId] = addTab;
tabs[manageButtonId] = manageTab;
tabs[purchaseButtonId] = purchaseTab; 

buttons.addEventListener('click', e =>{
    e.preventDefault();
    const targetButton = e.target;
    for(let buttonId in tabs){
        if(buttonId === targetButton.id){
            tabs[buttonId].hidden = false;
        }else {
            tabs[buttonId].hidden = true;
        }
    };
});

//자판기 객체 초기화
const vendingMachine = new VendingMachine();
checkStorage(vendingMachine);
createEventListeners(vendingMachine);