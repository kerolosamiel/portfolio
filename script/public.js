const loadingContainer = document.querySelector(".loading-container");
const burgerIcon = document.querySelector(".burger-icon");
const navigationMenu = document.querySelector(".nav");

// Function to handle loading screen
function hideLoadingScreen() {
  loadingContainer.classList.remove("active");

  document.body.style.overflow = "unset";
}

window.addEventListener("load", hideLoadingScreen);

// Function to toggle the 'active' class on an element
function toggleActiveClass(element) {
  element.classList.toggle("active");
}

burgerIcon.addEventListener("click", () => {
  toggleActiveClass(burgerIcon);
  toggleActiveClass(navigationMenu);
});

// Select the scroll-to-top button
const scrollToTopButton = document.querySelector(".scroll-button");

// Function to add the 'active' class to an element
function addActiveClass(element) {
  element.classList.add("active");
}

// Function to remove the 'active' class from an element
function removeActiveClass(element) {
  element.classList.remove("active");
}

// Function to handle the scroll event and show/hide the scroll-to-top button
function handleScrollEvent() {
  if (scrollY > 315) {
    addActiveClass(scrollToTopButton);
  } else {
    removeActiveClass(scrollToTopButton);
  }
}

// Function to scroll to the top of the page when the scroll-to-top button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", handleScrollEvent);
scrollToTopButton.addEventListener("click", scrollToTop);
