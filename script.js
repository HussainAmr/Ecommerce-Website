const menubarIcon = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closeIcon = document.getElementById("close");

if (menubarIcon) {
	menubarIcon.addEventListener("click", () => {
		nav.classList.add("active");
	});
}

if (closeIcon) {
	closeIcon.addEventListener("click", () => {
		nav.classList.remove("active");
	});
}
