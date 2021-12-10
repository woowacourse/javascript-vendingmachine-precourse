// eslint-disable-next-line import/prefer-default-export
export const mapObject = (obj, f) =>
  Object.fromEntries(Object.entries(obj).map(f));
