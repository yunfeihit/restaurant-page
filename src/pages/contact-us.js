function loadContactUs() {

    const content = document.querySelector('#content');
    content.innerHTML = '';

    const contactInfo = document.createElement('p');
    contactInfo.id = 'contact-info';

    contactInfo.textContent = 'If you want a free website, pls contact me: yunfeihit@gmail.com';

    content.appendChild(contactInfo);

}

export default loadContactUs;