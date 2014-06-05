window.onload = function() {
	var navToggle = function() {
		var navLinks = document.getElementById("top-nav-links");
		if (navLinks.className === "nav-show") {
			navLinks.className = "nav-hide";
		} else {
			navLinks.className = "nav-show";
		}
	}
	var navButton = document.getElementById("nav-button");
	navButton.addEventListener("click", navToggle, false);
};