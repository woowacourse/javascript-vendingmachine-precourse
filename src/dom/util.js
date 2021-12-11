const elementCreator = (tagName, id, text) => {
    const element = document.createElement(tagName);
    if(id !== null){
        element.setAttribute("id",id);
    }
    if(text !== null){
        element.innerHTML = text;
    }

    return element;
}

export default elementCreator;