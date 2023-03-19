export default function burger() {
  const menu = document.querySelector(".menu");
  const menuBody = document.querySelector(".menu__body");
  const menuOpenBtn = document.querySelector(".menu-open-btn");
  const menuCloseBtn = document.querySelector(".menu-close-btn");
  let animationTime = 2;

  const burgerMenuOpen = (animationTime) => {
    menuBody.classList.add("__active");
    menuBody.style.transform = "translateX(0%)";
    menuOpenBtn.style.display = "none";
    document.body.classList.add("lock");
    menuBody.style.display = "block";
    menuBody.style.animation = `menuOpen ${animationTime}s ease-in-out`;
  };

  const burgerMenuClose = (animationTime) => {
    menuBody.classList.remove("__active");
    menuBody.style.transform = "translateX(100%)";
    menuOpenBtn.style.display = "block";
    document.body.classList.remove("lock");
    menuBody.style.animation = `menuClose ${animationTime}s ease-in-out`;
  };

  document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(menu)) {
      burgerMenuClose(animationTime);
    }
  });

  menuOpenBtn.addEventListener("click", () => {
    burgerMenuOpen(animationTime);
  });

  menuCloseBtn.addEventListener("click", () => {
    burgerMenuClose(animationTime);
  });
}
burger();
