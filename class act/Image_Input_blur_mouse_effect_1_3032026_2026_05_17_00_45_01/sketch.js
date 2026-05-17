var img;

function preload() {
  img = loadImage("tree.jpg")
}

function setup() {
  createCanvas(400, 400);
  background(0);
  
}

function draw() {
  background(220);
  image(img,0,0);
  var v = map(mouseX,0,width,0,5);
  filter(BLUR,v);
  
}