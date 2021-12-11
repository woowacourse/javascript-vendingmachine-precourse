const makeForm = (inputArray, $submitButton) => {
  const $form = document.createElement('form');

  inputArray.forEach(($input) => {
    $form.appendChild($input);
  });

  $form.appendChild($submitButton);

  return $form;
};

export default makeForm;
