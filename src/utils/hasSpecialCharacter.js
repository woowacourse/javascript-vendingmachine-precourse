function hasSpecialCharacter(str) {
  const pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  return pattern.test(str);
}

export default hasSpecialCharacter;
