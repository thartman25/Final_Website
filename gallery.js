var images = [
  'st1.jpg',
  'st2.jpg',
  'st3.jpg',
  'st4.jpg',
  'st5.jpg',
  'st6.jpg',
  'st7.jpg',
  'st8.jpg',
  'st9.jpg'
];

// galleryBox is the div with a class of gallery
// find the div and set the variable to the DOM Element
var galleryBox = document.querySelector('.gallery');

// heroImage is setting up a template to be placed as your hero image
// we're using the images array and grabbing the first image (ie. 0th place)
var heroImage = `<img src="${images[0]}" />`;

// thumbs is a blank variable right now
// you need to:
// loop through your images
// make a template of an image tag
// set the src of the img tag to the current image you're looping over
// add that image to the thumbs variable (thumbs += template)
var thumbs = "";
images.forEach(function(image) {
  thumbs += `<img src="${image}" />`;
});

// find the hero div using querySelector()
// set the innerHTML to your heroImage template
var heroDiv = document.querySelector('.hero');
heroDiv.innerHTML = heroImage;

// find the thumbs div using querySelector()
// set the innerHTML to your thumbs template
var thumbsDiv = document.querySelector('.thumbs');
thumbsDiv.innerHTML = thumbs;

// add an event listener on the galleryBox div
// use a 'click' listener
// in the function that handles the click:
// create a variable for a new image template
// set the src of the image to the src of the thumbnail you clicked on (hint use event variable)
// find the hero div with querySelector()
// set the innerHTML of that div to be equal to your new hero template
galleryBox.addEventListener('click', function(event) {
  var newImageSource = event.target.src;
  if (newImageSource) {
    var newImageTemplate = `<img src="${newImageSource}" />`;
    heroDiv.innerHTML = newImageTemplate;
  }
});

// THAT'S IT! go to your page and test it out!
// Build on this and implement it to your own site.
