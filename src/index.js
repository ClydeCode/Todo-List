import './styles.css';
import icon1 from './assets/icon-suitcase.png';
import icon2 from './assets/icon-travel-book.png';
import icon3 from './assets/icon-traveler.png';
import icon4 from './assets/layers.png';
import icon5 from './assets/icon-expand-arrow.png';
import icon6 from './assets/x.png';
import { initInbox, initToday, initUpcoming, expandProjects, initProjects } from './pages'
import { changePriority, deleteTodo, refresh } from './Todo';

const pages = document.querySelectorAll('.page');

initInbox();
initProjects();

pages.forEach(page => page.addEventListener('click', () => {
    switch(page.id) {
        case 'inbox':
            initInbox();
            break;
        case 'today':
            initToday();
            break;
        case 'upcoming':
            initUpcoming();
            break;
        case 'projects':
            expandProjects();
            break;
    };
}));

document.addEventListener('click', (e) => {
    if (e.target.className === 'button-x') {
        deleteTodo(e.target.id);
        refresh();
    }
    
    if (e.target.tagName === 'svg') changePriority(e.target.id);

    if (e.target.parentNode.tagName === 'svg') changePriority(e.target.parentNode.id);
});