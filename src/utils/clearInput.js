export const clearInput = (...$input) => {
  $input.forEach(input => (input.value = ''));
};
