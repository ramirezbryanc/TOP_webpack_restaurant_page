import './style.css';
import home from './home/home.js';

function header() {
    const header = document.createElement('header');

    const brand = document.createElement('h1');
    brand.textContent = 'Nigiri Sumi';
    brand.id = "brand";

    const navbar = document.createElement('nav');
    const home = document.createElement('button');
    home.textContent='Home';
    const menu = document.createElement('button');
    menu.textContent='Menu';
    const about = document.createElement('button');
    about.textContent='About';
    
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(about);

    header.appendChild(brand);
    header.appendChild(navbar);

    return header;
}

function container() {
    const container = document.createElement('div');
    container.id = 'container';

    return container;
}

document.body.appendChild(header());
document.body.appendChild(container());

const content = document.querySelector("#container");
console.log(content);
content.appendChild(home());

function footer() {
    const footer = document.createElement('div');

    const text = document.createElement('p');
    text.textContent = "Copyright © ramirezbryanc";
    footer.appendChild(text);
    return footer;
}

document.body.appendChild(footer());

