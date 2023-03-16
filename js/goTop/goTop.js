// GoTop стрелка

function goTop() {
  const goTopBtn = document.querySelector(".goTopBtn");

  window.addEventListener("scroll", () => {
    let res = window.scrollY;
    res > 1500
      ? goTopBtn.classList.add("goTopBtn-active")
      : goTopBtn.classList.remove("goTopBtn-active");
  });

  goTopBtn.addEventListener("click", () => {
    return window.scrollTo(0, 0);
  });
}

goTop();
