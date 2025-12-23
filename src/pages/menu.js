import menuData from './menuData.js';

function loadMenu() {
    //clear content first
    const content = document.querySelector('#content');
    content.innerHTML = '';

    //function: create menu section
    function createMenuSection(sections, menuSectionData) {
        //create section <div>
        const section = document.createElement('div');
        section.classList.add('menu-section');
        //create section name <h2>
        const sectionName = document.createElement('h2');
        sectionName.classList.add('menu-section-name');
        sectionName.textContent = sections;
        section.appendChild(sectionName);
        //for each dish
        menuSectionData.forEach(item => {
            const dishName = document.createElement('h3');
            dishName.classList.add('dish-name');
            dishName.textContent = item.name;

            const dishDesc = document.createElement('p');
            dishDesc.classList.add('dish-desc');
            dishDesc.textContent = item.desc;

            section.appendChild(dishName);
            section.appendChild(dishDesc);

            content.appendChild(section);
        })
    }


    //load function one by one
    createMenuSection('Starters', menuData.Starters);






}

export default loadMenu;