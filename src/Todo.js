import { createList } from './DOM';
import { getItems } from './storage'

function inboxContent() {
    const arr = getItems();
    arr.forEach(item => createList(item.title, item.date));
}

export { inboxContent }