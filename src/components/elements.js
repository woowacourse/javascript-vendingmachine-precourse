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

export const Button = (title, id) => {
  const button = document.createElement('button');
  button.innerHTML = title;
  button.setAttribute('id', id);

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

export const Table = () => {
  const table = document.createElement('table');

  return table;
};

export const TableHead = (titles) => {
  const heads = titles.map((title) => `<th>${title}</th>`).join('');

  return heads;
};

export const TableRow = (className) => {
  const tr = document.createElement('tr');
  tr.setAttribute('class', className);

  return tr;
};

export const TableData = (data, className) => {
  const td = document.createElement('td');
  td.innerHTML = data;
  td.setAttribute('class', className);

  return td;
};
