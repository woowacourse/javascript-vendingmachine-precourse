const error = {
  message: '',
};

export const showError = () => {
  alert(error.message);
};

export const setErrorMessage = (message) => {
  error.message = message;

  return false;
};
