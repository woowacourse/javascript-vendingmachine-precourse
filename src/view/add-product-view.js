export default class AddProductView {
    renderView(view, productList) {
        document.querySelector("#tab-content").innerHTML = view;
        this.renderAddedProductList(productList);
    }

    renderAddedProductList(products) {
        const productTable = document.querySelector("table");
        productTable.innerHTML = '<th>상품명</th><th>가격</th><th>수량</th>';
        products.forEach(product => {
            const {name, price, quantity} = product;
            const newProductRow = document.createElement("tr");
            newProductRow.className = "product-manage-item";
            newProductRow.innerHTML = `<td class="product-manage-name">${name}</td>
                                        <td class="product-manage-price">${price}</td>
                                        <td class="product-manage-quantity">${quantity}</td>`;
            productTable.appendChild(newProductRow);
        });
    }
};