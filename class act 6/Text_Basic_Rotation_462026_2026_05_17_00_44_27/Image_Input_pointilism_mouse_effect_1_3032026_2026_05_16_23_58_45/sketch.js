var img;

function preload() {
  img = loadImage("tree.jpg")
}

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  background(220);
  x = mouseX;
  y = mouseY;
  image(img, 0,0);
  var c= get(x,y);  //get color according to mouse
  fill(c); // sets the fill color
  ellipse(x,y,100,100); //draws an ellipse at the current mouse position

  
}