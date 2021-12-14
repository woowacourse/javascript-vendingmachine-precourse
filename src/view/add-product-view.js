export default class AddProductView {

    renderAddedProductList(products) {
        const productTable = document.querySelector("table");
        productTable.innerHTML = '';
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