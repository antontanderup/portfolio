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
    	lightBox.addEventListener("click", function() { // Add eventlistener to close lightbox
    		lightBox.className ="lightbox-hide";
    		lightBox.innerHTML = '';
    	}, false);

    	// Calculate aspect ratio of viewport and image
    	var userAspect = window.innerWidth / window.innerHeight; // Define viewport aspect ratio
    	var imgLightboxed = document.getElementById("img-lightboxed"); // Define img element

    	var imgHeight; var imgWidth; var imgAspect; // Declare variables
    	var imgProperties = function() {
    		imgHeight = imgLightboxed.clientHeight; // Define img height
    		imgWidth = imgLightboxed.clientWidth; // Define img width
    		imgAspect = imgWidth / imgHeight; // Define img aspect ratio
    	};

		var imgLoaded = new Image();
		imgLoaded.onload = function() { 
			imgProperties();
			// Use responsive method appripriate to the aspect ratio of the image and the user viewport
	    	if (imgAspect < userAspect && imgWidth > 0) {
	    		lightBox.innerHTML = '<img src="' + this.src + '" alt="image-large"' + ' style="max-height: ' + imgHeight + 'px"' + ' height="100%"' +' />';
	    	} else if (imgAspect > userAspect && imgWidth > 0) {
	    		lightBox.innerHTML = '<img src="' + this.src + '" alt="image-large"' + ' style="max-width: ' + imgWidth + 'px"' + ' width="100%"' +' />';
	    	} else {
	    		
	    	}
			lightBox.className = 'lightbox-show'; // Display lightbox
		};
		imgLoaded.src = this;

	};

	// Eventhandler to display larger images. 
	var img = document.getElementsByClassName("img-link");
	for (var i = 0; i < img.length; i++) {
		img[i].addEventListener("click", displayBox , false);
	}

};