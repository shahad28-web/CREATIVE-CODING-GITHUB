function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop();
}

function mousePressed() {
  // create a burst of circles
  for (let i = 0; i < 15; i++) {

    let angle = random(TWO_PI);
    let radius = random(10, 60);

    let x = mouseX + cos(angle) * radius;
    let y = mouseY + sin(angle) * radius;

    fill(random(255), random(255), random(255), 170);
    stroke(0);
    strokeWeight(2);

    circle(x, y, random(20, 60));
  }
}