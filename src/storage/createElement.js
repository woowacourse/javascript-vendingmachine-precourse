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

export const createTable = (columns) => {
    const table = document.createElement("table");
    table.className = "table";
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

export const appendTable = (tr, object, ...className) => {
    const table = document.querySelector(".table");
    const tableBodyRow = document.createElement("tr");
    tableBodyRow.className = tr;

    className.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = object.$name;
        tableBodyRow.appendChild(td);
    });
    table.appendChild(tableBodyRow);
};
