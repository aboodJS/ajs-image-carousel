let counter = 0;
function nextSlide(slidesArr) {
  if (counter < slidesArr.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  slidesArr.forEach((i) => {
    i.style.display = "none";
  });
  slidesArr[counter].style.display = "block";
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
    i.style.display = "none";
  });
  slidesArr[counter].style.display = "block";
  slidesArr[counter].style.transition;
  console.log(slidesArr[counter]);
  console.log(counter);
}

export { nextSlide, previousSlide };
