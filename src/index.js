import { pageLoad } from "./load";
import { menuLoad } from "./menu";
import { aboutLoad } from "./about";

const home = document.querySelector('#Home');
const menu = document.querySelector('#Menu');
const about = document.querySelector('#About');

function switchPage(targetPage) {
    const div = document.querySelector('#content');
    div.innerHTML = "";
    targetPage(div);
}

switchPage(pageLoad);

home.addEventListener('click', () => {
    switchPage(pageLoad);
})

menu.addEventListener('click', () => {
    switchPage(menuLoad);
}) 

about.addEventListener('click', () => {
    switchPage(aboutLoad);
})