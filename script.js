// Your array of images
const images = ["TrentonCover.png", "page1.png", "page2.png", "page3.png", "page4.png", "page5.png", "page6.png"]; // Add your image file names here

// Index to track the current image in the cycle
let currentIndex = 0;

// Function to change the image
function nextImage(event) {
  const sliderImage = document.getElementById("sliderImage");

  // Get the mouse position relative to the image
  const clickPosition = event.clientX - sliderImage.getBoundingClientRect().left;

  // If clicked on the left half, go to the previous image
  if (clickPosition < sliderImage.clientWidth / 2) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } 
  // If clicked on the right half, go to the next image
  else {
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Update the image source
  sliderImage.src = images[currentIndex];
}
