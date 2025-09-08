import { nextSlide, previousSlide } from "../src/index.js";

const slides = document.querySelectorAll("img");
const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");

forwardBtn.onclick = () => nextSlide(slides);
backBtn.onclick = () => previousSlide(slides);
