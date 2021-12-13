import NUMBER from '../constants/number.js';

export const headerTemplate = () => {
  return `
  <h2>🥤자판기🥤</h2>
  <nav>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  </nav>
  <main></main>
  `;
};

export const productTemplate = ({ name, price, quantity }) => {
  return `
    <tr class="product-manage-item">
      <th class="product-manage-name">${name}</th>
      <th class="product-manage-price">${price}</th>
      <th class="product-manage-quantity">${quantity}</th>
    </tr>
  `;
};

export const addTabTemplate = (products, inputs) => {
  return `
    <h2>상품 추가하기</h2>
    <div>
      <form id="product-add-form">
        <input id="product-name-input" type="text" placeholder="상품명" value="${inputs.name}"/>
        <input id="product-price-input" type="number" placeholder="가격" value="${inputs.price}"/>
        <input id="product-quantity-input" type="number" placeholder="수량" value="${
          inputs.quantity
        }"/>
        <button id="product-add-button">추가하기</button>
      </form>
    </div>
    <h2>상품 현황</h2>
    <table>
      <thead>
        <tr>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>
      ${products
        .map((product) => {
          return productTemplate(product);
        })
        .join('')}
      </tbody>
    </table>
  `;
};

export const manageTabTemplate = () => {
  return `
    <h2>자판기 동전 충전하기</h2>
    <div>
      <input id="vending-machine-charge-input" type="number" />
      <button id="vending-machine-charge-button">충전하기</button>
    </div>
    <div>
      보유금액: <span id="vending-machine-charge-amount">${NUMBER.ZERO}원</span>
    </div>
    <div>
      <h2>자판기가 보유한 동전</h2>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>500원</th>
            <th id="vending-machine-coin-500-quantity">${NUMBER.ZERO}개</th>
          </tr>
          <tr>
            <th>100원</th>
            <th id="vending-machine-coin-100-quantity">${NUMBER.ZERO}개</th>
          </tr>
          <tr>
            <th>50원</th>
            <th id="vending-machine-coin-50-quantity">${NUMBER.ZERO}개</th>
          </tr>
          <tr>
            <th>10원</th>
            <th id="vending-machine-coin-10-quantity">${NUMBER.ZERO}개</th>
          </tr>
        </tbody>
      </table>
    </div>
  `;
};

export const purchaseTabTemplate = () => {
  return `
    <h2>금액 투입</h2>
    <div>
      <input id="charge-input" type="number" />
      <button id="charge-button">투입하기</button>
      <div>
        투입한 금액: <span id="charge-amount">${NUMBER.ZERO}원</span>
      </div>
    </div>
    <br />
    <div>
      <h2>구매할 수 있는 상품 현황</h2>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
    <div>
      <h2>잔돈</h2>
      <button id="coin-return-button">반환하기</button>
      <table>
        <thead>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>500원</th>
            <th id="coin-500-quantity">${NUMBER.ZERO}개</th>
          </tr>
          <tr>
            <th>100원</th>
            <th id="coin-100-quantity">${NUMBER.ZERO}개</th>
          </tr>
          <tr>
            <th>50원</th>
            <th id="coin-50-quantity">${NUMBER.ZERO}개</th>
          </tr>
          <tr>
            <th>10원</th>
            <th id="coin-10-quantity">${NUMBER.ZERO}개</th>
          </tr>
        </tbody>
      </table>
    </div>
    
  `;
};
