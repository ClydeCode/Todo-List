import './styles.css';
import icon1 from './assets/icon-suitcase.png';
import icon2 from './assets/icon-travel-book.png';
import icon3 from './assets/icon-traveler.png';
import icon4 from './assets/layers.png';
import icon5 from './assets/icon-expand-arrow.png';
import icon6 from './assets/x.png';
import { initInbox, initToday, initUpcoming, expandProjects } from './pages'
import { changePriority, deleteTodo, refresh } from './Todo';

const pages = document.querySelectorAll('.page');
const svgs = document.getElementsByTagName('svg');

initInbox();
addEventListenersToSVG();

pages.forEach(page => page.addEventListener('click', () => {
    switch(page.id) {
        case 'inbox':
            initInbox();
            addEventListenersToSVG();
            break;
        case 'today':
            initToday();
            addEventListenersToSVG();
            break;
        case 'upcoming':
            initUpcoming();
            addEventListenersToSVG();
            break;
        case 'projects':
            expandProjects();
            break;
    };
}));

function addEventListenersToSVG() {
    Array.prototype.forEach.call(svgs, (svg) => svg.addEventListener('click', () => changePriority(svg.id)));
}

document.addEventListener('click', (e) => {
    if (e.target.className === 'button-x') {
        deleteTodo(e.target.id);
        refresh();
    }
});