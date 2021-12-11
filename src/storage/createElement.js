import { clickHandler } from "./initialPresent.js";

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

export const createParagraph = (id, text) => {
    const $p = document.createElement("p");
    $p.id = id;
    $p.innerText = text;
    return $p;
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
        let val;
        if (idx === 0) val = object.name;
        else if (idx === 1) val = object.price;
        else if (idx === 2) val = object.amount;
        td.className = element;
        td.innerText = val;
        tableBodyRow.append(td);
    });

    table.append(tableBodyRow);
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
