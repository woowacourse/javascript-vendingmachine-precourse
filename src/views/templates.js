const templates = {
  commonHTML: `
    <h1>🥤 자판기 🥤</h1>
    <nav id="tab-menu">
        <button id="product-add-menu">상품 관리</button>
        <button id="vending-machine-manage-menu">잔돈 충전</button>
        <button id="product-purchase-menu">상품 구매</button>
    </nav>
    <div id="component"></div>
    `,

  productAddHTML: `
    <div id="product-add-component">
        <h3>상품 추가하기</h3>
        <form>
            <input type="text" id="product-name-input" placeholder="상품명" />
            <input type="number" id="product-price-input" placeholder="가격" />
            <input type="number" id="product-quantity-input" placeholder="수량" />
            <button id="product-add-button">추가하기</button>
        </form>
        <h3>상품 현황</h3>
        <table border="1" style="width:400px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding:10px;">상품명</th>
                    <th style="padding:10px;">가격</th>
                    <th style="padding:10px;">수량</th>
                </tr>
            </thead>
            <tbody id="product-inventory">
            </tbody>
        </table>
    </div>`,

  vendingMachineManageHTML: `
    <div id="vending-machine-manage-component">
        <h3>자판기 동전 충전하기</h3>
        <form>
            <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
            <button id="vending-machine-charge-button">충전하기</button>
        </form>
        <div style="margin-top:15px;">보유 금액 : 
            <span id="vending-machine-charge-amount"></span>
        </div>
        <h3 style="margin-top:50px;">자판기가 보유한 동전</h3>
        <table border="1" style="width:135px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding:10px;">동전</th>
                    <th style="padding:10px;">개수</th>
                </tr>
            </thead>
            <tbody id="vending-machine-charge">
                <tr>
                    <td style="padding:10px;">500원</td>
                    <td id="vending-machine-coin-500-quantity" style="padding:10px;"></td>
                </tr>
                <tr>
                    <td style="padding:10px;">100원</td>
                    <td id="vending-machine-coin-100-quantity" style="padding:10px;"></td>
                </tr>
                <tr>
                    <td style="padding:10px;">50원</td>
                    <td id="vending-machine-coin-50-quantity" style="padding:10px;"></td>
                </tr>
                <tr>
                    <td style="padding:10px;">10원</td>
                    <td id="vending-machine-coin-10-quantity" style="padding:10px;"></td>
                </tr>
            </tbody>
        </table>
    </div>`,

  productPurchaseHTML: `
      <div id="product-purchase-component">
          <h3>금액 투입</h3>
          <form>
              <input type="number" id="charge-input" placeholder="투입할 금액" />
              <button id="charge-button">투입하기</button>
          </form>
          <div style="margin-top:15px;">투입한 금액 : 
              <span id="charge-amount"></span>
              <span id="monetary-unit"></span>
          </div>
          <h3 style="margin-top:50px;">구매할 수 있는 상품 현황</h3>
          <table border="1" style="width:470px; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding:10px;">상품명</th>
                    <th style="padding:10px;">가격</th>
                    <th style="padding:10px;">수량</th>
                    <th style="padding:10px;">구매</th>
                </tr>
            </thead>
            <tbody id="product-purchase-inventory">
            </tbody>
        </table>
        <h3 style="margin-top:50px;">잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <table border="1" style="width:135px; border-collapse: collapse; margin-top:10px;">
            <thead>
                <tr>
                    <th style="padding:10px;">동전</th>
                    <th style="padding:10px;">개수</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:10px;">500원</td>
                    <td id="coin-500-quantity" style="padding:10px;"></td>
                </tr>
                <tr>
                    <td style="padding:10px;">100원</td>
                    <td id="coin-100-quantity" style="padding:10px;"></td>
                </tr>
                <tr>
                    <td style="padding:10px;">50원</td>
                    <td id="coin-50-quantity" style="padding:10px;"></td>
                </tr>
                <tr>
                    <td style="padding:10px;">10원</td>
                    <td id="coin-10-quantity" style="padding:10px;"></td>
                </tr>
            </tbody>
        </table>
      </div>`,
};

export default templates;
