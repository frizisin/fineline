// BURGER MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// REVEAL ON SCROLL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// FAQ ACCORDION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

rightBtn.addEventListener("click", () => {
  current++;
  if (current >= slides.length) {
    current = 0;
  }
  showSlide(current);
});

leftBtn.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  showSlide(current);
});