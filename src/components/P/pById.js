import P from './p.js';

const PById = (text, id) => {
  const pById = P(text);
  pById.setAttribute('id', id);
  return pById;
};

export default PById;