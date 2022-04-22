import { createList } from './DOM';
import { getItems } from './storage'

function inboxContent() {
    const arr = getItems();
    arr.sort((a, b) => new Date (a.date) - new Date (b.date))
    arr.forEach(item => createList(item.title, item.date));
}

export { inboxContent }