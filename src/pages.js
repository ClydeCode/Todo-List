import { setTitle, setActive, rotateArrow, toggleList, wipeContent } from './DOM'
import { inboxContent, loadProjects, todayContent, upcomingContent } from './Todo'

function initInbox() {
    initialize('inbox');
    inboxContent();
}

function initToday() {
    initialize('today');
    todayContent();
}

function initUpcoming() {
    initialize('upcoming');
    upcomingContent();
}

function expandProjects() {
    rotateArrow();
    toggleList();
}

function initProjects() {
    loadProjects();
}

function initialize(name) {
    wipeContent();
    setActive(name);
    setTitle(name);
}

export { initInbox, initToday, initUpcoming, expandProjects, initProjects }