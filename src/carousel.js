
const addImagesToContainer = (imagesToAdd, container) => {

    imagesToAdd.forEach((imageToAdd) => {
        const newImage = document.createElement("img");
        newImage.src = imageToAdd;
        container.append(newImage);
    });
}

const advanceSlide = (slideFrame, max= null) => {
    const body = document.querySelector("body");
    const computedStyle = getComputedStyle(body);
    const pixelToAdvance = parseInt(computedStyle.getPropertyValue("--carousel-height"));
    // need to use parseInt because the variable is returned as a string

    const computedStyleSlideFrame = getComputedStyle(slideFrame);
    const currentBottom = parseInt(computedStyleSlideFrame.bottom);

    slideFrame.style.bottom = (currentBottom + pixelToAdvance) + "px"
}

export default {addImagesToContainer, advanceSlide};