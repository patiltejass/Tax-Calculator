var lastScrollTop = 0;
navbar = document.getElementById("NavScroll");
window.addEventListener("scroll", function () {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = "-56px";
	} else {
		navbar.style.top = "o";
	}
	lastScrollTop = scrollTop;
});
