import "./styles.css";
import carousel from "./carousel.js"

import winterImage1 from "./images/winter1.jpg";
import winterImage2 from "./images/winter2.jpg";
import winterImage3 from "./images/winter3.jpg";
import winterImage4 from "./images/winter4.jpg";

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


//-------------Image carousel------------------

const images = [winterImage1, winterImage2, winterImage3, winterImage4];

const slidesContainer = document.querySelector("#slides");
carousel.addImagesToContainer(images, slidesContainer);

const dotContainer = document.querySelector("#dot-navigation");
carousel.createDotNavigation(images.length, dotContainer);

// Add click handlers for dots
dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        const index = parseInt(e.target.dataset.index);
        carousel.goToSlide(slidesContainer, index, images.length);
    }
});

const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", () => carousel.goToNextSlide(slidesContainer));

const previousBtn = document.querySelector(".previous");
previousBtn.addEventListener("click", () => carousel.goToPreviousSlide(slidesContainer));