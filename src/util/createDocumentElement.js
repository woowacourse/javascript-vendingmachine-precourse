function createDocumentElement(tag, innerText, id='', placeholder='', className='') {
    const newElement = document.createElement(tag);

    newElement.id = id;
    newElement.className = className;
    newElement.placeholder = placeholder;
    newElement.innerText = innerText;

    return newElement;
}

export default createDocumentElement;
