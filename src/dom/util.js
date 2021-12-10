const elementCreator = (tagName, id, text) => {
    const element = document.createElement(tagName);
    element.setAttribute("id",id);
    element.innerHTML = text;

    return element;
}

export default elementCreator;