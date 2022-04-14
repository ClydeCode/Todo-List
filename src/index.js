import './styles.css';
import icon1 from './assets/icon-suitcase.png';
import icon2 from './assets/icon-travel-book.png';
import icon3 from './assets/icon-traveler.png';
import icon4 from './assets/layers.png';
import icon5 from './assets/icon-expand-arrow.png';
import { initInbox } from './inbox';
import { initToday } from './today';
import { initUpcoming } from './upcoming';
import { expandProjects } from './projects';

const pages = document.querySelectorAll('.page');

initInbox();

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