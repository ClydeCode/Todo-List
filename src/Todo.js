import { createList } from './DOM';
import { getItems } from './storage';
import { compareAsc, isToday, isThisWeek } from 'date-fns';

const array = getItems();

function inboxContent() {
    let arr = sortArray(array);
    create(arr);
}

function todayContent() {
    let arr = sortArray(array);
    arr = arr.filter(item => isToday(new Date(item.date)));
    create(arr);
}

function upcomingContent() {
    let arr = sortArray(array);
    arr = arr.filter(item => isThisWeek(new Date(item.date)));
    create(arr);
}

function sortArray(array) {
    return array.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
}

function create(arr) {
    arr.forEach(item => createList(item.title, item.date));
}

export { inboxContent, todayContent, upcomingContent }