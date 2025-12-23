import imgHamburger1 from "../imgs/hamburger1.jpg";
import imgHamburger2 from "../imgs/hamburger2.jpg";
import imgHamburger3 from "../imgs/hamburger3.jpg";
import imgHamburger4 from "../imgs/hamburger4.jpg";
import imgHamburger5 from "../imgs/hamburger5.jpg";
import imgHamburger6 from "../imgs/hamburger6.jpg";
import imgSteak1 from "../imgs/steak1.jpg";
import imgSteak2 from "../imgs/steak2.jpg";
import imgSteak3 from "../imgs/steak3.jpg";
import imgSteak4 from "../imgs/steak4.jpg";
import imgSteak5 from "../imgs/steak5.jpg";
import imgLeftArrow from "../imgs/left-arrow-white.png";
import imgRightArrow from "../imgs/right-arrow-white.png";
import whoPicImage from "../imgs/restaurant-whole.jpg";


function loadHome() {
    //remember to clear the content first
    const content = document.querySelector('#content');

    content.innerHTML = '';

    const imgHamburgers = [imgHamburger1, imgHamburger2, imgHamburger3, imgHamburger4, imgHamburger5, imgHamburger6];

    const imgSteaks = [imgSteak1, imgSteak2, imgSteak3, imgSteak4, imgSteak5];

    const allPhotos = [...imgHamburgers, ...imgSteaks];

    // the photo part
    const photoFrame = document.createElement('div');
    photoFrame.id = 'photoFrame';

    const photoBtnLayer = document.createElement('div');
    photoBtnLayer.id = 'photo-btn-layer';


    const photo = document.createElement('img');
    photo.id = 'photo';
    photo.src = allPhotos[0];


    content.appendChild(photoFrame);
    photoFrame.appendChild(photo);
    photoFrame.appendChild(photoBtnLayer);

    const leftPhotoBtn = document.createElement('img');
    const rightPhotoBtn = document.createElement('img');
    leftPhotoBtn.id = 'left-photo-btn';
    rightPhotoBtn.id = 'right-photo-btn';
    leftPhotoBtn.src = imgLeftArrow;
    rightPhotoBtn.src = imgRightArrow;

    photoBtnLayer.appendChild(leftPhotoBtn);
    photoBtnLayer.appendChild(rightPhotoBtn);

    //function to loop the photo
    let i = 0;
    function nextPhoto() {
        photo.innerHTML = '';
        if(i < allPhotos.length - 1) {
            i++;
            photo.src = allPhotos[i];
        } else {
            i = 0;
            photo.src = allPhotos[i];
        }
    };

    function previousPhoto() {
        photo.innerHTML = '';
        if(i > 0) {
            i--;
            photo.src = allPhotos[i];
        } else {
            i = allPhotos.length - 1;
            photo.src = allPhotos[i];
        }
    };

    rightPhotoBtn.addEventListener('click', nextPhoto);
    leftPhotoBtn.addEventListener('click', previousPhoto);



    // the story part
    const storyIntroContainer = document.createElement('div');
    storyIntroContainer.id = 'story-intro-container';
    const topic = document.createElement('p');
    topic.id = 'topic';
    topic.textContent = 'The Legend of the Iron Griddle'
    const story = document.createElement('p');
    story.id = 'story';
    story.textContent = `In 1924, Elias "Salty" Smith founded The Iron Griddle on the Xubuntu Plains with a simple dream: perfection through simplicity. For over a century, we’ve honored that mission.

    Our Steaks are hand-cut and flame-seared for peak flavor, while our Hamburgers feature juicy, grass-fed beef and melted cheddar. We don’t follow trends; we follow the fire. Whether you choose an elegant ribeye or a classic cheeseburger, you’re tasting a hundred years of tradition in every bite.`

    storyIntroContainer.appendChild(topic);
    storyIntroContainer.appendChild(story);

    content.appendChild(storyIntroContainer);


    //who pic part
    const whoPic = document.createElement('div');
    whoPic.id = 'whole-pic';
    const whoPicImg = document.createElement('img');
    whoPicImg.id = 'whole-pic-img';
    whoPicImg.src = whoPicImage;
    whoPic.appendChild(whoPicImg);

    content.appendChild(whoPic);


    //footer part
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    const footnote = document.createElement('p');
    footnote.id = 'foot-note';
    footnote.textContent = `@Tyler Wang
    This is an Odin Project learning exercise. First time using webpack to design a website.`

    footerContainer.appendChild(footnote);
    content.appendChild(footerContainer);





}

export default loadHome;