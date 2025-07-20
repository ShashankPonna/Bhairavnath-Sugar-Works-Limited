let introHead = document.getElementById("intro-head");
let intro = document.getElementById("intro");

  introHead.addEventListener("click", () => {
    intro.style.paddingTop="4.5rem"
    intro.scrollIntoView({ behavior: "smooth" });
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

