function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  for (let i = 0; i < 400; i = i + 1) {
    fill(
      127.5 + 127.5 * sin(i / 20 + frameCount / 20),
      127.5 + 127.5 * sin(i / 45 + frameCount / 45),
      127.5 + 127.5 * sin(i / 5 + frameCount / 8)
    );
    circle(i, height / 2 + 100 * sin(i / 30 + frameCount / 20), 50 * sin(i / 50));
  }
}
