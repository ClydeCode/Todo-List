import { createList, changeIndicatorColor } from './DOM';
import { getItems, setPriority, showPriority } from './storage';
import { compareAsc, isToday, isThisWeek } from 'date-fns';

function inboxContent() {
    let arr = sortArray(getArray());
    create(arr);
}

function todayContent() {
    let arr = sortArray(getArray());
    arr = arr.filter(item => isToday(new Date(item.date)));
    console.log(arr)
    create(arr);
}

function upcomingContent() {
    let arr = sortArray(getArray());
    arr = arr.filter(item => isThisWeek(new Date(item.date)));
    create(arr);
}

function sortArray(array) {
    return array.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
}

function create(arr) {
    arr.forEach(item => createList(item.title, item.date, item.id));
    setPriorities(arr);
}

function setPriorities(array) {
    array.forEach(item => changeIndicatorColor(`svg-${item.id}`));
}

function getArray() {
    return getItems();
}

function changePriority(id) {
    let goodId = id.split('-');
    const _id = goodId[1];

    let priority = showPriority(_id);

    if (priority < 2) {
        setPriority(_id, ++priority)
    }
    else {
        setPriority(_id, 0);
    }
    
    changeIndicatorColor(id);
}

export { inboxContent, todayContent, upcomingContent, changePriority }