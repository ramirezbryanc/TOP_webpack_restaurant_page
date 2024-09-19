import './style.css';
import homePage from './home/home.js';
import aboutPage from './about/about.js';
import menuPage from './menu/menu.js';

function main() {
    const main = document.createElement('section');
    main.classList.add('main');
    return main
}

document.body.appendChild(main());

function header() {
    const header = document.createElement('header');

    const brand = document.createElement('h1');
    brand.textContent = 'Nigiri Sumi';
    brand.id = "brand";

    const navbar = document.createElement('nav');
    const home = document.createElement('button');
    home.textContent='Home';
    home.onclick = function() {
        render(content, homePage());
    };

    const menu = document.createElement('button');
    menu.textContent='Menu';
    menu.onclick = function() {
        render(content, menuPage());
    }

    const about = document.createElement('button');
    about.textContent='About';
    about.onclick = function() {
        render(content, aboutPage());
    };
    
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(about);

    header.appendChild(brand);
    header.appendChild(navbar);

    return header;
}

function render(parent, component){
    const firstChild = parent.firstChild;
    content.removeChild(firstChild);
    content.appendChild(component);
}

function container() {
    const container = document.createElement('div');
    container.id = 'container';

    return container;
}

const mainSection = document.querySelector('.main');
mainSection.appendChild(header());
mainSection.appendChild(container());

const content = document.querySelector("#container");
console.log(content);
content.appendChild(homePage());

function footer() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const text1 = document.createElement('p');
    text1.textContent = "Copyright © ramirezbryanc";
    text1.classList.add('footer-text');
    const text2 = document.createElement('p');
    text2.textContent = "Note: This is a fictional sushi restaurant."
    text2.classList.add('footer-text');
    footer.appendChild(text2);
    footer.appendChild(text1);
    return footer;
}

mainSection.appendChild(footer());


