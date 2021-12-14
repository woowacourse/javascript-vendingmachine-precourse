const Tr = tds => {
  const tr = document.createElement('tr');
  tds.forEach(element => {
    tr.appendChild(element);
  });
  return tr;
};

export default Tr;