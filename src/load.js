export function pageLoad(div) {

    const headline = document.createElement('h1');
    headline.innerText = "Le Restaurant D'Tailles"

    const comment = document.createElement('p');
    comment.innerText = "So good it's perfect!"

    div.appendChild(headline);
    div.appendChild(comment);
}