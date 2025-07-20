let introHead = document.getElementById("intro-head");
let sugar = document.getElementById("Sugar");

  introHead.addEventListener("click", () => {
    sugar.style.paddingTop="4.5rem"
    sugar.scrollIntoView({ behavior: "smooth" });
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

