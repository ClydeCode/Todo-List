let array = [];

array[0] = {
    id : 0,
    title : 'pav',
    date : '2022/01/03',
    priority: 0
}

array[1] = {
    id : 1,
    title : 'pavss',
    date : '2022/04/22',
    priority: 0
}

array[2] = {
    id : 2,
    title : 'pavssss',
    date : '2022/04/23',
    priority: 0
}

array[3] = {
    id : 3,
    title : 'pavsssss',
    date : '2022/04/24',
    priority: 0
}

function addItem(title, date) {
    const item = {
        id : array.length,
        title, 
        date,
        priority : 0
    };
    array.push(item);
}

function removeItem(id) {
    array.forEach((item, index) => {
        if (item.id == id) {
            array.splice(index, 1);
        }
    }); 
}

function setPriority(id, number) {
    array.forEach(item => {
        if (item.id == id) item.priority = number;
    });
}

function showPriority(id) {
    let priority;
    array.forEach(item => {
        if (item.id == id) priority = item.priority;
    });
    return priority;
}

function getItems() {
    return array;
}

export { addItem, removeItem, getItems, setPriority, showPriority }