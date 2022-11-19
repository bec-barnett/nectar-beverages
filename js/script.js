// Function for hamburger menu - source: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
function mobileMenu() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }

}

// Function to display different product descriptions based on what is selected by user
// By Rebecca Barnett
function displayDescription(selectedDrink) {
  event.preventDefault(); // Stop page from refreshing when a link is clicked
  document.preventDefault;
  var x = document.getElementById(selectedDrink); // Get the selected element
  var defaultDisplay = document.getElementById("product-description-home"); // Get the default text element

  if (x.style.display === "block") { // If element is already being displayed, hide it and show default element
    x.style.display = "none";
    defaultDisplay.style.display = "block";
    return // Back to page
  }

  // Grab all product description elements
  var drink1 = document.getElementById("product-description-drink1");
  var drink2 = document.getElementById("product-description-drink2");
  var drink3 = document.getElementById("product-description-drink3");
  var drink4 = document.getElementById("product-description-drink4");
  var drink5 = document.getElementById("product-description-drink5");
  var drink6 = document.getElementById("product-description-drink6");
  
  // Hide all product description elements
  defaultDisplay.style.display = "none";
  drink1.style.display = "none";
  drink2.style.display = "none";
  drink3.style.display = "none";
  drink4.style.display = "none";
  drink5.style.display = "none";
  drink6.style.display = "none";

  // Display selected product information
  x.style.display = "block";

}

// Image Slideshow. Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("our-story-slideshow");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
} 
