import { lightFormat } from 'date-fns'
import { showPriority } from "./storage";

let rotation = 180;

const WHITE = '#ffffff';
const GREEN = '#43f071';
const BLUE = '#007bff';

function setTitle(name) {
    const title = document.querySelector('.title');
    title.innerHTML = name;
}

function createList(name, date, id) {
    const tabs = document.querySelector('.tabs');

    const div = document.createElement('div');
    div.className = 'tab';

    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = name;
    text.contentEditable = 'true';

    const divDate = document.createElement('div');
    divDate.className = 'date';

    const forInputDiv = document.createElement('div');
    forInputDiv.className = 'forInput';

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.className = 'date-picker';
    inputDate.setAttribute('value', lightFormat(new Date(date), 'yyyy-MM-dd'));
    inputDate.required = true;

    tabs.appendChild(div);
    div.insertBefore(createIndicator(id), div.firstChild);
    forInputDiv.appendChild(text);
    div.appendChild(forInputDiv);
    divDate.appendChild(inputDate);
    divDate.appendChild(createDeleteBtn(id));
    div.appendChild(divDate);
}

function createIndicator(id) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    svg.setAttribute('height', '18');
    svg.setAttribute('width', '18');
    svg.id = `svg-${id}`;

    circle.setAttribute('cx', '9');
    circle.setAttribute('cy', '9');  
    circle.setAttribute('r', '5');
    circle.setAttribute('stroke', 'black');

    svg.appendChild(circle);

    return svg;
};

function createDeleteBtn(id) {
    const img = document.createElement('img');
    img.src = './icons/9fc7b42bf4ed81bf00dd.png'
    img.className = 'button-x';
    img.id = id;

    return img;
}

function setActive(id) {
    removeAnyActives();

    const element = document.getElementById(id);
    element.classList.add('active');
}

function removeAnyActives() {
    const elements = document.querySelectorAll('.active');
    elements.forEach(item => item.classList.remove('active'));
}

function rotateArrow() {
    document.getElementById('arrow').style.transform = `rotate(${(rotation)+'deg'})`;
    console.log(document.getElementById('arrow').style)
    if (rotation === 180) rotation = 0;
    else {
        rotation = 180;
    };
}

function toggleList() {
    if (document.querySelector('.projects-list').style.visibility === '' ||
        document.querySelector('.projects-list').style.visibility === 'visible')
            document.querySelector('.projects-list').style.visibility = 'hidden';
    else
        document.querySelector('.projects-list').style.visibility = 'visible';
}

function createProject(name, id) {
    const lists = document.querySelector('.projects-list');
    const list = document.createElement('div');
    list.className = 'list';
    list.id = `project-${id}`;
    
    const div = document.createElement('div');
    div.className = 'list-title';
    div.textContent = name;

    const img = document.createElement('img');
    img.src = './icons/9fc7b42bf4ed81bf00dd.png';
    img.className = 'list-delete-button';
    img.id = id;

    const lastChild = document.querySelector('.list.last');

    list.appendChild(div);
    list.appendChild(img);
    lists.insertBefore(list, lastChild);
}

function showProjectWindow() {
    const last_list = document.querySelector('.list.last');
    const lists = document.querySelector('.projects-list');

    const create_window = document.createElement('div');
    create_window.className = 'create-window';

    const div = document.createElement('input');
    div.className = 'create-project-input';

    const button = document.createElement('button');
    button.innerHTML = 'Create';
    button.className = 'create-project-button';

    last_list.remove();
    create_window.appendChild(div);
    create_window.appendChild(button);
    lists.appendChild(create_window);
}

function cleanList() {
    const lists = document.querySelector('.projects-list');

    const lastList = document.createElement('div');
    lastList.className = 'list last';
    lastList.innerText = '+ New Project'

    lists.innerHTML = '';

    lists.appendChild(lastList);
}

function wipeContent() {
    const tabs = document.querySelector('.tabs');
    tabs.innerHTML = '';
}

function changeIndicatorColor(id) {
    const svg = document.querySelector(`#${id}`);
    const goodId = id.split('-');
    const _id = goodId[1];

    if (showPriority(_id) === 0) svg.style.fill = WHITE;
    if (showPriority(_id) === 1) svg.style.fill = GREEN;
    if (showPriority(_id) === 2) svg.style.fill = BLUE;
}

export { setTitle, createList, setActive, rotateArrow, toggleList, createProject, wipeContent, changeIndicatorColor, cleanList, showProjectWindow };