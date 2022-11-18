function mobileMenu() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  
}

function displayDescription(selectedDrink) {
    event.preventDefault();
    document.preventDefault;
    var x = document.getElementById(selectedDrink);
    var defaultDisplay = document.getElementById("product-description-home");
    
    if (x.style.display === "block") {
        x.style.display = "none";
        defaultDisplay.style.display = "block";
        return
      } 

    // Make sure all elements are hidden
    
    var drink1 = document.getElementById("product-description-drink1");
    var drink2 = document.getElementById("product-description-drink2");
    var drink3 = document.getElementById("product-description-drink3");
    var drink4 = document.getElementById("product-description-drink4");
    var drink5 = document.getElementById("product-description-drink5");
    var drink6 = document.getElementById("product-description-drink6");
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
