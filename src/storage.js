export const save = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const find = (key) => {
  const data = localStorage.getItem(key);
  if (!data) {
    return null;
  }

  return JSON.parse(data);
};
