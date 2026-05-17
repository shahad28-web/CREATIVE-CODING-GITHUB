let cell = 50;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(30);
}

function draw() {
  background(250);

  for (let x = cell / 2; x < width; x += cell) {
    for (let y = cell / 2; y < height; y += cell) {

      // smooth changing value over time
      let n = noise(x * 0.02, y * 0.02, frameCount * 0.02);

      // animated size (slow change)
      let size = map(n, 0, 1, 15, 45);

      // smooth color evolution
      let r = map(noise(x * 0.03, y * 0.03, frameCount * 0.01), 0, 1, 80, 255);
      let g = map(noise(x * 0.04, y * 0.02, frameCount * 0.01 + 50), 0, 1, 80, 255);
      let b = map(noise(x * 0.02, y * 0.04, frameCount * 0.01 + 100), 0, 1, 80, 255);

      stroke(0, 120);
      strokeWeight(2);
      fill(r, g, b, 200);

      // stable shape decision (no flicker)
      let shapeChoice = noise(x * 0.05, y * 0.05);

      if (shapeChoice < 0.5) {
        ellipse(x, y, size, size);
      } else {
        rect(x, y, size, size, 6);
      }
    }
  }

}