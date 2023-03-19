// popup
export default function popup() {
  const popupOpenButton = document.querySelector(".popup-open-btn");
  const popupCloseButton = document.querySelector(".popup__close-btn");
  const popup = document.querySelector(".popup");
  const video = document.querySelector("#video");
  const popupOpen = () => {
    popup.classList.add("show");
    document.body.classList.add("_lock");
    video.setAttribute("src", "https://www.youtube.com/embed/-u7CI7NAXNo");
  };
  const popupClose = () => {
    popup.classList.remove("show");
    document.body.classList.remove("_lock");
    video.setAttribute("src", "#");
  };

  popupOpenButton.addEventListener("click", popupOpen);
  popupCloseButton.addEventListener("click", popupClose);
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && popup.classList.contains("show")) {
      popupClose();
    }
  });
}
popup();
