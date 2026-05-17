let cell = 50;

function setup() {
  createCanvas(400, 400);
  frameRate(10);

  rectMode(CENTER);   // makes grid logic easier
  stroke("#000000");
  strokeWeight(6);
}

function draw() {
  background("#000000");

  for (let x = cell / 2; x < width; x += cell) {
    for (let y = cell / 2; y < height; y += cell) {

      // smooth changing value instead of flicker
      let choice = noise(x * 0.05, y * 0.05, frameCount * 0.1);

      if (choice < 0.5) {
        // diagonal line \
        line(
          x - cell/2, y - cell/2,
          x + cell/2, y + cell/2
        );
      } else {
        // yellow square + vertical line
        fill("#FF0000");
        noStroke();
        square(x, y, cell);

        stroke("#3D3D3D");
        line(
          x - cell/2, y - cell/2,
          x - cell/2, y + cell/2
        );
      }
    }
  }
}
