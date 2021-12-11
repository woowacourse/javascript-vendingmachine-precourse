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

export const appendTable = (tr, ...object) => {
    const table = document.querySelector(".table");
    const tableBodyRow = document.createElement("tr");
    tableBodyRow.className = tr;

    // 여기서 동저으로 추가되는 object 들은 따로 생각을 할 필요가 있을 듯...
    // 이거 그냥 모듈화 하지 말고 따로 추가해야 할듯. 너무 다름.
    /**
     * 1. 그냥 html return 하도록 값 짜기.
     */

    object.forEach((element) => {
        const td = document.createElement("td");
        td.innerText = element;
        tableBodyRow.appendChild(td);
    });
    table.appendChild(tableBodyRow);
};
