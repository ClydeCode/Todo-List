import './styles.css';
import icon1 from './assets/icon-suitcase.png';
import icon2 from './assets/icon-travel-book.png';
import icon3 from './assets/icon-traveler.png';
import icon4 from './assets/layers.png';
import icon5 from './assets/icon-expand-arrow.png';
import icon6 from './assets/x.png';
import { initInbox, initToday, initUpcoming, expandProjects } from './pages'
import { setPriority } from './Todo';

const pages = document.querySelectorAll('.page');
const svgs = document.getElementsByTagName('svg');

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

Array.prototype.forEach.call(svgs, (svg) => svg.addEventListener('click', () => setPriority(svg.id)));