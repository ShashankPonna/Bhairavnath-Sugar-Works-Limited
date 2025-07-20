
function toggleReadMore() {
  const moreText = document.getElementById("moreText");
  const btnText = document.getElementById("readMoreBtn");
  let codeOfConduct = document.querySelector(".code-of-conduct")

    codeOfConduct.classList.add("code-of-conduct-after")

  if (moreText.classList.contains("hidden")) {
    moreText.classList.remove("hidden");
    btnText.textContent = "Read Less";
  } else {
    moreText.classList.add("hidden");
    btnText.textContent = "Read More";
  }
  btn
}

const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

  // Show the button when scrolled down 100px
  window.onscroll = function () {
    const toTopBtn = document.getElementById("toTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };

  // Scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
