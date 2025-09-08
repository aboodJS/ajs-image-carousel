let counter = 0;
function nextSlide(slidesArr) {
  if (counter < slidesArr.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slidesArr.forEach((i) => {
    i.classList.add("disabled");
  });
  slidesArr[counter].classList.remove("disabled");
  console.log(slidesArr[counter]);
  console.log(counter);
}

function previousSlide(slidesArr) {
  if (counter > 0) {
    counter -= 1;
  } else {
    counter = slidesArr.length - 1;
  }
  slidesArr.forEach((i) => {
    i.classList.add("disabled");
  });
  slidesArr[counter].classList.remove("disabled");
  console.log(slidesArr[counter]);
  console.log(counter);
}

export { nextSlide, previousSlide };
