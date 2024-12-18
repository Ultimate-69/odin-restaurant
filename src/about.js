export function aboutLoad(div) {

    const headline = document.createElement('h1');
    headline.innerText = "About Us"

    const about = document.createElement('p');
    about.innerText = "Serving customers for 20 years, we produce constant high quality food. Want to try? Contact us now at 0152 334 5089"

    div.appendChild(headline);
    div.appendChild(about);
}