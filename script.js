// Array of images
const images = ["CloudMonster.png", "page1.png", "page2.png"]; // Add your image file names here

// Index to track the current image in the cycle
let currentIndex = 0;

// Function to update the displayed image
function updateImage() {
  const sliderImage = document.getElementById("sliderImage");
  sliderImage.src = images[currentIndex];
}

// Function to change the image when clicking
function nextImage(event) {
  const sliderImage = document.getElementById("sliderImage");

  // Get the mouse position relative to the image
  const clickPosition = event.clientX - sliderImage.getBoundingClientRect().left;

  // Check if clicked on the left or right half
  if (clickPosition < sliderImage.clientWidth / 2) {
    // Go to the previous image
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else {
    // Go to the next image
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Update the image source
  updateImage();
}

// Set the initial image when the page loads
window.onload = () => {
  updateImage();

  // Add an event listener to the image to detect clicks
  const sliderImage = document.getElementById("sliderImage");
  sliderImage.addEventListener("click", nextImage);
};
