import Td from './td.js';

const TdById = (text, id) => {
  const tdById = Td(text);
  tdById.setAttribute('id', id);
  return tdById;
};

export default TdById;