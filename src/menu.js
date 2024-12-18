export function menuLoad(div) {

    const headline = document.createElement('h1');
    headline.innerText = "Menu"

    const list = document.createElement('ul');

    const first = document.createElement('li');
    first.innerText = "Cheeseburger"
    list.appendChild(first);

    const second = document.createElement('li');
    second.innerText = "Pepporoni Pizza"
    list.appendChild(second);

    const third = document.createElement('li');
    third.innerText = "Chinese Food"
    list.appendChild(third);

    const fourth = document.createElement('li');
    fourth.innerText = "Spaghetti"
    list.appendChild(fourth);

    div.appendChild(headline);
    div.appendChild(list);
}