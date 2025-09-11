# ajs-image-carousel

ajs-image-carousel is a NPM package designed to help you build image carousels

**warning: this project is still in early development, and isn't recommended for use in production enviroments**

## Usage

currently the package only allows for making one image carousel per page, with functionality for multiple ones on the way. Please keep that in mind while using the package.

### Manual Sliding

1. first install the package with npm

```
npm install ajs-image-carousel
```

2. in your JS file import the following

`
import { nextSlide, previousSlide, backBtn, forwardBtn } from "./node_modules/ajs-image-carousel/src/index.js"
`

3. add the following IDs to your carousel buttons

```
<button id="back-btn">
//code here
<button id="forward-btn">
```

4. now bound the functions that you imported to the buttons which you gave the IDs to:

```
backBtn.onclick = () => previousSlide(array-with-your-images)
forwardBtn.onclick = () => nextSlide(array-with-your-images)
```

now try it to see if it works!

### automated Sliding

**note: the automated sliding feature is fully compatible with manual sliding**

1. after installing the package, add the following to your import statment
```
import { nextSlide, previousSlide, backBtn, forwardBtn,autoSlide } from "./node_modules/ajs-image-carousel/src/index.js"
```

2. then call the following function
```
\\ timeOut is the time between each slide in milliseconds
autoSlide(array-with-your-images, timeOut)
```