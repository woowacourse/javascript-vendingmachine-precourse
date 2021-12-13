import { clickHandler } from "./initialPresent.js";
import { EMPTY } from "./constant.js";
import { purchase } from "../purchase/calc.js";
export const createTitle = (text) => {
    const $h3 = document.createElement("h3");
    $h3.textContent = text;
    return $h3;
};

export const createInput = (id, text) => {
    const $input = document.createElement("input");
    $input.id = id;
    $input.placeholder = text;

    return $input;
};

export const createSpan = (id, text) => {
    const $span = document.createElement("span");
    $span.id = id;
    $span.innerText = text;
    return $span;
};

export const createBr = () => {
    const $br = document.createElement("br");

    return $br;
};

export const createTab = (id, text) => {
    const $tab = document.createElement("button");
    $tab.id = id;
    $tab.innerText = text;
    $tab.addEventListener("click", function (e) {
        e.preventDefault();
        clickHandler(e.target.id);
    });
    return $tab;
};

export const createButton = (id, text) => {
    const $button = document.createElement("button");
    $button.id = id;
    $button.innerText = text;

    return $button;
};

export const createDiv = (id) => {
    const $div = document.createElement("div");
    $div.id = id;
    return $div;
};

export const appendDiv = (div, arr) => {
    arr.forEach((element) => div.appendChild(element));
};

export const createTable = (table_name, columns) => {
    const table = document.createElement("table");
    table.className = table_name;
    const tableHead = document.createElement("thead");
    tableHead.className = "tableHead";
    const tableHeaderRow = document.createElement("tr");
    tableHeaderRow.className = "tableHeaderRow";
    columns.forEach((header) => {
        const tableHeader = document.createElement("th");
        tableHeader.innerText = header;
        tableHeaderRow.append(tableHeader);
    });
    tableHead.append(tableHeaderRow);
    table.append(tableHead);
    const tableBody = document.createElement("tbody");
    table.append(tableBody);

    return table;
};

export const appendTable = (table_name, tr, object, ...className) => {
    const table = document.querySelector(`.${table_name}`);
    const tableBodyRow = document.createElement("tr");
    tableBodyRow.className = tr;
    className.forEach((element, idx) => {
        const td = document.createElement("td");
        if (idx !== 3) {
            const val = addColms(idx, td, object);
            td.className = element;
            td.innerText = val;
        } else {
            addPurchaseButtons(tableBodyRow, element, td);
        }
        tableBodyRow.append(td);
    });

    table.append(tableBodyRow);
};

const addColms = (idx, td, object) => {
    if (idx === 0) {
        td.dataset.productName = object.name;
        return object.name;
    } else if (idx === 1) {
        td.dataset.productPrice = object.price;
        return object.price;
    } else if (idx === 2) {
        td.dataset.productQuantity = object.amount;
        return object.amount;
    }
};

const addPurchaseButtons = (rows, element, td) => {
    const button = document.createElement("button");
    button.className = element;
    button.innerText = "구매하기";
    button.addEventListener("click", function (e) {
        e.preventDefault();
        purchase(rows);
    });
    td.append(button);
};

export const setChargeTableRows = (table_class, arr) => {
    const $table = document.querySelector(`.${table_class}`);
    arr.forEach((element) => {
        const tr = document.createElement("tr");
        const name = document.createElement("td");
        name.innerText = element[0];
        const count = document.createElement("td");
        count.id = element[1];
        tr.append(name, count);
        $table.append(tr);
    });
};

export const clearInput = (...elements) => {
    elements.forEach((element) => (element.value = EMPTY));
};
