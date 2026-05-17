function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  background(0);

  let t          = frameCount * 0.004;
  let mouseAngle = map(mouseX, 0, width,  -0.05, 0.05);
  let spacing    = map(mouseY, 0, height,  7, 24);

  push();
  translate(width / 2, height / 2);
  rotate(t + mouseAngle);
  stroke(255, 190);
  strokeWeight(0.75);
  noFill();
  for (let x = -width; x <= width; x += spacing) {
    line(x, -height, x, height);
  }
  pop();

  blendMode(DIFFERENCE);
  push();
  translate(width / 2, height / 2);
  rotate(-t * 1.27 - mouseAngle * 0.6);
  stroke(255, 190);
  strokeWeight(0.75);
  noFill();
  for (let x = -width; x <= width; x += spacing) {
    line(x, -height, x, height);
  }
  pop();
  blendMode(BLEND);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}