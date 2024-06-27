const loadingElement = document.querySelector(".loading-container");
const body = document.body;

function handleLoading() {
  setTimeout(() => {
    loadingElement.classList.remove("active");

    body.style.overflow = "unset";
  }, 500);
}

window.addEventListener("load", handleLoading);
