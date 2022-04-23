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
    div.innerHTML = name;

    const divDate = document.createElement('div');
    divDate.className = 'date';
    divDate.innerHTML = date;

    tabs.appendChild(div);
    div.insertBefore(createIndicator(id), div.firstChild);
    divDate.appendChild(createDeleteBtn());
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

function createDeleteBtn() {
    const img = document.createElement('img');
    img.src = './icons/9fc7b42bf4ed81bf00dd.png'
    img.className = 'button-x';

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
    rotation += 180;
}

function toggleList() {
    if (document.querySelector('.projects-list').style.visibility === '' ||
        document.querySelector('.projects-list').style.visibility === 'visible')
            document.querySelector('.projects-list').style.visibility = 'hidden';
    else
        document.querySelector('.projects-list').style.visibility = 'visible';
}

function createProject(name) {
    const lists = document.querySelector('.projects-list');
    const list = document.createElement('div');
    list.className = 'list';
    list.innerHTML = name;

    const lastChild = document.querySelector('.list.last');

    lists.insertBefore(list, lastChild);
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

export { setTitle, createList, setActive, rotateArrow, toggleList, createProject, wipeContent, changeIndicatorColor };