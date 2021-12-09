export const clearArea = container => {
  container.innerText = "";
};

export const clearInputValue = (...inputs) => {
  inputs.forEach(input => {
    input.value = "";
  });
};
