const makeTitle = (text) => {
  const $title = document.createElement('h3');
  $title.appendChild(document.createTextNode(text));

  return $title;
};

export default makeTitle;
