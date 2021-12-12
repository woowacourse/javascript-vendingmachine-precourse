export const Container = (id) => {
  const container = document.createElement('div');
  container.setAttribute('id', id);

  return container;
};

export const Title = (text) => {
  const title = document.createElement('h1');
  title.innerHTML = text;

  return title;
};

export const SubTitle = (text) => {
  const subTitle = document.createElement('h3');
  subTitle.innerHTML = text;

  return subTitle;
};

export const Nav = (id) => {
  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  return nav;
};

export const Button = (title, id, callBack) => {
  const button = document.createElement('button');
  button.innerHTML = title;
  button.setAttribute('id', id);
  button.addEventListener('click', callBack);

  return button;
};

export const Input = (id, type, placeholder) => {
  const input = document.createElement('input');
  input.setAttribute('id', id);
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder);

  return input;
};

export const Form = () => {
  const form = document.createElement('form');

  return form;
};

export const Span = (text, id) => {
  const span = document.createElement('span');
  span.innerHTML = text;

  return span;
};

export const SpanWithId = (text, id) => {
  const span = Span(text);
  span.setAttribute('id', id);

  return span;
};

export const Table = (id) => {
  const table = document.createElement('table');
  table.setAttribute('id', id);

  return table;
};

export const TableHead = (table, titles) => {
  titles.forEach((title) => {
    const th = document.createElement('th');
    th.innerHTML = title;
    table.append(th);
  });
};

export const TableRow = () => {
  const tr = document.createElement('tr');

  return tr;
};

export const TableRowWithClassName = (className) => {
  const tableRow = TableRow();
  tableRow.setAttribute('class', className);

  return tableRow;
};

export const TableData = (data) => {
  const td = document.createElement('td');
  td.innerHTML = data;

  return td;
};

export const TableDataWithClassName = (data, className) => {
  const tableData = TableData(data);
  tableData.setAttribute('class', className);

  return tableData;
};

export const TableDataWithId = (data, id) => {
  const tableData = TableData(data);
  tableData.setAttribute('id', id);

  return tableData;
};
