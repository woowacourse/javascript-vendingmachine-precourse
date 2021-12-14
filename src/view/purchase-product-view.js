import { moneyList } from '../constants.js';

export default class PurchaseProductView {

    renderView(view, inputMoney, productList, inputChanges) {
        document.querySelector("#tab-content").innerHTML = view;
        this.renderInputMoney(inputMoney);
        this.renderProductList(productList);
        this.renderChanges(inputChanges);
    }

    renderInputMoney(money) {
        document.querySelector("#charge-amount").textContent = money;
    }

    renderProductList(products) {
        const productTable = document.querySelector("table");
        products.forEach(product => {
            const {name, price, quantity} = product;
            const newProductRow = document.createElement("tr");
            newProductRow.className = "product-purchase-item";
            newProductRow.innerHTML = `<td class="product-purchase-name" data-product-name="${name}">${name}</td>
                                        <td class="product-purchase-price" data-product-price="${price}">${price}</td>
                                        <td class="product-purchase-quantity" data-product-quantity="${quantity}">${quantity}</td>
                                        <td><button class="purchase-button">구매하기</button></td>`;
            productTable.appendChild(newProductRow);
        });
    }

    renderDecreaseQuantity(quantityCell, quantity) {
        quantityCell.dataset.productQuantity = quantity.toString();
        quantityCell.textContent = quantity.toString();
    }

    renderChanges(changes) {
        moneyList.forEach(coin => 
                document.querySelector(`#coin-${coin}-quantity`).textContent = `${changes[coin]}개`);
    }
};