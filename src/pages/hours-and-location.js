import hoursData from "./hoursData.js";

function loadHoursAndLocation() {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    //inner Funtion using hoursData to create elements
    function createHoursSection(mealName, data) {
        const mealContainer = document.createElement('div');
        mealContainer.classList.add('meal-container');
        
        const mealNameTitle = document.createElement('h2');
        mealNameTitle.classList.add('meal-name');
        mealNameTitle.textContent = mealName;

        mealContainer.appendChild(mealNameTitle);

        const mealDays = document.createElement('p');
        mealDays.classList.add('meal-days');
        mealDays.textContent = data.days;
        mealContainer.appendChild(mealDays);

        const mealTime = document.createElement('p');
        mealTime.classList.add('meal-time');
        mealTime.textContent = data.time;
        mealContainer.appendChild(mealTime);

        content.appendChild(mealContainer);
    }

    createHoursSection('LUNCH', hoursData.lunch);
    createHoursSection('BRANCH', hoursData.branch);
    createHoursSection('MIDDAY', hoursData.midday);
    createHoursSection('DINNER', hoursData.dinner[0]);
    createHoursSection('', hoursData.dinner[1]);

    // try to add a google map
    const mapCon = document.createElement('div');
    mapCon.id = 'map-container';

    const map = document.createElement('iframe');
    map.id = 'google-map';
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.123!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"

    content.appendChild(mapCon);

}

export default loadHoursAndLocation;