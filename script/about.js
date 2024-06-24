const statisticElements = document.querySelectorAll(".statistic");

// Handle Customer Counter
function handleCounter(countStart, element) {
  let counter = setInterval(() => {
    countStart++;

    element.querySelector("h2").innerHTML = `${
      countStart < 10 ? "0" + countStart : countStart
    } +`;

    if (countStart == element.dataset.statistic) {
      clearInterval(counter);
    }
  }, 80);
}

function updateElementor() {
  statisticElements.forEach((e) => {
    let countStart = 0;

    handleCounter(countStart, e);
  });
}

updateElementor();

// Select Feedback line Elements
const feedbackElements = document.querySelectorAll(".feedbacks-line");

function updateFeedback() {
  countFeedbackStart = 0;

  setInterval(() => {
    countFeedbackStart++;

    if (countFeedbackStart === feedbackElements.length) {
      countFeedbackStart = 0;
    }

    for (let i = 0; i < feedbackElements.length; i++) {
      addOrRemoveClass(feedbackElements, i, "remove");
    }

    addOrRemoveClass(feedbackElements, countFeedbackStart, "add");
  }, 3000);
}

function addActiveClass(element) {
  element.classList.add("active");
}

function removeActiveClass(element) {
  element.classList.remove("active");
}

function toggleActiveClass(event) {
  event.currentTarget.classList.toggle("active");
}

function addOrRemoveClass(element, index, type) {
  if (type == "remove") {
    removeActiveClass(element[index]);
  }

  if (type == "add") {
    addActiveClass(element[index]);
  }
}

function handleFeedbackCounter() {
  updateFeedback();
}

handleFeedbackCounter();

const faqElement = document.querySelectorAll(".faq");

faqElement.forEach((element) => {
  element.addEventListener("click", toggleActiveClass);
});
