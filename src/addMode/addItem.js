import { $ } from '../dom.js';
import AddModeDrawTable from './addModeDrawTable.js';
import Item from '../item/item.js';
import PurchaseItem from '../purchaseMode/purchaseItem.js';
function alreadyContain(itemList, name, price, count) {
  for (let i = 0; i < itemList.length; i++){
    if (itemList[i].name === name && itemList[i].price === price) {
      return i;
    }
  }
  return -1;
}

export default function addItem(name, price, count) {
  const itemList = JSON.parse(localStorage.getItem('itemList'));
  let alreadyinCheck = alreadyContain(itemList, name, price, count);
  if (alreadyinCheck !==-1 ) {
    let itemCount = parseInt(itemList[alreadyinCheck].count);
    itemList[alreadyinCheck].count = itemCount+parseInt(count);
    localStorage.setItem('itemList', JSON.stringify(itemList));
    AddModeDrawTable();
  }
  else {
    itemList.push(new Item(name, price, count));
    localStorage.setItem('itemList', JSON.stringify(itemList));
    AddModeDrawTable();
  }
}