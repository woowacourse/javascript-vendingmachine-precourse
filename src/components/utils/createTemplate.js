import createElement from './createElement.js';
import createDivision from './createDivision.js';
import createHeading from './createHeading.js';

const createTemplate = (id, title, child) => {
  const template = createDivision({ id });
  const heading = createHeading(3, title);
  const container = createElement('p');
  container.appendChild(child);

  template.appendChild(heading);
  template.appendChild(container);

  return template;
};

export default createTemplate;
