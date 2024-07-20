export default function home() {
    const content = document.createElement('div');
    content.classList.add("home");

    const tagline = document.createElement('p');
    tagline.textContent = 'The best sushi experience in the country';
    tagline.classList.add("tagline");
    content.appendChild(tagline);

    const est = document.createElement('p');
    est.textContent = 'Est. 2024';
    est.classList.add("tagline");
    content.appendChild(est);

    const image = document.createElement('img');
    image.src = 'https://placedog.net/300/300';
    image.id = 'home-img';
    content.appendChild(image);

    const footing = document.createElement('p');
    footing.textContent = 'Visit us at GF Ayala Malls Solenad';
    footing.classList.add("tagline");
    content.appendChild(footing);

    return content;
}