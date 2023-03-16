//Intersection Observer API
function scrollEvent() {
  const animateTitles = document.querySelectorAll(".animate-title");
  const animateTexts = document.querySelectorAll(".animate-text");
  const animateBtn = document.querySelectorAll(".btn");
  const animateAboutImg = document.querySelectorAll(".about-picture__img");
  const reviewContent = document.querySelectorAll(".review-content");
  const benefitsItems = document.querySelectorAll(".benefits-inner__item");
  const benefitsSvg = document.querySelectorAll(".benefits-item__img");
  const carsItem = document.querySelectorAll(".cars-inner__item");
  const contactMap = document.querySelectorAll(".contact-map");
  const footerTopItems = document.querySelectorAll(".footer-top__items");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      } else {
        entry.target.classList.remove("active");
      }
    });
  });
  Array.from(animateTitles).forEach((animateTitle) => {
    observer.observe(animateTitle);
  });
  Array.from(animateTexts).forEach((animateText) => {
    observer.observe(animateText);
  });
  Array.from(animateBtn).forEach((btn) => {
    observer.observe(btn);
  });
  Array.from(animateAboutImg).forEach((aboutImg) => {
    observer.observe(aboutImg);
  });
  Array.from(reviewContent).forEach((content) => {
    observer.observe(content);
  });
  Array.from(benefitsItems).forEach((item) => {
    observer.observe(item);
  });
  Array.from(benefitsSvg).forEach((svg) => {
    observer.observe(svg);
  });
  Array.from(carsItem).forEach((item) => {
    observer.observe(item);
  });
  Array.from(contactMap).forEach((map) => {
    observer.observe(map);
  });
  Array.from(footerTopItems).forEach((footerItem) => {
    observer.observe(footerItem);
  });
}
scrollEvent();
