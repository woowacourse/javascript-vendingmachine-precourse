import Input from './input.js';

const InputById = (text, id) => {
  const inputById = Input(text);
  inputById.setAttribute('id', id);
  return inputById;
};

export default InputById;