
const addImages = (imagesToAdd, container) => {

    for (const imageToAdd in imagesToAdd) {
        const newImage = document.createElement("img");
        newImage.src = imageToAdd;
        container.append(newImage);
    }
}

export default {addImages};