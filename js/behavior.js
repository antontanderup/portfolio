window.onload = function() {

	// Toggle to hide and show navigation on smaller viewports
	var navToggle = function() {
		var navLinks = document.getElementById("top-nav-links");
		if (navLinks.className === "nav-show") {
			navLinks.className = "nav-hide";
		} else {
			navLinks.className = "nav-show";
		}
	}
	// Eventhandler for navigation toggle
	var navButton = document.getElementById("nav-button");
	navButton.addEventListener("click", navToggle, false);

	// Function for displaying larger images
	var displayBox = function(evt) {
    	evt.preventDefault();
    	var lightBox = document.getElementById("lightbox");
    	lightBox.innerHTML = '<img src="' + this + '" alt="image-large"/>';
    	lightBox.className = 'lightbox-show';
    	lightBox.addEventListener("click", function() {
    		lightBox.className ="lightbox-hide";
    	}, false);
	}

	// Eventhandler to display larger images. 
	var img = document.getElementsByClassName("img-link");
	for (var i = 0; i < img.length; i++) {
		img[i].addEventListener("click", displayBox , false);
	}

};