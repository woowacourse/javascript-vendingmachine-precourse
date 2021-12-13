function createDocumentElement(tag, innerText, id='', placeholder='', ) {
    const newElement = document.createElement(tag);

    newElement.id = id;
    newElement.placeholder = placeholder;
    newElement.innerText = innerText;

    return newElement;
}

export default createDocumentElement;
