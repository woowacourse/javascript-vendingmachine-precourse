import elementCreator from './dom/util.js'

const app = document.getElementById('app');

app.append(elementCreator('h1','title','🥤 자판기 🥤'));

const buttons = elementCreator('span','buttons','');

const addButton = elementCreator('button','product-add-menu','상품 관리');
const manageButton = elementCreator('button','vending-machine-manage-menu','잔돈 충전');
const purchaseButton = elementCreator('button','product-purchase-menu','상품 구매');

buttons.append(addButton, manageButton, purchaseButton);
app.append(buttons);