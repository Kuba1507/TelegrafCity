const burgerBtn = document.querySelector(".navbar__hamburger");
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

navLinks.forEach((link) => {
	link.addEventListener("click", closeNav);
});
burgerBtn.addEventListener("click", handleNav);
