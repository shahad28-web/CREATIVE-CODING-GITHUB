const COLS  = 28;    
const ROWS  = 18;    
const K     = 0.12;
const DAMP  = 0.82; 
const RAD   = 120;   
const FORCE = 20;   
let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  initGrid();
}

function initGrid() {
  nodes = [];
  let gx = width  / (COLS + 1);
  let gy = height / (ROWS + 1);
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      let hx = gx * (c + 1);
      let hy = gy * (r + 1);
      nodes.push({ x: hx, y: hy, hx, hy, vx: 0, vy: 0, r, c });
    }
  }
}

function draw() {
  background(0, 28);  

  let mx = mouseX, my = mouseY;


  for (let n of nodes) {
    let dx = n.x - mx, dy = n.y - my;
    let d  = sqrt(dx * dx + dy * dy);

  
    if (d < RAD && d > 0.5) {
      let f = FORCE * (1 - d / RAD) * (1 - d / RAD);
      n.vx += f * dx / d;
      n.vy += f * dy / d;
    }

    n.vx += (n.hx - n.x) * K;
    n.vy += (n.hy - n.y) * K;

    n.vx *= DAMP;
    n.vy *= DAMP;
    n.x  += n.vx;
    n.y  += n.vy;
  }

  strokeWeight(0.7);
  noFill();
  for (let n of nodes) {
    let right = nodes[n.r * COLS + n.c + 1];
    let down  = nodes[(n.r + 1) * COLS + n.c];

    let stretch = dist(n.x, n.y, n.hx, n.hy);
    let t = constrain(stretch / 80, 0, 1);
    let col = lerpColor(color(80, 160, 255, 120), color(255, 80, 180, 200), t);
    stroke(col);

    if (right && n.c < COLS - 1) line(n.x, n.y, right.x, right.y);
    if (down  && n.r < ROWS - 1) line(n.x, n.y, down.x,  down.y );
  }

  noStroke();
  for (let n of nodes) {
    let d = dist(n.x, n.y, n.hx, n.hy);
    let s = map(d, 0, 60, 2, 6);
    fill(200, 220, 255, map(d, 0, 60, 80, 230));
    ellipse(n.x, n.y, s, s);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initGrid();
}