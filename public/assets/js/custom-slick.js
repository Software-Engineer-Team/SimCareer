import imgs from "/assets/data/imgs.js";
let images = document.querySelectorAll(".slick-img-content > img");
let loginRightContainer = document.getElementById("login-right-container");
let btnSlickBack = document.querySelector(".slick-btn-back");
let btnSlickForward = document.querySelector(".slick-btn-forward");
let slickDots = document.querySelectorAll(".slick-dots > div");
let slickImgTitle = document.querySelector(".slick-img-title");
let slickImgDes = document.querySelector(".slick-img-description");

let nIntervId = 0,
  imgIndex = 0;

const changeImageSlider = () => {
  if (!nIntervId) {
    nIntervId = setInterval(flashImage, 3000);
  }
};

const stopInterval = () => {
  clearInterval(nIntervId);
  nIntervId = null;
};

const flashImagePre = () => {
  let idx1,
    idx2,
    length = images.length;

  if (imgIndex >= 0) {
    idx1 = imgIndex % length;
    idx2 = (imgIndex + 1) % length;
  } else {
    idx1 = (length - (Math.abs(imgIndex) % length)) % length;
    idx2 = (length - (Math.abs(imgIndex + 1) % length)) % length;
  }

  images[idx1].classList.remove("hidden");
  images[idx2].classList.add("hidden");

  slickDots[idx1].classList.add("dot-active");
  slickDots[idx2].classList.remove("dot-active");

  slickImgTitle.textContent = imgs[idx1].title;
  slickImgDes.textContent = imgs[idx1].description;

  loginRightContainer.style.backgroundColor = imgs[idx1].bg;
  imgIndex = idx1;
};

const flashImage = () => {
  imgIndex++;
  let length = images.length;
  images[Math.abs(imgIndex) % length].classList.remove("hidden");
  images[Math.abs(imgIndex - 1) % length].classList.add("hidden");

  slickDots[Math.abs(imgIndex) % length].classList.add("dot-active");
  slickDots[Math.abs(imgIndex - 1) % length].classList.remove("dot-active");

  slickImgTitle.textContent = imgs[imgIndex % length].title;
  slickImgDes.textContent = imgs[imgIndex % length].description;
  loginRightContainer.style.backgroundColor = imgs[imgIndex % length].bg;
};

changeImageSlider();

btnSlickBack?.addEventListener("click", () => {
  stopInterval();
  imgIndex--;
  flashImagePre();
  changeImageSlider();
});

btnSlickForward?.addEventListener("click", () => {
  stopInterval();
  flashImage();
  changeImageSlider();
});
