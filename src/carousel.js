const addImagesToContainer = (imagesToAdd, container) => {

    imagesToAdd.forEach((imageToAdd) => {
        const newImage = document.createElement("img");
        newImage.src = imageToAdd;
        container.append(newImage);
    });
}

const createDotNavigation = (numberOfSlides, container) => {
    for (let i = 0; i < numberOfSlides; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.dataset.index = i;
        container.appendChild(dot);
    }
}

const goToSlide = (slidesContainer, index, totalSlides) => {
    const pixelsToMove = index * pixelToSlide();
    const maxPosition = (totalSlides - 1) * pixelToSlide();
    slidesContainer.style.bottom = Math.min(maxPosition, pixelsToMove) + "px";
    updateDotNavigation(index);
}

const updateDotNavigation = (activeIndex) => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

const goToNextSlide = (slidesContainer) => {
    const maxPosition = parseInt(getComputedStyle(slidesContainer).height) - pixelToSlide();
    const currentBottom = parseInt(getComputedStyle(slidesContainer).bottom);
    const newBottom = Math.min(maxPosition, currentBottom + pixelToSlide());
    slidesContainer.style.bottom = newBottom + "px";
    
    const currentIndex = newBottom / pixelToSlide();
    updateDotNavigation(currentIndex);
}

const goToPreviousSlide = (slidesContainer) => {
    const currentBottom = parseInt(getComputedStyle(slidesContainer).bottom);
    const newBottom = Math.max(0, currentBottom - pixelToSlide());
    slidesContainer.style.bottom = newBottom + "px";
    
    const currentIndex = newBottom / pixelToSlide();
    updateDotNavigation(currentIndex);
}

const pixelToSlide = () => {
    const body = document.querySelector("body");
    const computedStyle = getComputedStyle(body);
    const pixelToSlide = parseInt(computedStyle.getPropertyValue("--carousel-height"));
    // need to use parseInt because the variable is returned as a string
    return pixelToSlide;
}

export default {
    addImagesToContainer, 
    goToNextSlide, 
    goToPreviousSlide, 
    createDotNavigation,
    goToSlide
};