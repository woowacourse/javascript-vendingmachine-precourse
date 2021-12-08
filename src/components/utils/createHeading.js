const createHeading = (level, text) => {
  const heading = document.createElement(`h${level}`);
  heading.innerText = text;

  return heading;
};

export default createHeading;
