let todos = [];
let projects = [];

if (localStorage.length > 0) {
    if (localStorage.getItem('projects'))
        projects = JSON.parse(localStorage.getItem('projects'));
    console.log(projects)

    if (localStorage.getItem('todos'))
        todos = JSON.parse(localStorage.getItem('todos'));
    console.log(todos)
}

todos[0] = {id : 0, title : 'Homework', date : '2022/04/28', priority : 0, project : false}
todos[1] = {id : 1, title : 'Car remont', date : '2022/04/30', priority : 0, project : false}
todos[2] = {id : 2, title : 'Darbo pokalbis su Minde', date : '2022/04/25', priority : 0, project : false}
todos[3] = {id : 3, title : 'Atostogos', date : '2022/05/02', priority : 0, project : false}

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
    const project = {id : projects.length, title};
    projects.push(project);
    saveArrayToStorage('projects');
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

export { addItem, addProject, removeItem, removeProject, getItems, setPriority, showPriority, getProjects }