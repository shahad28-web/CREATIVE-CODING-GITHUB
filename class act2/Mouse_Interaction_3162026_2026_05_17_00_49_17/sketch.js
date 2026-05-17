function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {}

function keyPressed() {
  if (key === "e") {
    background(random, mouseX, mouseY);
  }
}

function mouseMoved() {
  if (keyPressed && key === "r") {
    fill(193, 14, 14, 30); // 4th argument is known as alpha, transparency, opacity
    noStroke();
    ellipse(mouseX, mouseY, 30, 30);
    circle(mouseX, mouseY, 30);
  }
}

function mouseDragged() {
  if (mouseButton === RIGHT) {
    fill(mouseX, mouseY, 80 - mouseY);
    stroke(0);
    rect(mouseX, mouseY, 30, 30);
    rect(500 - mouseX, mouseY, 30, 30);
    rect(mouseX, 500 - mouseY, 30, 30);
    rect(500 - mouseX, 500 - mouseY, 30, 30);
  }
  if (keyIsPressed && key === "r" && mouseButton === LEFT) {
    fill(193, 14, 14, 30);
    stroke(167, 12, 12);
    rect(mouseX, mouseY, mouseX / 5, mouseY / 5);
  }
}