export const htmlToElement = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

export const isNaturalNum = (numString) => {
  if (/[^0-9]+/.test(numString)) {
    return false;
  }
  if (parseInt(numString, 10) === 0) {
    return false;
  }
  return true;
};

export const isEmptyString = (str) => {
  return !str.trim();
};
