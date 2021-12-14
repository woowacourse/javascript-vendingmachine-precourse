import { $productInventoryTable } from './htmlConst.js';

export const displayInventory = () => {
  $productInventoryTable.innerHTML = '';
  const getproduct = JSON.parse(localStorage.getItem('productList'));
  let html = '';
  for (let i = 0; i < getproduct.productList.length; i++) {
    const tmp = JSON.parse(localStorage.getItem(`${getproduct.productList[i]}`));
    html += `<tr><th>${tmp.productName}</th><th>${tmp.productPrice}</th><th>${tmp.productQuantity}</th>`;
  }
  $productInventoryTable.innerHTML += html;
};
