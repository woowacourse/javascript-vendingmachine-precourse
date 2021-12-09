const insertAbleProductsToTable = (name, price, quantity) => {
  const $ableBuyProductTable = document.getElementById(
    "able-buy-product-table",
  );
  $ableBuyProductTable.innerHTML += `
    <tr class="product-purchase-item">
      <td class="product-purchase-name" data-product-name=${name}>${name}</td>
      <td class="product-purchase-price" data-product-price=${price}>${price}</td>
      <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
      <td>
        <button class="purchase-button">구매하기</button>
      </td>
    </tr>
  `;
};

const makeEmptyTable = () => {
  const $ableBuyProductTable = document.getElementById(
    "able-buy-product-table",
  );

  $ableBuyProductTable.innerHTML = `
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
    <th>구매</th>
  `;
};

const showProductsAbleToBuy = () => {
  makeEmptyTable();

  const strOfProducts = JSON.parse(localStorage.getItem("products"));

  if (strOfProducts) {
    const products = strOfProducts.split(",");
    products.forEach(product => {
      const info = product.split("/");
      if (info[2] > 0) {
        insertAbleProductsToTable(info[0], info[1], info[2]);
      }
    });
  }
};

export { showProductsAbleToBuy };
