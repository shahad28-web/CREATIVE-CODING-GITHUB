let angle = 0
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(220);
  
  let x = width/2;
  let y = height/2;
  
  push();
  translate(x,y);
  rotate(angle);
  
  textFont('Times New Roman');
  noStroke();
  textSize(72);
  
  text('hello', 0,0);
  pop();
  
  angle += 0.05;

}