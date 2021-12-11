const makeButton = (text, id, type) => {
  const $button = document.createElement('button');
  $button.appendChild(document.createTextNode(text));
  $button.setAttribute('id', id);

  if (type) {
    $button.setAttribute('type', type);
  }

  return $button;
};

export default makeButton;
