import "./styles.css";
import carousel from "./carousel.js"

import winterImage1 from "./images/winter1.jpg";
import winterImage2 from "./images/winter2.jpg";
import winterImage3 from "./images/winter3.jpg";
import winterImage4 from "./images/winter4.jpg";


console.log("Hello World!")

// Get the button and dropdown content
const dropdownBtn = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle dropdown when clicking the button
dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-button')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});


const images = [winterImage1, winterImage2, winterImage3, winterImage4];

const container = document.querySelector("#slides");
carousel.addImages(images, container);