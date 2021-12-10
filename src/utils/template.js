export const productTableHeader = `
  <tr>
    <td>상품명</td>
    <td>가격</td>
    <td>수량</td>
  </tr>
`;

export const productTableContents = list => {
  let html = '';
  list.map(({ name, price, quantity }) => {
    html += `
      <tr>
        <td>${name}</td>
        <td>${price}</td>
        <td>${quantity}</td>
      </tr>
    `;
  });

  return html;
};
