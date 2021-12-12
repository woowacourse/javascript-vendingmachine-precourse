import createElement from "./createElement.js";
import { TEXT } from "../../constant/textConstant.js";

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

function createCoinTable(className) {
  const coinTable = createTable([TEXT.COIN, TEXT.COUNT]);
  const coins = [500, 100, 50, 10];
  className.forEach((value, index) => {
    const tr = createTr();
    tr.append(createTd(coins[index], `${coins[index]}원`), createTd(value));
    coinTable.append(tr);
  });
  return coinTable;
}

export { createTable, createTr, createTd, createCoinTable };
