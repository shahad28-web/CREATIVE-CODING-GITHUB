let capture; // store the webcam feed
let rows = 20; // vertical
let cols = 20; // horizontal
let tileWidth; // width of each grid square
let tileHeight; // height
let pd; // pixel density - sharp/smooth

function setup() {
  createCanvas(400, 400);

  tileWidth = width / cols; // width of 1 tile
  tileHeight = height / cols; // height of 1 tile
  pd = pixelDensity();

  capture = createCapture(VIDEO); // to show the video
  capture.hide(); // to hide the video
}

function draw() {
  push();
  translate(width, 0); // drawing cursor to the right edge of the canvas
  scale(-1, 1); // reverses the x axis to create a mirror like reflection
  image(capture, 0, 0, width, height, 0, 0, capture.width, capture.height); // draw the video/camera to the canvas
  loadPixels(); // all pixel currently on the canvas into an array
  pop();
  background(0);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // floor - round a number down to a nearest whole integer
      let x = floor(tileWidth * (col + 0.5)); // horizontal center of the current grid tile
      let y = floor(tileHeight * (row + 0.5)); // vertical

      let calculatedWidth = width * pd; // total physical pixels across the canvas
      let calculatedY = y * pd; // adjust the pd in y axis
      let calculatedX = x * pd; // adjust the pd in x axis
      
      // find the starting index of RGBA values in 1 pixel tile
      let index = (calculatedY * calculatedWidth + calculatedX) * 4; 
      //colors
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      let a = pixels[index + 3]; // alpha
      
      let c = color(r,g,b,a) // extraction of values 
      fill (c);
      rectMode(CENTER);
      rect(x, y, tileWidth, tileHeight, tileWidth * 0.2); // corner
    }
  }
}