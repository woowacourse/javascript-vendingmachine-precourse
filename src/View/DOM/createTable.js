import createElement from "./createElement.js";

function createTable(tableTitle) {
  const table = createElement("table");
  const tr = createElement("tr");
  tableTitle.forEach((thName) => {
    const th = createElement("th", thName, thName);
    tr.append(th);
  });
  table.append(tr);
  return table;
}

function createTr(className) {
  const tr = createElement("tr");
  tr.className = className;
  return tr;
}

function createTd(className, text) {
  const td = createElement("td", className, text);
  td.className = className;
  return td;
}

export { createTable, createTr, createTd };
