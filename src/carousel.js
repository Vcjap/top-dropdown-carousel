
const addImagesToContainer = (imagesToAdd, container) => {

    imagesToAdd.forEach((imageToAdd) => {
        const newImage = document.createElement("img");
        newImage.src = imageToAdd;
        container.append(newImage);
    });
}

export default {addImagesToContainer};