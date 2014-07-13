window.onload = function() {

	// Toggle to hide and show navigation on smaller viewports
	var navToggle = function() {
		var navLinks = document.getElementById("top-nav-links");
		if (navLinks.className === "nav-show") {
			navLinks.className = "nav-hide";
		} else {
			navLinks.className = "nav-show";
		}
	};

	// Eventhandler for navigation toggle
	var navButton = document.getElementById("nav-button");
	navButton.addEventListener("click", navToggle, false);

	// Function for displaying larger images
	var displayBox = function(evt) {

    	evt.preventDefault(); // Dont go to img url if js enabled
    	var lightBox = document.getElementById("lightbox"); // Define lightbox div
    	lightBox.innerHTML = '<img src="' + this + '" alt="image-large" id="img-lightboxed"/>'; // Load img in div
    	lightBox.className = 'lightbox-show'; // Display lightbox
    	lightBox.addEventListener("click", function() { // Add eventlistener to close lightbox
    		lightBox.className ="lightbox-hide";
    		lightBox.innerHTML = '';
    	}, false);

    	// Calculate if max-height or max-width
    	var imgLightboxed = document.getElementById("img-lightboxed"); // Define img element
    	var imgHeight = imgLightboxed.clientHeight; // Define img height
    	var imgWidth = imgLightboxed.clientWidth; // Define img width
    	var imgAspect = imgWidth / imgHeight; // Define img aspect ratio
    	var userAspect = window.innerWidth / window.innerHeight; // Define viewport aspect ratio

    	// Use responsive method appripriate to the aspect ratio of the image and the user viewport
    	if (imgAspect < userAspect) {
    		lightBox.innerHTML = '<img src="' + this + '" alt="image-large"' + ' style="max-height: ' + imgHeight + 'px"' + ' height="100%"' +' />';
    	} else {
    		lightBox.innerHTML = '<img src="' + this + '" alt="image-large"' + ' style="max-width: ' + imgWidth + 'px"' + ' width="100%"' +' />';
    	}

	};

	// Eventhandler to display larger images. 
	var img = document.getElementsByClassName("img-link");
	for (var i = 0; i < img.length; i++) {
		img[i].addEventListener("click", displayBox , false);
	}

};