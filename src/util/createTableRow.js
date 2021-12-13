import createDocumentElement from "./createDocumentElement";

function createTableRow(Table, innerText, id) {
    const tableRow = document.createElement("tr");
    const coin = createDocumentElement("td", innerText);
    const coinAmount = createDocumentElement("td", "", id);

    Table.appendChild(tableRow);
    tableRow.appendChild(coin);
    tableRow.appendChild(coinAmount);
}

export default createTableRow;
