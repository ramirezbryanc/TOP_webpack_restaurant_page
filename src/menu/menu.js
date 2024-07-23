const products = [
    {
        name: 'California Maki',
        description: 'Rice, Crab Meat, Mango, Cucumber, Masago',
    },
    {
        name: 'Salmon Nigiri Zushi',
        description: 'Rice, Salmon',
    },
    {
        name: 'Maguro Nigirizushi',
        description: 'Tuna, Rice',
    },
    {
        name: 'Ikura Gunkan Maki',
        description: 'Rice, Nori, Ikura',
    },
    {
        name: 'Ebi nigirizushi',
        description: 'Japanese Tiger Prawn, Rice',
    },
    {
        name: 'Philadelphia Roll',
        description: 'Philadelphia Cream Cheese, Smoked Salmon, Rice',
    },
    {
        name: 'Rainbow Roll',
        description: 'An assortment of fresh seafood on rice, avocado, nori, and crab meat'
    },
    {
        name: 'Ebi Tempura Roll',
        description: 'Fried Shrimp, Avocado, Cucumber',
    }
]



export default function menu(){
    const content = document.createElement('div');
    const grid = document.createElement('div');
    content.appendChild(grid);

    grid.id = 'grid-container';
    grid.classList.add('menu');

    products.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const nameElement = document.createElement('h5');
        nameElement.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(nameElement);
        card.appendChild(description);

        grid.appendChild(card);
    })

    return content;
}