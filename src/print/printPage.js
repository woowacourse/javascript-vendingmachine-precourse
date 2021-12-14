export function printPage() {
    const $app = document.querySelector('#app');

    $app.innerHTML += `<h1>🥤자판기🥤</h1>
                    <button id="product-add-menu">상품 관리</button>
                    <button id="vending-machine-manage-menu">잔돈 충전</button>
                    <button id="product-purchase-menu">상품 구매</button>
                    `;

    $app.innerHTML += `<div id="product-add-content" class="show">
                    <h3>상품 추가하기</h3>
                    <input id="product-name-input" type="text" placeholder="상품명"><input id="product-price-input" type="number" placeholder="가격"><input id="product-quantity-input" type="number" placeholder="수량"><button id="product-add-button">추가하기</button>
                    <br>
                    <h3>상품 현황</h3>
                    <table border="1">
                        <tr>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                        </tr>
                        <tbody id="product-add-table"></tbody>
                    </table>
                    </div>`;

    $app.innerHTML += `<div id="vending-machine-manage-content" class="hide">
                    <h3>자판기 동전 충전하기</h3>
                    <input id="vending-machine-charge-input" type="number"><button id="vending-machine-charge-button">충전하기</button>
                    <br>
                    보유금액: <p id="vending-machine-charge-amount"></p>
                    <br>
                    <h3>자판기가 보유한 동전</h3>
                    <table id="vending-machine-charge-table" border="1">
                        <tr>
                            <th>동전</th>
                            <th>개수</th>
                        </tr>
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
                    </table>
                    </div>`;

    $app.innerHTML += `<div id="product-purchase-content" class="hide">
                    <h3>금액 투입</h3>
                    <input id="charge-input" type="number"><button id="charge-button">투입하기</button>
                    <br>
                    투입한 금액: <p id="charge-amount"></p>
                    <br>
                    <h3>구매할 수 있는 상품 현황</h3>
                    <table border="1">
                        <tr>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>수량</th>
                            <th>구매</th>
                        </tr>
                        <tbody id="product-purchase-table"></tbody>
                    </table>
                    <br>
                    <h3>잔돈</h3>
                    <button id="coin-return-button">반환하기</button>
                    <table id="coint-return-table" border="1">
                        <tr>
                            <th>동전</th>
                            <th>개수</th>
                        </tr>
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
                    </table>
                    </div>`;
}
