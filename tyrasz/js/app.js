var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
});

if ( window.innerWidth < 768 ) {
	var hasSubmenu = document.querySelectorAll('.has-submenu');
	hasSubmenu.forEach(function(item) {
		item.addEventListener("click", function() {
		  item.classList.toggle("is-active");
		});
	});
}