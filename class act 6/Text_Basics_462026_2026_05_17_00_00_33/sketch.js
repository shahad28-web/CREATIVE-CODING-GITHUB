function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(220);
  text('hello', 50, 50);
  textFont('Georgia');
  noStroke();
  fill(50);
  
  textSize(70);
  text('hello', 50, 150);
  textAlign(CENTER,CENTER);
  textFont('Brush Scropt MT');
  
  textSize(height/2);
  text('hello', width/2,height/2);
  
}