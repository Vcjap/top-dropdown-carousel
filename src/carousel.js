
const addImagesToContainer = (imagesToAdd, container) => {

    imagesToAdd.forEach((imageToAdd) => {
        const newImage = document.createElement("img");
        newImage.src = imageToAdd;
        container.append(newImage);
    });
}

const goToNextSlide = (slidesContainer, max= null) => {
    const currentBottom = parseInt(getComputedStyle(slidesContainer).bottom);
    slidesContainer.style.bottom = (currentBottom + pixelToSlide()) + "px";
    console.log(slidesContainer.style.bottom);
}

const goToPreviousSlide = (slidesContainer) => {
    const currentBottom = parseInt(getComputedStyle(slidesContainer).bottom);
    slidesContainer.style.bottom = Math.min(0, currentBottom - pixelToSlide()) + "px"; 
    console.log(slidesContainer.style.bottom);
}

const pixelToSlide = () => {
    const body = document.querySelector("body");
    const computedStyle = getComputedStyle(body);
    const pixelToSlide = parseInt(computedStyle.getPropertyValue("--carousel-height"));
    // need to use parseInt because the variable is returned as a string
    return pixelToSlide;
}

export default {addImagesToContainer, goToNextSlide, goToPreviousSlide};