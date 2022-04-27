let todos = [];
let projects = [];

projects[0] = {name : 'Homework'}

todos[0] = {
    id : 0,
    title : 'pav',
    date : '2022/01/03',
    priority: 0
}

todos[1] = {
    id : 1,
    title : 'pavss',
    date : '2022/04/22',
    priority: 0
}

todos[2] = {
    id : 2,
    title : 'pavssss',
    date : '2022/04/23',
    priority: 0
}

todos[3] = {
    id : 3,
    title : 'pavsssss',
    date : '2022/04/24',
    priority: 0
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
}

function addProject(title) {
    const project = {id : projects.length, title};
    projects.push(project);
}

function removeItem(id) {
    todos.forEach((item, index) => {
        if (item.id == id) {
            todos.splice(index, 1);
        }
    }); 
}

function setPriority(id, number) {
    todos.forEach(item => {
        if (item.id == id) item.priority = number;
    });
}

function showPriority(id) {
    let priority;
    todos.forEach(item => {
        if (item.id == id) priority = item.priority;
    });
    return priority;
}

function getItems() {
    return todos;
}

function getProjects() {
    return projects;
}

export { addItem, addProject, removeItem, getItems, setPriority, showPriority, getProjects }