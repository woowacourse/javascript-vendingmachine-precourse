import createElement from './createElement.js';
import createDivision from './createDivision.js';
import createHeading from './createHeading.js';

const createTemplate = (title, child) => {
  const template = createDivision();
  const heading = createHeading(2, title);
  const container = createElement('p');
  container.appendChild(child);

  template.appendChild(heading);
  template.appendChild(container);

  return template;
};

export default createTemplate;
