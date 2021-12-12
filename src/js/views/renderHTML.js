import $ from '../utils/dom.js';

export const renderNavbar = () => {
  $('#app').innerHTML = `
      <header>
        <h1>🥤 자판기 🥤</h1>
        <nav id="menu-wrap">
          <ul id="menu-button-wrap">
            <button id="product-add-menu" type="button">상품 관리</button>
            <button id="vending-machine-manage-menu" type="button">잔돈 충전</button>
            <button id="product-purchase-menu" type="button">상품 구매</button>
          </ul>
        </nav>
      </header>
      <section>
      </section>
    `;
};

export const renderProductAdd = () => {
  $('section').innerHTML = `
    <div id="product-add-content">
      <div id="product-add-input-wrap">
        <h3>상품 추가하기</h3>
        <form id="product-add-form">
          <input type="text" id="product-name-input" placeholder="상품명">
          <input type="number" id="product-price-input" placeholder="가격">
          <input type="number" id="product-quantity-input" placeholder="수량">
          <button id="product-add-button">추가하기</button>
        </form>
      </div>

      <div id="product-manage-wrap">
        <h3>상품 현황</h3>
        <table id="product-manage-table">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  `;
};

export const renderProductPurchase = () => {
  $('section').innerHTML = `
    <div id="product-purchase-content">
      <div id="charge-input-wrap">
        <h3>금액 투입</h3>
        <form id="charge-input-form">
          <input type="number" id="charge-input">
          <button id="charge-button">투입하기</button>
        </form>
        투입한 금액: <span id="charge-amount"></span>
      </div>

      <div id="product-purchase-list-wrap">
        <h3>구매할 수 있는 상품 현황</h3>
        <table id="product-purchase-table">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
            </tr>
          </thead>
          <tbody id="product-purchase-list">
          </tbody>
        </table>
      </div>

      <div id="coin-return-wrap">
        <h3>잔돈</h3>
        <button type="button" id="coin-return-button">반환하기</button>
        <table id="coin-return-table">
          <thead>
            <tr>
              <th>동전</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="coin-500-quantity"></td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="coin-100-quantity"></td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="coin-50-quantity"></td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="coin-10-quantity"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `;
};

export const renderVendingMachine = () => {
  $('section').innerHTML = `
    <div id="vending-machine-manage-content">
      <div id="vending-machine-manage-input-wrap">
        <h3>자판기 동전 충전하기</h3>
        <form id="vending-machine-manage-form">
          <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액">
          <button id="vending-machine-charge-button">충전하기</button>
        </form>
        보유 금액: <span id="vending-machine-charge-amount"></span>
      </div>

      <div id="vending-machine-coin-wrap">
        <h3>자판기가 보유한 동전</h3>
        <table id="vending-machine-table">
          <thead>
            <tr>
              <th>동전</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="vending-machine-coin-500-quantity"></td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="vending-machine-coin-100-quantity"></td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="vending-machine-coin-50-quantity"></td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="vending-machine-coin-10-quantity"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `;
};
