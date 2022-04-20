import { rotateArrow } from "./DOM"
import { toggleList } from "./DOM";

function expandProjects() {
    rotateArrow();
    toggleList();
}

export { expandProjects }