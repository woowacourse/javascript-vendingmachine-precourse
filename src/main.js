//not gonna do this anymore...
const body = document.getElementById("app");
const title = document.createElement("h2");
title.id = "title";
title.textContent = "상품 관리";
body.appendChild(title);

const menu = document.createElement("span");
menu.id = "menu";
body.appendChild(menu);
const menuProductPurchase = document.createElement("input");
const menuVedingMachine = document.createElement("input");
const menuProductAdd = document.createElement("input");
menuProductAdd.type = "button";
menuProductAdd.id = "product-add-menu";
menuProductAdd.value = "상품 관리";
menuVedingMachine.type = "button";
menuVedingMachine.id = "vending-machine-manage-menu";
menuVedingMachine.value = "잔돈 충전";
menuProductPurchase.type = "button";
menuProductPurchase.id = "product-purchase-menu";
menuProductPurchase.value = "상품 구매";
menu.appendChild(menuProductAdd);
menu.appendChild(menuVedingMachine);
menu.appendChild(menuProductPurchase);

function movePage1() {
  window.location.href = "index.html";
}

function movePage2() {
  window.location.href = "index2.html";
}

function movePage3() {
  window.location.href = "index3.html";
}

menuProductAdd.addEventListener("click", movePage1);
menuVedingMachine.addEventListener("click", movePage2);
menuProductPurchase.addEventListener("click", movePage3);

const addProduct = document.createElement("h3");
addProduct.textContent = "상품 추가하기";
body.appendChild(addProduct);

const inputbox = document.createElement("span");
inputbox.id = "inputbox";
body.appendChild(inputbox);
const productnameInput = document.createElement("input");
const productPriceInput = document.createElement("input");
const productQuantityInput = document.createElement("input");
const productAddButton = document.createElement("input");
productnameInput.type = "text";
productnameInput.id = "product-name-input";
productnameInput.placeholder = "상품명";
productPriceInput.type = "number";
productPriceInput.id = "product-price-input";
productPriceInput.placeholder = "가격";
productQuantityInput.type = "number";
productQuantityInput.id = "product-quantity-input";
productQuantityInput.placeholder = "수량";
productAddButton.type = "button";
productAddButton.value = "추가하기";
inputbox.appendChild(productnameInput);
inputbox.appendChild(productPriceInput);
inputbox.appendChild(productQuantityInput);
inputbox.appendChild(productAddButton);

const productstate = document.createElement("h3");
productstate.textContent = "상품 현황";
const productList = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
productList.id = "product-list";
body.appendChild(productstate);
body.appendChild(productList);
productList.appendChild(thead);
productList.appendChild(tbody);
const row1 = document.createElement("tr");
const heading1 = document.createElement("th");
heading1.innerHTML = "상품명";
const heading2 = document.createElement("th");
heading2.innerHTML = "가격";
const heading3 = document.createElement("th");
heading3.innerHTML = "수량";
row1.appendChild(heading1);
row1.appendChild(heading2);
row1.appendChild(heading3);
thead.appendChild(row1);

const products = [];

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

function checkValidity() {
  if (productPriceInput.value < 100) {
    alert("100원보다 큰 금액을 입력해야 합니다.");
    return false;
  }
  if (productPriceInput.value % 10 !== 0) {
    alert("10원 단위로 입력해야 합니다.");
    return false;
  }
}

function makeOneRowonTable(product) {
  let newRow = document.createElement("tr");
  let productName = document.createElement("td");
  productName.innerHTML = product.name;
  let productPrice = document.createElement("td");
  productPrice.innerHTML = product.price;
  let productQuantity = document.createElement("td");
  productQuantity.innerHTML = product.quantity;
  newRow.appendChild(productName);
  newRow.appendChild(productPrice);
  newRow.appendChild(productQuantity);
  tbody.appendChild(newRow);
}

function saveProductData(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function getSavedProductData() {
  let items = JSON.parse(localStorage.getItem("products"));
  console.log(items);
  for (let i = 0; i < items.length; i++) {
    let product = new Product(items[i][0], items[i][1], items[i][2]);
    products.push(product);
    makeOneRowonTable(product);
  }
}

getSavedProductData();

function addProductonTheList() {
  const validity = checkValidity();
  if (validity) {
    let product = new Product(
      productnameInput.value,
      +productPriceInput.value,
      +productQuantityInput.value
    );
    products.push(product);
    console.log(product);
    makeOneRowonTable(product);
    saveProductData(products);
  }
}

productAddButton.addEventListener("click", addProductonTheList);
