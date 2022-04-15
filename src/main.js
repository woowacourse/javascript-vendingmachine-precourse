const body = document.getElementById('app');
const title = document.createElement('h2');
title.id = 'title'
title.textContent = '상품 관리';
body.appendChild(title);

const menu = document.createElement('span');
menu.id= 'menu'
body.appendChild(menu);
const menuProductPurchase = document.createElement('input');
const menuVedingMachine = document.createElement('input');
const menuProductAdd = document.createElement('input');
menuProductAdd.type ='button';
menuProductAdd.id = 'product-add-menu';
menuProductAdd.value = '상품 관리';
menuVedingMachine.type ='button';
menuVedingMachine.id = 'vending-machine-manage-menu';
menuVedingMachine.value = '잔돈 충전'
menuProductPurchase.type = 'button';
menuProductPurchase.id = 'product-purchase-menu';
menuProductPurchase.value = '상품 구매'
menu.appendChild(menuProductAdd);
menu.appendChild(menuVedingMachine);
menu.appendChild(menuProductPurchase);

const addProduct = document.createElement('h3');
addProduct.textContent = '상품 추가하기';
body.appendChild(addProduct);

const inputbox = document.createElement('span');
inputbox.id ='inputbox'
body.appendChild(inputbox);
const productnameInput = document.createElement('input');
const productPriceInput = document.createElement('input');
const productQuantityInput =document.createElement('input');
const productAddButton = document.createElement('input');
productnameInput.type ='text';
productnameInput.id = 'product-name-input';
productPriceInput.type ='number';
productPriceInput.id = 'product-price-input';
productQuantityInput.type ='number';
productQuantityInput.id = 'product-quantity-input';
productAddButton.type='button';
productAddButton.value = '추가하기';
inputbox.appendChild(productnameInput);
inputbox.appendChild(productPriceInput);
inputbox.appendChild(productQuantityInput);
inputbox.appendChild(productAddButton);

//const contents = document.createElement('div');
const productstate = document.createElement('h3');
productstate.textContent = '상품 현황';
const productList = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
productList.id = 'product-list';
body.appendChild(productstate);
body.appendChild(productList);
productList.appendChild(thead);
productList.appendChild(tbody);
const  row1 = document.createElement('tr');
const heading1 = document.createElement('th');
heading1.innerHTML = '상품 이름'
const heading2 = document.createElement('th');
heading2.innerHTML = '상품 가격'
const heading3 = document.createElement('th');
heading3.innerHTML = '상품 수량'
row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);
//let table = '<table><thead><tr><th>상품 이름</th><th>상품 가격</th><th>상품 수량</th></tr></thead><tbody>'
// table += '</tbody></table>';
//table.border = '1px black solid'

const products =[];

class Product{
    constructor(name,price,quantity){
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}

function checkValidity(){
    if(productPriceInput.value < 100){
        alert('100원보다 큰 금액을 입력해야 합니다.');
        return false;
    } 
    if(productPriceInput.value % 10 !== 0){
        alert('10원 단위로 입력해야 합니다.');
        return false;
    }
}

function makeOneRowonTable(product){
        let newRow = document.createElement('tr');
        let productName = document.createElement('td');
        productName.innerHTML = product.name;
        let productPrice = document.createElement('td');
        productPrice.innerHTML = product.price;
        let productQuantity = document.createElement('td');
        productQuantity.innerHTML = product.quantity;
        newRow.appendChild(productName);
        newRow.appendChild(productPrice);
        newRow.appendChild(productQuantity);
        tbody.appendChild(newRow);
}

function saveProductData(product){
    localStorage.setItem(`${product.name}`,[product.price, product.quantity]);
}

function addProductonTheList(){
    const validity = checkValidity();
    if(validity !== false){
    let product = new Product(
        productnameInput.value, +productPriceInput.value, +productQuantityInput.value);
    products.push(product);  
    makeOneRowonTable(product);
    saveProductData(product);
    // localStorage.setItem(`product`,
    // [productnameInput.value,+productPriceInput.value,+productQuantityInput.value]);
    console.log(products);
    }
}

productAddButton.addEventListener('click',addProductonTheList);

// const tablehead = [
//     {'상품 이름': null,
//      '상품 가격': null,
//      '상품 수량': null
//     }
// ]

// let table = document.querySelector('#product-list');
// //table.style.border = '1px solid black';
// let data = Object.keys(tablehead[0]);

// function generateTableHead(table, data){
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for(let key of data){
//         let th = document.createElement('th');
//         let text = document.createTextNode(key);
//         th.appendChild(text);
//         row.appendChild(th);
//         //th.style.border = '1px solid black';
//     }
// }

// function generateTable(table, products){
//     for(let product of products){
//         let row = table.insertRow();
//         for(element in product){
//             let cell = row.insertCell();
//             let text = document.createTextNode(product[element]);
//             cell.appendChild(text);
//             //cell.style.border = '1px solid black';
//         }
//     }
// }

// generateTableHead(table,data);







