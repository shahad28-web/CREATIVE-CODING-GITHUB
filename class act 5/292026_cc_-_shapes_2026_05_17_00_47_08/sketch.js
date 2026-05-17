let shapes = [];

function setup() {
  createCanvas(400, 400);
  noLoop();
  generate();
  render();
}

function mousePressed() {
  generate();
  render();
}

function generate() {
  shapes = [];

  const strokeW = random(2, 6);
  const fillA = random(140, 210);   
  const strokeA = 0;              

  function add(x, y, w, h, fillCol, strokeCol = [0,0,0]) {
    shapes.push({
      x, y, w, h,
      fillCol,
      strokeCol,
      strokeW,
      fillA,
      strokeA
    });
  }

  // BIG square (top-left)
  add(
    20, 20,
    random(140, 220),
    random(140, 220),
    [255, 60, 60],
    [20, 20, 20]
  );

  // RIGHT rectangle
  add(
    250, 30,
    120, 160,
    [random(180,255), 40, 40],
    [0,0,0]
  );

  // MIDDLE band
  add(
    20, 220,
    210, 110,
    [255, 230, random(80,180)],
    [0,0,0]
  );

  // SMALL square bottom-left
  let s = random(60,110);
  add(
    30, 300,
    s, s,
    [60, 90, 255],
    [0,150,0]
  );

  // BIG square bottom-right
  let m = random(100,170);
  add(
    210, 240,
    m, m,
    [60,120,255],
    [200,0,0]
  );
}

function render() {
  background(245); // slight off-white improves contrast

  rectMode(CORNER);

  for (let sh of shapes) {
    strokeWeight(sh.strokeW);
    stroke(...sh.strokeCol, sh.strokeA);
    fill(...sh.fillCol, sh.fillA);
    rect(sh.x, sh.y, sh.w, sh.h);
  }

  // frame
  stroke(0);
  strokeWeight(2);
  noFill();
  rect(10, 10, width-20, height-20);
}