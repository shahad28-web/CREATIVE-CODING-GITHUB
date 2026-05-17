function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  for (let i = 0; i < 400; i = i + 1) {
    fill(
      127.5 + 127.5 * sin(i / 20 + frameCount / 10),
      255 * sin(i / 21 + frameCount / 100),
      127.5 + 127.5 * sin(i / 40 + frameCount / 10)
    );

    circle(
      height / 2 + 100 * sin(TWO_PI * i / 400 + frameCount / 20),
      height / 2 + 100 * cos(TWO_PI * i / 400 + frameCount / 30),
      50 * sin(5 * PI * i / 400 + frameCount / 10)
    );
  }
}