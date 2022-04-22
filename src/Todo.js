import { createList } from './DOM';
import { getItems } from './storage'

function inboxContent() {
    let arr = getItems();
    arr = sortArray(arr);
    arr.forEach(item => createList(item.title, item.date));
}

function sortArray(array) {
    return array.sort((a, b) => new Date (a.date) - new Date (b.date));
}

export { inboxContent }