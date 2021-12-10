import {
  CHARGE_AMOUNT,
  EMPTY,
  MACHINE_MANAGE,
  PRODUCT_ADD,
  PURCHASE_MENU,
} from '../constants/index.js';

const Content = ({ component, tabData }) => {
  switch (component) {
    case PRODUCT_ADD: {
      return `
        <div>
          <h2>상품 추가하기</h2>
          <form>
            <input type="text" id="product-name-input" maxlength="20" placeholder="상품명" />
            <input type="number" id="product-price-input" maxlength="20" placeholder="가격" />
            <input type="number" id="product-quantity-input" maxlength="20" placeholder="수량" />
            <button id="product-add-button">추가하기</button>
          </form>
        </div>
        <div>
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
              ${tabData
                .map(
                  ({ name, price, quantity }) => `
                <tr class="product-manage-item">
                  <td class="product-manage-name">${name}</td>
                  <td class="product-manage-price">${price}</td>
                  <td class="product-manage-quantity">${quantity}</td>
                </tr>
                `,
                )
                .join(EMPTY)}
            </tbody>
          </table>
        </div>
        `;
    }
    case MACHINE_MANAGE: {
      return `
        <div>
          <h2>자판기 동전 충전하기</h2>
          <form>
            <input type="number" id="vending-machine-charge-input" maxlength="20" placeholder="자판기가 보유할 금액" />
            <button id="vending-machine-charge-button">충전하기</button>
          </form>
          <p id="vending-machine-charge-amount">보유 금액: ${tabData.reduce(
            (result, { description, count }) => result + description * count,
            0,
          )}원</p>
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
              ${tabData
                .map(
                  ({ description, count }) => `
                <tr>
                  <td>${description}원</td>
                  <td id="vending-machine-coin-${description}-quantity">${count}개</td>
                </tr>
                `,
                )
                .join(EMPTY)}
            </tbody>
          </table>
        </div>
        `;
    }
    case PURCHASE_MENU: {
      return `
        <div>
          <h2>금액 투입</h2>
          <form>
            <input type="number" id="charge-input" maxlength="20" placeholder="투입할 금액" />
            <button id="charge-button">투입하기</button>
          </form>
          <p>투입한 금액: <span id="charge-amount">${tabData[CHARGE_AMOUNT] || 0}</span>원</p>
        </div>
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
            <tbody>
              ${tabData[PRODUCT_ADD].map(
                ({ name, price, quantity }) => `
                <tr class="product-purchase-item">
                  <td data-product-name=${name} class="product-purchase-name">${name}</td>
                  <td data-product-price=${price} class="product-purchase-price">${price}</td>
                  <td data-product-quantity=${quantity} class="product-purchase-quantity">${quantity}</td>
                  <td><button class="purchase-button">구매하기</button></td>
                </tr>
                `,
              ).join(EMPTY)}
            </tbody>
          </table>
        </div>
        <div class="changes">
          <h3>잔돈</h3>
          <button id="coin-return-button">반환하기</button>
          <table>
            <thead>
              <tr>
                <th>동전</th>
                <th>개수</th>
              </tr>
            </thead>
            <tbody>
              ${tabData[MACHINE_MANAGE].map(
                ({ description, count }) => `
                <tr>
                  <td>${description}원</td>
                  <td id="coin-${description}-quantity">${count}개</td>
                </tr>
                `,
              ).join(EMPTY)}
            </tbody>
          </table>
        </div>
        `;
    }
    default:
      return '';
  }
};

export default Content;
