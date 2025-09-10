# ajs-image-carousel

ajs-image-carousel is a NPM package designed to help you build image carousels

**warning: this project is still in early development, and isn't recommended for use in production enviroments**

## Usage
currently the package only allows for making one image carousel per page, with functionality for multiple ones on the way. Please keep that in mind while using the package.

1. first install the package with npm
```
npm install ajs-image-carousel
```

2. then in your JS file import the following
```import { nextSlide, previousSlide, backBtn, forwardBtn }```

3. add the IDs `back-btn` and `forward-btn` to the carousel buttons

4. now bound the functions that you imported to the buttons which you gave the IDs to:
```
backBtn.onclick = () => previousSlide(array-with-your-images)
forwardBtn.onclick = () => nextSlide(array-with-your-images)
```

now try it to see if it works!