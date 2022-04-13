import { setActive, setTitle } from "./DOM";

function initToday() {
    setActive('today');
    setTitle('Today');
}

export { initToday };