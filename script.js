const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

let slideIndex = 0;
const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-play every 4s
setInterval(() => {
  showSlide(slideIndex + 1);
}, 4000);

// Manual controls
document.querySelector(".next").addEventListener("click", () => {
  showSlide(slideIndex + 1);
});
document.querySelector(".prev").addEventListener("click", () => {
  showSlide(slideIndex - 1);
});
