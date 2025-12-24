import "./styles.css";

import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadHoursAndLocation from "./pages/hours-and-location.js";
import loadContactUs from "./pages/contact-us.js";


const homePageBtn = document.querySelector('#nav-btn-home');
const menuPageBtn = document.querySelector('#nav-btn-menu');
const hoursAndLocationPageBtn = document.querySelector('#nav-btn-hours-and-location');
const contactUsBtn = document.querySelector('#nav-btn-contact-us');

loadHome();
homePageBtn.addEventListener('click', loadHome);
menuPageBtn.addEventListener('click', loadMenu);
hoursAndLocationPageBtn.addEventListener('click', loadHoursAndLocation);
contactUsBtn.addEventListener('click',loadContactUs);