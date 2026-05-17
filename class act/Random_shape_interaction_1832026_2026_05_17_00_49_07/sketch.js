let squareX, squareY, squareSize;
let isAttached = false;
let trailOpacity = 0.2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  strokeWeight(0.3);
}

function draw() {
  background(0, trailOpacity);

  if (isAttached) {
    // keeps squares with the canvas while following the mouse
    squareX = constrain(mouseX, squareSize / 2, width - squareSize / 2);
    squareY = constrain(mouseY, squareSize / 2, height - squareSize / 2);
  }

  if (mouseIsPressed && mouseButton === LEFT) {
    // when the mouse left is pressed, square will be randomised
    squareSize = random(1, 200);
  }

  if (squareX && squareY) {
    // square position is defined, draw the square
    stroke(255);
    square(squareX - squareSize / 2, squareY - squareSize / 2, squareSize);
  }

  if (mouseIsPressed && mouseButton === RIGHT) {
    let orangeSize = random(10, 100);
    stroke(247, 106, 12);
    square(mouseX - orangeSize / 2, mouseY - orangeSize / 2, orangeSize);
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    isAttached = !isAttached; // toggles the attached state (on/off)
  }

  if (isAttached) {
    // sets a new ranadom size and position of the square
    squareSize = random(1, 200);
    squareX = constrain(mouseX, squareSize / 2, width - squareSize / 2);
    squareY = constrain(mouseY, squareSize / 2, height - squareSize / 2);
  }
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveCanvas("myCanvas", "png");
  }
}