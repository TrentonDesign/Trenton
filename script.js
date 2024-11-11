// Your array of images
const images = ["CloudMosnter","page1.png"]; // Add your image file names here

// Index to track the current image in the cycle
let currentIndex = 0;

// Select the image element
const imageElement = document.getElementById("slider-image");

// Function to update the displayed image
function updateImage() {
    imageElement.src = images[currentIndex];
}

// Show the first image when the page loads
window.onload = () => {
    updateImage(); // Set the initial image to the first in the array
};

// Function to go to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the beginning
    updateImage();
}

// Function to go to the previous image
function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop back to the end if needed
    updateImage();
}

// Event listeners for clicking left or right of the image to go back and forth
imageElement.addEventListener("click", (event) => {
    const rect = imageElement.getBoundingClientRect();
    const xPos = event.clientX - rect.left; // Get X position of the click
    
    if (xPos < rect.width / 2) {
        previousImage(); // Click on left side, go to previous image
    } else {
        nextImage(); // Click on right side, go to next image
    }
});
