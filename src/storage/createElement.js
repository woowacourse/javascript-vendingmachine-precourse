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

export const createDiv = (id) => {
    const $div = document.createElement("div");
    $div.id = id;
    return $div;
};
