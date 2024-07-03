const loadingElement = document.querySelector(".loading-container");
const body = document.body;
const burgerElement = document.querySelector(".burger-icon");
const navigationBar = document.querySelector(".nav");

function handleLoading() {
  setTimeout(() => {
    loadingElement.classList.remove("active");

    body.style.overflow = "unset";
  }, 500);
}

window.addEventListener("load", handleLoading);

function toggleClass(element) {
  element.classList.toggle("active");
}

burgerElement.addEventListener("click", () => {
  toggleClass(burgerElement);
  toggleClass(navigationBar);
});
