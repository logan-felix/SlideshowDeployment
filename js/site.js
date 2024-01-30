console.log("js loaded");

let imageUrls = [
    "./images/dog1.jpg",
    "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
    "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg"
];

const slideShowImage = document.getElementById('slide-show-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener("click", () => {
    updateImage("prev");
})

nextButton.addEventListener("click", () => {
    updateImage("next");
})

let currentImageIndex = 0;

function updateImage(direction) {
    if(direction == "next"){
        currentImageIndex++;
    }else if(direction == "prev"){
        currentImageIndex--;
    }else{
        currentImageIndex++;
    }

    if(currentImageIndex >= imageUrls.length){
        currentImageIndex = 0;
    }

    if(currentImageIndex < 0){
        currentImageIndex = imageUrls.length - 1;
    }

    slideShowImage.src = imageUrls[currentImageIndex];
}

setInterval(updateImage, 5000);