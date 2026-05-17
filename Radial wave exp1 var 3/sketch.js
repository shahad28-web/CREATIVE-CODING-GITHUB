function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  noSmooth();
}

function draw() {
  loadPixels();

  let t  = frameCount * 0.022;
  let f1 = map(mouseX, 0, width,  0.035, 0.13);
  let f2 = f1 * map(mouseY, 0, height, 0.965, 1.07);

  let sx = sin(t * 0.28) * 35;
  let sy = cos(t * 0.37) * 25;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {

      let dx1 = x - width  / 2;
      let dy1 = y - height / 2;
      let w1  = sin(sqrt(dx1 * dx1 + dy1 * dy1) * f1 - t);

      let dx2 = x - width  / 2 + sx;
      let dy2 = y - height / 2 + sy;
      let w2  = sin(sqrt(dx2 * dx2 + dy2 * dy2) * f2 - t * 1.09);

      let b   = floor((w1 * w2 + 1) * 127.5);
      let idx = 4 * (x + y * width);
      pixels[idx]     = b;
      pixels[idx + 1] = b;
      pixels[idx + 2] = b;
      pixels[idx + 3] = 255;
    }
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}