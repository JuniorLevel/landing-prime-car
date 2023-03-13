// Бургер меню функционал

const menu = document.querySelector(".menu");
const menuBody = document.querySelector(".menu__body");
const menuOpenBtn = document.querySelector(".menu-open-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
let animationTime = 2;

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(menu)) {
    BurgerMenuClose(animationTime);
  }
});

function BurgerMenuOpen(animationTime) {
  menuBody.classList.toggle("__active");
  menuBody.style.transform = "translateX(0%)";
  menuOpenBtn.style.display = "none";
  document.body.classList.toggle("__lock");
  menuBody.style.animation = `menuOpen ${animationTime}s ease-in-out`;
  menuBody.style.display = "block";
}

function BurgerMenuClose(animationTime) {
  menuBody.classList.remove("__active");
  menuBody.style.transform = "translateX(100%)";
  menuOpenBtn.style.display = "block";
  document.body.classList.remove("__lock");
  menuBody.style.animation = `menuClose ${animationTime}s ease-in-out`;
  setTimeout(() => {
    menuBody.style.display = "none";
  }, animationTime * 1000);
}

menuOpenBtn.addEventListener("click", () => {
  BurgerMenuOpen(animationTime);
});

menuCloseBtn.addEventListener("click", () => {
  BurgerMenuClose(animationTime);
});

// GoTop стрелка
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
