import { setTitle, setActive, rotateArrow, toggleList, wipeContent } from './DOM'
import { inboxContent, todayContent } from './Todo'

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
    todayContent();
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