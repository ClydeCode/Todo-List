import { setTitle, setActive, rotateArrow, toggleList } from './DOM'
import { inboxContent } from './Todo'

function initInbox() {
    setActive('inbox');
    setTitle('Inbox');
    inboxContent();
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

export { initInbox, initToday, initUpcoming, expandProjects }