const makeInput = (id, type, placeholder) => {
  const $input = document.createElement('input');
  $input.setAttribute('id', id);
  $input.setAttribute('type', type);
  $input.setAttribute('placeholder', placeholder);

  return $input;
};

export default makeInput;
