import { createList, changeIndicatorColor, wipeContent, createProject, cleanList } from './DOM';
import { addItem, editTitle, getItems, getProjects, removeItem, removeProject, setPriority, showPriority } from './storage';
import { compareAsc, compareDesc, isToday, isThisWeek } from 'date-fns';

function inboxContent() {
    let arr = sortArray(getArray());
    create(arr);
}

function todayContent() {
    let arr = sortArray(getArray());
    arr = arr.filter(item => isToday(new Date(item.date)));
    create(arr);
}

function upcomingContent() {
    let arr = sortArray(getArray());
    arr = arr.filter(item => isThisWeek(new Date(item.date)));
    create(arr);
}

function projectContent(projectId) {
    const id = projectId.split('-');
    let arr = sortArray(getArray());
    arr = arr.filter(item => item.project == id[1]);
    create(arr);
}

function loadProjects() {
    const projects = getProjects();

    cleanList();

    projects.forEach(project => createProject(project.title, project.id));
}

function sortArray(array) {
    let arr;

    var isChromium = !!window.chrome;

    if (isChromium)
        arr = array.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
    else
        arr = array.sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)));
    
    return arr.sort((a, b) => a.priority < b.priority ? 1 : -1);
}

function create(arr) {
    arr.forEach(item => createList(item.title, item.date, item.id));
    setPriorities(arr);
}

function createDefaultTab(project) {
    addItem('Title', new Date(), project);
}

function editTodoTitle(title, id) {
    editTitle(title, id);
}

function deleteTodo(id) {
    removeItem(id);
}

// function removeTodosByProject(projectId) {
//     const arr = getArray();

//     arr.forEach(item => {
//         if (item.project == projectId) deleteTodo(item.id);
//     });
// }

function deleteProject(id) {
    removeProject(id);
}

function refresh() {
    const active = document.querySelector('.active').id;

    wipeContent();

    switch(active) {
        case 'inbox':
            inboxContent();
            break;
        case 'today':
            todayContent();
            break;
        case 'upcoming':
            upcomingContent();
            break;
        default:
            projectContent(active);
            break;
    }
}

function setPriorities(array) {
    array.forEach(item => changeIndicatorColor(`svg-${item.id}`));
}

function getArray() {
    return getItems();
}

function changePriority(id) {
    let goodId = id.split('-');
    const _id = goodId[1];

    let priority = showPriority(_id);

    if (priority < 2) {
        setPriority(_id, ++priority)
    }
    else {
        setPriority(_id, 0);
    }
    
    changeIndicatorColor(id);
}

export { inboxContent, todayContent, upcomingContent, changePriority, refresh, deleteTodo, loadProjects, projectContent, deleteProject, editTodoTitle, createDefaultTab }
