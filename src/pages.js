import { setTitle, setActive, rotateArrow, toggleList, createList, createProject } from './DOM'
import { getItems } from './storage';

function initInbox() {
    setActive('inbox');
    setTitle('Inbox');
    inboxContent();
    createProject('xdd');
}

function initToday() {
    setActive('today');
    setTitle('Today');
}

function initUpcoming() {
    setActive('upcoming');
    setTitle('Upcoming');
}

function expandProjects() {
    rotateArrow();
    toggleList();
}

function inboxContent() {
    const arr = getItems();
    arr.forEach(item => createList(item.title, item.date));
}

export { initInbox, initToday, initUpcoming, expandProjects }