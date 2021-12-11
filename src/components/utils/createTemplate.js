import createDivision from './createDivision.js';
import createHeading from './createHeading.js';

const createTemplate = (id, title, child) => {
  const template = createDivision({ id });
  const heading = createHeading(3, title);

  template.appendChild(heading);
  template.appendChild(child);

  return template;
};

export default createTemplate;
