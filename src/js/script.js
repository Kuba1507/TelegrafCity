const body = document.querySelector("body");
const burgerBtn = document.querySelector(".navbar__hamburger");
const navigation = document.querySelector(".navbar");
const navbar = document.querySelector(".navbar__menu");
const navbarList = document.querySelector(".navbar__menu-list");
const navLinks = document.querySelectorAll(".navbar__menu-list-item");
const ctaButton = document.querySelector(".cta-button");
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

const moveToSection = () => {
	const aboutInfoSection = document.getElementById("about-info");

	if (aboutInfoSection) {
		aboutInfoSection.scrollIntoView({ behavior: "smooth" });
	}
};

const handleVisualizationsGallery = (e) => {
	const clickedPhotoSrc = e.target.src;
	bigPhotoImage.src = clickedPhotoSrc;

	bigPhoto.style.opacity = "0";
	bigPhoto.style.display = "flex";
	body.classList.add("block-scrolling");

	setTimeout(() => {
		bigPhoto.style.opacity = "1";
	}, 50);
};

const closeVisualizationsGallery = () => {
	bigPhoto.style.opacity = "0";

	setTimeout(() => {
		bigPhoto.style.display = "none";
		body.classList.remove("block-scrolling");
	}, 500);
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
