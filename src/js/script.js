const burgerBtn = document.querySelector(".navbar__hamburger");
const navigation = document.querySelector(".navbar");
const navbar = document.querySelector(".navbar__menu");
const navbarList = document.querySelector(".navbar__menu-list");
const navLinks = document.querySelectorAll(".navbar__menu-list-item");

const handleNav = () => {
	navbar.classList.toggle("show-menu");
	navbarList.classList.toggle("show-list");
};

const closeNav = () => {
	navbar.classList.remove("show-menu");
	navbarList.classList.remove("show-list");
};

const handleShadow = () => {
	navigation.classList.toggle("show-shadow");
	navbar.classList.toggle("show-shadow");
};

const animateNavbar = () => {
	if (window.scrollY > 70) {
		navigation.classList.add("show-shadow");
	} else {
		navigation.classList.remove("show-shadow");
	}
};

navLinks.forEach((link) => {
	link.addEventListener("click", closeNav);
});
burgerBtn.addEventListener("click", handleNav);
burgerBtn.addEventListener("click", handleShadow);
window.addEventListener("scroll", animateNavbar);
