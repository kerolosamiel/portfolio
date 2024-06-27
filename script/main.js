// Select the elements
const rotatingTextElement = document.querySelector(".circle p");
const projectLinks = document.querySelectorAll(".projects-botton a:not(#not)");
const desktopProjectImages = document.querySelectorAll(
  ".mac .projects-img img"
);
const mobileProjectImages = document.querySelectorAll(
  ".iphone .projects-img img"
);
const heroSectionHeight = document.querySelector(".hero").offsetHeight;
const projectsSectionHeight = document.querySelector(".projects").offsetHeight;
const burgerElement = document.querySelector(".burger-icon");
const navigationBar = document.querySelector(".nav");

function toggleActiveClass(element) {
  element.classList.toggle("active");
}

burgerElement.addEventListener("click", () => {
  toggleActiveClass(burgerElement);
  toggleActiveClass(navigationBar);
});

// Split the text into individual characters and wrap each character in a span with a rotate style
rotatingTextElement.innerHTML = rotatingTextElement.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
  )
  .join("");

// Initialize a GSAP timeline with default duration of 5 seconds
const tm = gsap.timeline({
  default: {
    duration: 5,
  },
});

let currentProjectIndex = 0;

// Function to remove the 'active' class from all elements in a NodeList
function clearAllActiveClasses(elements) {
  elements.forEach((e) => e.classList.remove("active"));
}

// Function to add the 'active' class to the element at the current project index in a NodeList
function setActiveClass(elements) {
  elements.classList.add("active");
}

// Function to update the displayed project by toggling the 'active' class
function CycleThroughProjects() {
  clearAllActiveClasses(projectLinks);
  clearAllActiveClasses(desktopProjectImages);
  clearAllActiveClasses(mobileProjectImages);
  setActiveClass(projectLinks[currentProjectIndex]);
  setActiveClass(desktopProjectImages[currentProjectIndex]);
  setActiveClass(mobileProjectImages[currentProjectIndex]);
}

// Set an interval to update the displayed project every 3 seconds
setInterval(() => {
  currentProjectIndex++;
  if (currentProjectIndex == projectLinks.length) {
    currentProjectIndex = 0;
  }
  CycleThroughProjects();
}, 3000);

const aboutSection = document.querySelector(".about-me");

const bodyElement = document.body;
// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  if (window.scrollY > heroSectionHeight) {
    bodyElement.classList.add("light");
  }
  if (window.scrollY < heroSectionHeight) {
    bodyElement.classList.remove("light");
  }
  if (window.scrollY > heroSectionHeight + projectsSectionHeight) {
    bodyElement.classList.remove("light");
  }
});

const form = document.querySelector(".send-mail .form form");
const fullNameElement = document.querySelector("#full-name");
const emailElement = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const phoneNumberInput = document.querySelector("#phone-number");
const compliteMessage = document.querySelector(".complite-message");
const errorMessage = document.querySelector(".error-message");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kerolosamiel4@gmail.com",
    Password: "CD9C274844AB02572A900F3317D873BFC387",
    To: "kerolosamiel4@gmail.com",
    From: "kerolosamiel4@gmail.com",
    Subject: "Inquiries about work",
    Body: `
      ${messageInput.value}
      <br><br>

      ${fullNameElement.querySelector("input").value} <br>
      Email: ${emailElement.querySelector("input").value}<br>
      Phone number: ${phoneNumberInput.value}

    `,
  }).then((message) => {
    if (message == "OK") {
      showAlert(compliteMessage);
    } else {
      showAlert(errorMessage);
    }
  });
}

function showAlert(element) {
  setActiveClass(element);

  setTimeout(() => {
    removeActiveClass(element);
  }, 1500);
}

function removeActiveClass(element) {
  element.classList.remove("active");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  sendEmail();
});
