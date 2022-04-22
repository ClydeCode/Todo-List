import { createList } from './DOM';
import { getItems } from './storage';
import { compareAsc } from 'date-fns';

const array = getItems();

function inboxContent() {
    let arr = sortArray(array);
    arr.forEach(item => createList(item.title, item.date));
}

function sortArray(array) {
    return array.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
}

export { inboxContent }