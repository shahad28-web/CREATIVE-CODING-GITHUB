const N_RIBBONS = 55;  
const SEGS      = 22;  
const ATTRACT_R = 130;  
const SPRING    = 0.09; 
const DRAG      = 0.88; 

let ribbons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  colorMode(HSB, 360, 100, 100, 100);
  initRibbons();
}

function initRibbons() {
  ribbons = [];
  for (let i = 0; i < N_RIBBONS; i++) {
    let x = random(width), y = random(height);
    let pts = [];
    for (let j = 0; j < SEGS; j++) pts.push({ x, y });
    ribbons.push({ pts, vx: 0, vy: 0, hue: random(360), speed: 0 });
  }
}

function draw() {
  background(0, 0, 0, 18); 

  let mx = mouseX, my = mouseY;

  for (let rb of ribbons) {

    let dx = mx - rb.pts[0].x;
    let dy = my - rb.pts[0].y;
    let d  = sqrt(dx * dx + dy * dy);

    if (d < ATTRACT_R) {
      let f = SPRING * (1 - d / ATTRACT_R);
      rb.vx += f * dx;
      rb.vy += f * dy;
    }

    rb.vx *= DRAG;
    rb.vy *= DRAG;
    rb.speed = sqrt(rb.vx * rb.vx + rb.vy * rb.vy);

    rb.pts[0].x += rb.vx;
    rb.pts[0].y += rb.vy;

    for (let j = 1; j < SEGS; j++) {
      rb.pts[j].x += (rb.pts[j - 1].x - rb.pts[j].x) * 0.35;
      rb.pts[j].y += (rb.pts[j - 1].y - rb.pts[j].y) * 0.35;
    }

    noFill();
    for (let j = 0; j < SEGS - 1; j++) {
      let t = j / (SEGS - 1);
      let h = (rb.hue + rb.speed * 8) % 360
      let s = map(rb.speed, 0, 8, 30, 90);
      let b = map(t, 0, 1, 95, 10);          
      let a = map(t, 0, 1, 85, 0);
      
      stroke(h, s, b, a);
      
      strokeWeight(map(t, 0, 1, 2.8, 0.3));
      
      line(rb.pts[j].x, rb.pts[j].y, rb.pts[j + 1].x, rb.pts[j + 1].y);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initRibbons();
}