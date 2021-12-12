export const createButton = (id, innerText) => {
  const button = document.createElement("button");
  button.innerHTML = innerText;
  button.setAttribute("id", id);

  return button;
};

export const createTable = (className, headValue) => {
  const table = document.createElement("table");
  table.setAttribute("class", className);
  
  const th = headValue.map((val) => {
    const items = document.createElement("th");
    items.innerHTML = val;

    return items;
  });

  table.appendChild(th);

  return table;
};

export const createTd = (valueArr) => {
  const tr = document.createElement("tr");
  
  const td = valueArr.map((val) => {
    const items = document.createElement("td");
    items.innerHTML = val;
    
    return items;
  });

  tr.appendChild(td);

  return tr;
};

export const createInput = (id, type, innerText) => {
  const input = document.createElement("input");
  input.innerHTML = innerText;
  input.setAttribute("id", id);
  input.setAttribute("type", type);

  return input;
};

export const titleText = (textValue) => {
  const text = document.createElement("h3");
  text.innerHTML = textValue;

  return text;
};