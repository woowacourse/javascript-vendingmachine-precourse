export const clearArea = container => {
  container.innerText = "";
};

export const clearInputValue = inputs => {
  inputs.forEach(input => {
    input.value = "";
  });
};

export const isDivideTen = number => number % 10 === 0;

export const isEmpty = value => value === "";
