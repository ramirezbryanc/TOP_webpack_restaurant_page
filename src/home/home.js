import brand from './../nigiri-sumi-high-resolution-logo-white-transparent.svg';

export default function home() {
    const content = document.createElement('div');
    content.classList.add("home");

    const tagline = document.createElement('p');
    tagline.textContent = 'Authentic Sushi Experience';
    tagline.classList.add("tagline");
    content.appendChild(tagline);

    const est = document.createElement('p');
    est.textContent = 'Est. 2024';
    est.classList.add("tagline");
    content.appendChild(est);

    const image = new Image();
    image.width = 350;
    image.height = 350;
    image.src = brand;
    image.id = 'home-img';
    content.appendChild(image);

    const footing = document.createElement('p');
    footing.textContent = 'Visit us at GF Ayala Malls Solenad';
    footing.classList.add("tagline");
    content.appendChild(footing);

    return content;
}