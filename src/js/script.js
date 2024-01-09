const body = document.querySelector("body");
const burgerBtn = document.querySelector(".navbar__hamburger");
const navigation = document.querySelector(".navbar");
const navbar = document.querySelector(".navbar__menu");
const navbarList = document.querySelector(".navbar__menu-list");
const navLinks = document.querySelectorAll(".navbar__menu-list-item");
const visualizationsPhotos = document.querySelectorAll(
	".visualizations-box__element-img"
);
const bigPhoto = document.querySelector(".visualizations__show-photo");
const bigPhotoImage = document.querySelector(
	".visualizations__show-photo-image"
);
const closingX = document.querySelector(".visualizations__show-photo-x");

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

const handleVisualizationsGallery = (e) => {
	const clickedPhotoSrc = e.target.src;

	bigPhotoImage.src = clickedPhotoSrc;

	bigPhoto.style.display = "flex";
	body.classList.add("block-scrolling");
};

const closeVisualizationsGallery = () => {
	bigPhoto.style.display = "none";
	body.classList.remove("block-scrolling");
};

navLinks.forEach((link) => {
	link.addEventListener("click", closeNav);
});

visualizationsPhotos.forEach((photo) => {
	photo.addEventListener("click", handleVisualizationsGallery);
});

closingX.addEventListener("click", closeVisualizationsGallery);
burgerBtn.addEventListener("click", handleNav);
burgerBtn.addEventListener("click", handleShadow);
window.addEventListener("scroll", animateNavbar);
