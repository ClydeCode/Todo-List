import './styles.css';
import icon1 from './assets/icon-suitcase.png';
import icon2 from './assets/icon-travel-book.png';
import icon3 from './assets/icon-traveler.png';
import icon4 from './assets/layers.png';
import icon5 from './assets/icon-expand-arrow.png';
import icon6 from './assets/x.png';
import { initInbox, initToday, initUpcoming, expandProjects, initProjects, loadProject } from './pages';
import { changePriority, deleteProject, deleteTodo, editTodoTitle, refresh } from './Todo';
import { editDate } from './storage';

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
    if (e.target.className === 'text') {
        e.target.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                let id = e.target.parentNode.firstChild.id.split('-');
                editTodoTitle(e.target.textContent, id[1]);
                refresh();
            };
        });
    };

    if (e.target.className === 'date-picker') {
        e.target.addEventListener('change', () => {
            editDate(e.target.value, e.target.parentNode.children[1].id);
            refresh();
        });
    }

    if (e.target.className === 'button-x') {
        deleteTodo(e.target.id);
        refresh();
    };
    
    if (e.target.tagName === 'svg') {
        changePriority(e.target.id);
        refresh();
    };

    if (e.target.parentNode.tagName === 'svg') {
        changePriority(e.target.parentNode.id);
        refresh();
    };

    if (e.target.className === 'list') loadProject(e.target.textContent);

    if (e.target.className === 'list-delete-button') {
        deleteProject(e.target.id);
        initProjects();
    };
});