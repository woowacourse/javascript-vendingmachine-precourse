import createDivision from './createDivision.js';
import createHeading from './createHeading.js';

const createTemplate = (id, title) => {
  const template = createDivision({ id });
  const heading = createHeading(3, title);

  template.appendChild(heading);

  return template;
};

export default createTemplate;
