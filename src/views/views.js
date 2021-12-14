import { state } from "../models/state.js";
import {clickEvents} from "../controllers/eventController.js"
const $app = document.getElementById("app");

export function initialViews() {
  $app.innerHTML = `
    <h2>🥤 자판기 🥤</h2>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  `;
  productManagementView();
  productPurchaseView();
  changeChargeView();
};

export function productManagementView() {
  $app.innerHTML += `
    <div id="product-component" hidden>
      <h3>상품 추가하기</h3>
      <input id="product-name-input" placeholder="상품명" />
      <input id="product-price-input" type="number" placeholder="가격" />
      <input id="product-quantity-input" type="number" placeholder="수량" />
      <button id="product-add-button">추가하기</button>
      <h3>상품 현황</h3>
      <table id="product-table">
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </table>
    </div>
  `;
}


export function changeChargeView() {
  $app.innerHTML += `
    <div id="charge-component" hidden>
      <h3>자판기 동전 충전하기</h3>
      <input id="vending-machine-charge-input" type="number" placeholder="자판기가 보유할 금액" />
      <button id="vending-machine-charge-button">충전하기</button>
      <div id="machine-charge-amount-div">보유 금액:
        <div id="machine-charge-amount"></div>
      </div>
      <h3>자판기가 보유한 동전</h3>
      <table id="vending-machine-coin-table"></table>
    </div>
  `;
}


export function productPurchaseView() {
  $app.innerHTML += `
    <div id="purchase-component" hidden>
      <h3>금액 투입</h3>
      <input id="charge-input" type="number" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
      <div id="charge-amount-div">투입한 금액:
        <div id="charge-amount"></div>
      </div>
      <h3>구매할 수 있는 상품 현황</h3>
      <table id="product-purchase-item-table">
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
      </table>
      <h3>잔돈</h3>
      <button id="coin-return-button">반환하기</button>
      <table id="return-coin-table"></table>
    </div>
  `;
}

export function showProductList() {
  const $productTable = document.getElementById("product-table");
  $productTable.innerHTML = `
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>`
  ;

  state.productList.map((item, index) => {
    $productTable.innerHTML += `
    <tr class="product-manage-name">
      <td class="product-manage-name">${item.name}</td>
      <td class="product-manage-price">${item.price}</td>
      <td class="product-manage-quantity">${item.quantity}</td>
    </tr>
  `;
  })
}

export function showCurrentChanges() {
  const $vendingMachineCoinTable = document.getElementById("vending-machine-coin-table");
  const $machineChargeAmount = document.getElementById("machine-charge-amount");
  
  $machineChargeAmount.innerText = `${state.changes.total}`;

  $vendingMachineCoinTable.innerHTML = `
  <th>동전</th>
  <th>개수</th>
  <tr>
    <td>500원</td>
    <td id="vending-machine-coin-500-quantity">${state.changes.fiveHundred}개</td>
  </tr>
  <tr>
    <td>100원</td>
    <td id="vending-machine-coin-100-quantity">${state.changes.hundred}개</td>
  </tr>
  <tr>
    <td>50원</td>
    <td id="vending-machine-coin-50-quantity">${state.changes.fifty}개</td>
  </tr>
  <tr>
    <td>10원</td>
    <td id="vending-machine-coin-10-quantity">${state.changes.ten}개</td>
  </tr>
`;
}

export function showPurchaseView() {
  const $productPurchaseItemTable = document.getElementById("product-purchase-item-table");
  const $chargeAmount = document.getElementById("charge-amount");
  

  $chargeAmount.innerText = `${state.inputMoney}`;
  
  $productPurchaseItemTable.innerHTML = `
  <th>상품명</th>
  <th>가격</th>
  <th>수량</th>
  <th>구매</th>
  `;

  state.productList.map((item) => {
    $productPurchaseItemTable.innerHTML += `
    <tr class="product-purchase-item">
      <td class="product-purchase-name" data-product-name=${item.name}>${item.name}</td>
      <td class="product-purchase-price" data-product-price=${item.price}>${item.price}</td>
      <td class="product-purchase-quantity" data-product-quantity=${item.quantity}>${item.quantity}</td>
      <td> <button class="purchase-button" id=${item.name}>구매하기 </button></td>
    </tr>
  `;
  })
  clickEvents();
}