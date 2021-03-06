let todos = [];
let projects = [];

if (localStorage.length > 0) {
    if (localStorage.getItem('projects'))
        projects = JSON.parse(localStorage.getItem('projects'));

    if (localStorage.getItem('todos'))
        todos = JSON.parse(localStorage.getItem('todos'));
}

function addItem(title, date, project = false) {
    const item = {
        id : todos.length,
        title, 
        date,
        priority : 0,
        project
    };
    todos.push(item);
    saveArrayToStorage('todos');
}

function addProject(title) {
    const project = {id : projects.length + 1, title};
    projects.push(project);
    saveArrayToStorage('projects');
}

function editTitle(title, id) {
    todos.forEach(item => {
        if (item.id == id) item.title = title;
    });
    saveArrayToStorage('todos');
}

function editDate(date, id) {
    todos.forEach(item => {
        if (item.id == id) item.date = date;
    });
    saveArrayToStorage('todos');
}

function removeItem(id) {
    todos.forEach((item, index) => {
        if (item.id == id) todos.splice(index, 1);
    }); 
    saveArrayToStorage('todos');
}

function removeProject(id) {
    projects.forEach((project, index) => {
        if (project.id == id) projects.splice(index, 1);
    });
    saveArrayToStorage('projects');
}

function setPriority(id, number) {
    todos.forEach(item => {
        if (item.id == id) item.priority = number;
    });
    saveArrayToStorage('todos');
}

function showPriority(id) {
    let priority;
    todos.forEach(item => {
        if (item.id == id) priority = item.priority;
    });
    return priority;
}

function saveArrayToStorage(name) {
    if (name === 'todos') localStorage.setItem('todos', JSON.stringify(todos));
    if (name === 'projects') localStorage.setItem('projects', JSON.stringify(projects));
}

function getItems() {
    return todos;
}

function getProjects() {
    return projects;
}

export { addItem, addProject, editTitle, editDate, removeItem, removeProject, getItems, setPriority, showPriority, getProjects }