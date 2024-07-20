const statisticElements = document.querySelectorAll(".statistic");

// Function to handle the counter animation for statistics
function animateCounter(startValue, element) {
  let currentCount = setInterval(() => {
    startValue++;

    element.querySelector("h2").innerHTML = `${
      startValue < 10 ? "0" + startValue : startValue
    } +`;

    // Stop the counter when the target value is reached
    if (startValue == element.dataset.statistic) {
      clearInterval(currentCount);
    }
  }, 80);
}

// Function to initialize and start the counter animations for all statistic elements
function initializeCounters() {
  statisticElements.forEach((element) => {
    let startValue = 0;

    animateCounter(startValue, element);
  });
}

// Start the counter animations
initializeCounters();

// Select all elements with the class "feedbacks-line"
const feedbackElements = document.querySelectorAll(".feedbacks-line");

// Function to update the feedback carousel
function updateFeedbackCarousel() {
  feedbackIndex = 0;

  setInterval(() => {
    feedbackIndex++;

    // Reset the index if it exceeds the number of feedback elements
    if (feedbackIndex === feedbackElements.length) {
      feedbackIndex = 0;
    }

    for (let i = 0; i < feedbackElements.length; i++) {
      toggleClass(feedbackElements, i, "remove");
    }

    // Add the active class to the current feedback element
    toggleClass(feedbackElements, feedbackIndex, "add");
  }, 3000);
}

// Function to add the active class to an element
function addActiveClass(element) {
  element.classList.add("active");
}

// Function to remove the active class from an element
function removeActiveClass(element) {
  element.classList.remove("active");
}

// Function to toggle the active class of an element
function toggleActiveClass(event) {
  event.currentTarget.classList.toggle("active");
}

// Function to add or remove the active class based on the type
function toggleClass(element, index, type) {
  if (type == "remove") {
    removeActiveClass(element[index]);
  }

  if (type == "add") {
    addActiveClass(element[index]);
  }
}

// Initialize the feedback carousel
updateFeedbackCarousel();

// Select all elements with the class "faq"
const faqElements = document.querySelectorAll(".faq");

faqElements.forEach((element) => {
  element.addEventListener("click", toggleActiveClass);
});

// Select all service elements and their corresponding info containers and close buttons
const serviceElements = document.querySelectorAll(".services-bx .service");
const infoContainers = document.querySelectorAll(
  ".services-bx .show-more-container"
);
const closeButtons = document.querySelectorAll(
  ".services-bx .show-more-container .close"
);

let currentIndex = 0;

serviceElements.forEach((service) => {
  service.addEventListener("click", (event) => {
    currentIndex = event.currentTarget.dataset.index;
    addActiveClass(infoContainers[currentIndex]);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeActiveClass(infoContainers[currentIndex]);
  });
});

window.addEventListener("click", closeOutSide);

// close the info container when clicking outside of it
function closeOutSide(el) {
  if (el.target == infoContainers[currentIndex]) {
    removeActiveClass(infoContainers[currentIndex]);
  }
}
