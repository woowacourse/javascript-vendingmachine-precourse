import elementCreator from './dom/util.js'

const addButtonId = 'product-add-menu';
const manageButtonId = 'vending-machine-manage-menu';
const purchaseButtonId = 'product-purchase-menu';

const app = document.getElementById('app');

app.append(elementCreator('h1','title','🥤 자판기 🥤'));

const buttons = elementCreator('span','buttons','');

const addButton = elementCreator('button', addButtonId, '상품 관리');
const manageButton = elementCreator('button', manageButtonId,'잔돈 충전');
const purchaseButton = elementCreator('button', purchaseButtonId,'상품 구매');

buttons.append(addButton, manageButton, purchaseButton);
app.append(buttons);

// 탭 구현
const addTabId = 'add-menu';
const manageTabId = 'manage-menu';
const purchaseTabId = 'purchase-menu';

const addTab = elementCreator('div', addTabId, 'addTab');
const manageTab = elementCreator('div', manageTabId, 'manageTab');
const purchaseTab = elementCreator('div', purchaseTabId, 'purchaseTab');

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
    console.log(targetButton);
    for(let buttonId in tabs){
        if(buttonId === targetButton.id){
            tabs[buttonId].hidden = false;
        }else {
            tabs[buttonId].hidden = true;
        }
    };
});