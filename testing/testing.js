import {
  nextSlide,
  previousSlide,
  autoSlide,
  backBtn,
  forwardBtn,
} from "../src/index.js";

const slides = document.querySelectorAll(".slides");

backBtn.onclick = () => previousSlide(slides);
forwardBtn.onclick = () => nextSlide(slides);

autoSlide(slides, 2200);
