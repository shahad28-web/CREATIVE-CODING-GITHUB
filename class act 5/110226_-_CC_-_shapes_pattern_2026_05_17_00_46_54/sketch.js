let step = 50;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(245);

  // Subtle grid alignment: centers land nicely in the canvas
  const margin = step / 2;

  for (let y = margin; y < height; y += step) {
    for (let x = margin; x < width; x += step) {
      const size = random(10, 40);
      const isCircle = random() < 0.5;

      // Minimal palette: mostly near-black, sometimes slightly lighter
      const shade = random() < 0.15 ? 160 : 30; // small variation
      fill(shade);

      if (isCircle) {
        ellipse(x, y, size, size);
      } else {
        rect(x, y, size, size, 6); // tiny rounding = cleaner
      }
    }
  }

 
}
