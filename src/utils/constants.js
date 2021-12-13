import { $id } from './dom.js';
import { productManageItemTemplate } from './template.js';

export const TAB_MENUS_TEXT = `
  <header>
    <h1>🥤자판기🥤</h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu" >잔돈 충전</button>
    <button id="product-purchase-menu" style=>상품 구매</button>
  </header>
  <main>
  </main>
`;

export const VENDING_MACHINE_MANAGE_TEXT = `
  
    <section>
      <h4>자판기 동전 충전하기</h4>
      <form id="vending-machine-charge-form">
        <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액"/>
        <button id="vending-machine-charge-button">충전하기</button>
      </form>
      <p>보유 금액: <div id="vending-machine-charge-amount"></div></p>
    </section>
    <section>
      <h4>자판기가 보유한 동전</h4>
      <table>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th id="vending-machine-coin-500-quantity">500원</th>
          <td></td>
        </tr>
        <tr>
          <th id="vending-machine-coin-100-quantity">100원</th>
          <td></td>
        </tr>
        <tr>
          <th id="vending-machine-coin-50-quantity">50원</th>
          <td></td>
        </tr>
        <tr>
          <th id="vending-machine-coin-10-quantity">10원</th>
          <td></td>
        </tr>
      </table>
    </section>
  
`;

export const PRODUCT_PURCHASE_TEXT = `
  
    <section>
      <h4>금액 "투입</h4>
      <form id="charge-form">
        <input type="number" id="charge-input" placeholder="투입할 금액"/>
        <button id="charge-button">충전하기</button>
      </form>
      <p>투입한 금액: <div id="charge-amount"></div></p>
    </section>
    <section>
      <h4>구매할 수 있는 상품 현황</h4>
      <table>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
          <th>구매</th>
        </tr>
      </table>
    </section>
    <section>
      <h4>잔돈</h4>
      <button id="coin-return-button">반환하기</button>
      <table>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
        <tr>
          <th id="coin-500-quantity">500원</th>
          <td></td>
        </tr>
        <tr>
          <th id="coin-100-quantity">100원</th>
          <td></td>
        </tr>
        <tr>
          <th id="coin-50-quantity">50원</th>
          <td></td>
        </tr>
        <tr>
          <th id="coin-10-quantity">10원</th>
          <td></td>
        </tr>
      </table>
    </section>
  
`;
