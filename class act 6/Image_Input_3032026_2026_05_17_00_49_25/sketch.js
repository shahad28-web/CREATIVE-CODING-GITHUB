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
  tint(255,0,0);
  image(img,0,0,img.width/2,img.height/2);
  noTint();
  
  image(img,0,img.height/2,img.width/2,img.height/2);
    
}