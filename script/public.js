const loadingElement = document.querySelector(".loading-container");
const body = document.body;

function handleLoading() {
  loadingElement.classList.remove("active");

  body.style.overflow = "unset";
}

window.addEventListener("load", handleLoading);
