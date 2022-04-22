import { setTitle, setActive, rotateArrow, toggleList, wipeContent } from './DOM'
import { inboxContent } from './Todo'

function initInbox() {
    wipeContent();
    setActive('inbox');
    setTitle('Inbox');
    inboxContent();
}

function initToday() {
    wipeContent();
    setActive('today');
    setTitle('Today');
}

function initUpcoming() {
    wipeContent();
    setActive('upcoming');
    setTitle('Upcoming');
}

function expandProjects() {
    rotateArrow();
    toggleList();
}

export { initInbox, initToday, initUpcoming, expandProjects }