import menuData from './menuData.js';

function loadMenu() {
    //clear content first
    const content = document.querySelector('#content');
    content.innerHTML = '';

    //function: create menu section
    function createMenuSection(sections, menuSectionData) {
        //create section <div>
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('menu-section-container');
        //create section name <h2>
        const sectionName = document.createElement('h2');
        sectionName.classList.add('menu-section-name');
        sectionName.textContent = sections;
        sectionContainer.appendChild(sectionName);
        //for each dish
        menuSectionData.forEach(item => {
            const dishName = document.createElement('h3');
            dishName.classList.add('dish-name');
            dishName.textContent = item.name;
            sectionContainer.appendChild(dishName);

            if(item.desc) {
                const dishDesc = document.createElement('p');
                dishDesc.classList.add('dish-desc');
                dishDesc.textContent = item.desc;
                sectionContainer.appendChild(dishDesc);
            }

            content.appendChild(sectionContainer);
        })
    }


    //load function one by one
    createMenuSection('STARTERS', menuData.Starters);
    createMenuSection('HAMBURGERS', menuData.Hamburgers);
    createMenuSection('STEAK', menuData.Steak);
    createMenuSection('DESSERTS', menuData.Desserts);
    createMenuSection('DRINKS', menuData.Drinks);

    //only for padding
    const bottomBlank = document.createElement('div');
    bottomBlank.id = 'bottom-blank';
    content.appendChild(bottomBlank);
}

export default loadMenu;