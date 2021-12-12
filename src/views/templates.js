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

        <h3 style="margin-top:50px;">상품 현황</h3>
        <product-table 
            tbodyid="product-inventory"
            width="400" 
        ></product-table>

    </div>`,

  vendingMachineManageHTML: `
    <div id="vending-machine-manage-component">

        <h3>자판기 동전 충전하기</h3>
        <charge-form
            inputid="vending-machine-charge-input"
            placeholder="자판기가 보유할 금액"
            buttonid="vending-machine-charge-button"
            buttontext="충전하기"
            labeltext="보유 금액 : "
            chargeid="vending-machine-charge-amount"
            monetaryid="vending-machine-monetary-unit"
        ></charge-form>

        <h3 style="margin-top:50px;">자판기가 보유한 동전</h3>
        <coin-table 
            coin500id="vending-machine-coin-500-quantity"
            coin100id="vending-machine-coin-100-quantity"
            coin50id="vending-machine-coin-50-quantity"
            coin10id="vending-machine-coin-10-quantity"
        ></coin-table>

    </div>`,

  productPurchaseHTML: `
    <div id="product-purchase-component">

        <h3>금액 투입</h3>
        <charge-form
            inputid="charge-input"
            placeholder="투입할 금액"
            buttonid="charge-button"
            buttontext="투입하기"
            labeltext="투입한 금액 : "
            chargeid="charge-amount"
            monetaryid="monetary-unit"
        ></charge-form>

        <h3 style="margin-top:50px;">구매할 수 있는 상품 현황</h3>
        <product-table 
            tbodyid="product-purchase-inventory"
            width="470" 
            children="<th>구매</th>"
        ></product-table>

        <h3 style="margin-top:50px;">잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <coin-table 
            coin500id="coin-500-quantity"
            coin100id="coin-100-quantity"
            coin50id="coin-50-quantity"
            coin10id="coin-10-quantity"
        ></coin-table>

    </div>`,

  inventoryTableRowHTML: object => {
    return `
        <tr class="product-manage-item">
            <td class="product-manage-name">${object.name}</td>
            <td class="product-manage-price">${object.price}</td>
            <td class="product-manage-quantity">${object.quantity}</td>
        </tr>`;
  },

  purchaseInventoryTableRowHTML: object => {
    return `
        <tr class="product-purchase-item">
            <td data-product-name="${object.name}" class="product-purchase-name">${object.name}</td>
            <td data-product-price="${object.price}" class="product-purchase-price">${object.price}</td>
            <td data-product-quantity="${object.quantity}" class="product-purchase-quantity">${object.quantity}</td>
            <td>
                <button class="purchase-button">구매하기</button>
            </td>
        </tr>`;
  },
};

export default templates;
