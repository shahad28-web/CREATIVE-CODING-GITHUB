var letters = [
  [0, 1, 1, 0,
   1, 0, 0, 1,
   1, 1, 1, 1,
   1, 0, 0, 1,
   1, 0, 0, 1], // A

  [1, 1, 1, 0,
   1, 0, 0, 1,
   1, 1, 1, 0,
   1, 0, 0, 1,
   1, 1, 1, 0], // B

  [0, 1, 1, 1,
   1, 0, 0, 0,
   1, 0, 0, 0,
   1, 0, 0, 0,
   0, 1, 1, 1], // C

  [1, 1, 1, 0,
   1, 0, 0, 1,
   1, 0, 0, 1,
   1, 0, 0, 1,
   1, 1, 1, 0]  // D
];

var blockSize = 24;
var gap = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noLoop(); // static only
}

function draw() {
  background(245, 245, 240);

  let cols = 4;
  let rows = 5;
  let letterWidth = cols * blockSize;
  let letterHeight = rows * blockSize;
  let totalWidth = letters.length * letterWidth + (letters.length - 1) * gap;

  let startX = width / 2 - totalWidth / 2;
  let startY = height / 2 - letterHeight / 2;

  for (let i = 0; i < letters.length; i++) {
    let x = startX + i * (letterWidth + gap);
    let y = startY;
    drawStyledLetter(x, y, letters[i]);
  }
}

function drawStyledLetter(x, y, data) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] === 1) {
      let col = j % 4;
      let row = floor(j / 4);

      let bx = x + col * blockSize;
      let by = y + row * blockSize;

      // shadow
      fill(60, 60, 60, 80);
      rect(bx + 6, by + 6, blockSize, blockSize, 4);

      // outer block
      fill(30, 30, 30);
      rect(bx, by, blockSize, blockSize, 4);

      // main face
      fill(40, 140, 255);
      rect(bx + 2, by + 2, blockSize - 4, blockSize - 4, 3);

      // top-left highlight
      fill(255, 255, 255, 90);
      rect(bx + 4, by + 4, blockSize / 2, blockSize / 5, 2);
      rect(bx + 4, by + 4, blockSize / 5, blockSize / 2, 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}