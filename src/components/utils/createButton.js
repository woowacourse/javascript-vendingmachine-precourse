const createButton = (id, text, action) => {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = text;
  button.dataset.action = action;

  return button;
};

export default createButton;
