let images = document.querySelectorAll(".slick-img-content > img");
let loginRightContainer = document.getElementById("login-right-container");
let btnSlickBack = document.querySelector(".slick-btn-back");
let btnSlickForward = document.querySelector(".slick-btn-forward");
let slickDots = document.querySelectorAll(".slick-dots > div");
let bgColors = ["#2E2E2E", "#AE5757", "#AD9D6A"];

let nIntervId = 0,
  imgIndex = 0;

const changeImageSlider = () => {
  if (!nIntervId) {
    nIntervId = setInterval(flashImage, 2000);
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

  console.log(imgIndex);
  if (imgIndex >= 0) {
    idx1 = imgIndex % length;
    idx2 = (imgIndex + 1) % length;
  } else {
    idx1 = (length - (Math.abs(imgIndex) % length)) % length;
    idx2 = (length - (Math.abs(imgIndex + 1) % length)) % length;
  }
  console.log(idx1, idx2);

  images[idx1].classList.remove("hidden");
  images[idx2].classList.add("hidden");

  slickDots[idx1].classList.add("dot-active");
  slickDots[idx2].classList.remove("dot-active");

  loginRightContainer.style.backgroundColor = bgColors[idx1];
  imgIndex = idx1;
};

const flashImage = () => {
  imgIndex++;
  let length = images.length;
  images[Math.abs(imgIndex) % length].classList.remove("hidden");
  images[Math.abs(imgIndex - 1) % length].classList.add("hidden");

  slickDots[Math.abs(imgIndex) % length].classList.add("dot-active");
  slickDots[Math.abs(imgIndex - 1) % length].classList.remove("dot-active");

  loginRightContainer.style.backgroundColor = bgColors[imgIndex % length];
};

changeImageSlider();

btnSlickBack.addEventListener("click", () => {
  stopInterval();
  imgIndex--;
  flashImagePre();
  changeImageSlider();
});

btnSlickForward.addEventListener("click", () => {
  stopInterval();
  flashImage();
  changeImageSlider();
});
