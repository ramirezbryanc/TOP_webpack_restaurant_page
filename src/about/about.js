export default function about() {
    const content = document.createElement('div');
    const wrapper = document.createElement('div');
    content.appendChild(wrapper);

    content.classList.add('about');

    const contact = document.createElement('p');
    contact.textContent = '📞 +63 912 345 6789';

    const address = document.createElement('p');
    address.textContent = '🗺️ Solenad 2 Mall Santa Rosa, 4026'

    const map = new Image();
    map.width = 1920;
    map.height = 1080;
    
    wrapper.appendChild(contact);
    wrapper.appendChild(address);
    wrapper.appendChild(map);

    return content;
}