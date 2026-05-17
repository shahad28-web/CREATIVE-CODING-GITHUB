let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER,CENTER);
  textSize(100);
  background(250);
}

function draw() {
  fill(255);
  
  translate(width/2, height/2);
  rotate(frameCount * 0.02);
  stroke(0);

  text('creative coding', 0, 0);
  


}