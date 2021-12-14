export const setDOM = (node) => document.body.appendChild(node);

export const createDiv = (id) => {
  const div = document.createElement("div");
  div.setAttribute("id", id);

  return div;
}

export const createButton = (id, innerText) => {
  const button = document.createElement("button");
  button.innerHTML = innerText;
  button.setAttribute("id", id);

  return button;
};

export const createTable = (className, headValue) => {
  const table = document.createElement("table");
  table.setAttribute("class", className);
  
  headValue.forEach((val) => {
    const items = document.createElement("th");
    items.innerHTML = val;

    table.appendChild(items);
  });

  return table;
};

export const createTd = (className, itemClass, valueArr) => {
  const table = document.querySelector(`.${className}`);
  const tr = document.createElement("tr");
  
  valueArr.forEach((val, index) => {
    const items = document.createElement("td");
    items.setAttribute("class", itemClass[index]);
    items.innerHTML = val;
    
    tr.appendChild(items);
  });

  table.appendChild(tr);
};

export const createInput = (id, type, innerText) => {
  const input = document.createElement("input");
  input.setAttribute("placeholder", innerText);
  input.setAttribute("id", id);
  input.setAttribute("type", type);

  return input;
};

export const createText = (textValue) => {
  const text = document.createElement("h3");
  text.innerHTML = textValue;

  return text;
};

export const createPtag = (textValue, id) => {
  const text = document.createElement("p");
  text.setAttribute("id", id);
  text.innerHTML = textValue;

  return text;
};