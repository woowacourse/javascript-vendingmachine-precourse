export const setDOM = (node) => document.body.appendChild(node);

export const createButton = (id, innerText) => {
  const button = document.createElement("button");
  button.innerHTML = innerText;
  button.setAttribute("id", id);

  setDOM(button);
};

export const createTable = (className, headValue) => {
  const table = document.createElement("table");
  table.setAttribute("class", className);
  
  const th = headValue.forEach((val) => {
    const items = document.createElement("th");
    items.innerHTML = val;

    table.appendChild(th);
  });

  setDOM(table);
};

export const createTd = (className, valueArr) => {
  const table = document.querySelector(`.${className}`);
  const tr = document.createElement("tr");
  
  const td = valueArr.map((val) => {
    const items = document.createElement("td");
    items.innerHTML = val;
    
    return items;
  });

  tr.appendChild(td);
  table.appendChild(tr);
};

export const createInput = (id, type, innerText) => {
  const input = document.createElement("input");
  input.innerHTML = innerText;
  input.setAttribute("id", id);
  input.setAttribute("type", type);

  setDOM(input);
};

export const createText = (textValue) => {
  const text = document.createElement("h3");
  text.innerHTML = textValue;

  setDOM(text);
};