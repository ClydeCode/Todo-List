let rotation = 180;

function setTitle(name) {
    const title = document.querySelector('.title');
    title.innerHTML = name;
}

function createList(name, date) {
    const tabs = document.querySelector('.tabs');

    const div = document.createElement('div');
    div.className = 'tab';
    div.innerHTML = name;

    const divDate = document.createElement('div');
    divDate.className = 'date';
    divDate.innerHTML = date;

    tabs.appendChild(div);
    div.insertBefore(createIndicator(), div.firstChild);
    div.appendChild(divDate);
}

function createIndicator() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    svg.setAttribute('height', '18');
    svg.setAttribute('width', '18');

    circle.setAttribute('cx', '9');
    circle.setAttribute('cy', '9');  
    circle.setAttribute('r', '5');
    circle.setAttribute('stroke', 'black');

    svg.appendChild(circle);

    return svg;
};

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

function hideList() {
    if (document.querySelector('.projects-list').style.visibility === '' ||
    document.querySelector('.projects-list').style.visibility === 'visible')
        document.querySelector('.projects-list').style.visibility = 'hidden';
    else
        document.querySelector('.projects-list').style.visibility = 'visible';
}

export { setTitle, createList, setActive, rotateArrow, hideList };