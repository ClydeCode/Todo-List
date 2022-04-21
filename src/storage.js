let array = [];

function addItem(title, date) {
    const item = {title, date};
    array.push(item);
}

function removeItem(index) {
    array.splice(index, 1);
}

function getItems() {
    return array;
}

export { addItem, removeItem, getItems }