function style() {
  const buttons = document.querySelectorAll("button");
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].style.margin = "5px";
  }

  const inputs = document.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i += 1) {
    inputs[i].style.margin = "2px";
  }
}

function thStyle() {
  const ths = document.querySelectorAll("th");
  for (let i = 0; i < ths.length; i += 1) {
    ths[i].style.border = "1px solid #444444";
    ths[i].style.padding = "10px";
  }
}

function trStyle() {
  const trs = document.querySelectorAll("tr");
  for (let i = 0; i < trs.length; i += 1) {
    trs[i].style.border = "1px solid #444444";
  }
}

function tdStyle() {
  const tds = document.querySelectorAll("td");
  for (let i = 0; i < tds.length; i += 1) {
    tds[i].style.border = "1px solid #444444";
    tds[i].style.padding = "10px";
  }
}

function tableStyle() {
  const table = document.querySelector("table");
  table.style.border = "1px solid #444444";
  table.style.borderCollapse = "collapse";
  thStyle();
  trStyle();
  tdStyle();
}

export { style, tableStyle };
