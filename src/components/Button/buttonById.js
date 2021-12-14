import Button from './button.js';

const ButtonById = (text, id) => {
  const button = Button(text);
  button.setAttribute('id', id);
  return button;
};

export default ButtonById;