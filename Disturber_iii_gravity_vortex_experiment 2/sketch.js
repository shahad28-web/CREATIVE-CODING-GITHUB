const N_PTS  = 1800;  
const G_MOUSE = 420; 
const G_HOME  = 0.025;
const DAMPING = 0.978;
const MAX_V   = 9;    

let pts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  initParticles();
}

function initParticles() {
  pts = [];
  for (let i = 0; i < N_PTS; i++) {
    let x = random(width), y = random(height);
    pts.push({
      x, y,
      hx: x, hy: y,                      
      vx: random(-0.4, 0.4),
      vy: random(-0.4, 0.4)
    });
  }
}

function draw() {
  background(0, 30);  
  let mx = mouseX, my = mouseY;
  let inCanvas = mx > 0 && mx < width && my > 0 && my < height;

  for (let pt of pts) {
    if (inCanvas) {
      let dx = mx - pt.x, dy = my - pt.y;
      let d2 = dx * dx + dy * dy;
      let d  = sqrt(d2);

      if (d > 1) {
        let f = G_MOUSE / (d2 + 200); 
        pt.vx += f * dx;
        pt.vy += f * dy;

        pt.vx += (-dy / d) * f * 3.5;
        pt.vy += ( dx / d) * f * 3.5;
      }
    }

    pt.vx += (pt.hx - pt.x) * G_HOME;
    pt.vy += (pt.hy - pt.y) * G_HOME;

    pt.vx *= DAMPING;
    pt.vy *= DAMPING;

    let spd = sqrt(pt.vx * pt.vx + pt.vy * pt.vy);
    if (spd > MAX_V) {
      pt.vx = (pt.vx / spd) * MAX_V;
      pt.vy = (pt.vy / spd) * MAX_V;
    }

    pt.x += pt.vx;
    pt.y += pt.vy;

    let s = constrain(spd / MAX_V, 0, 1);
    let r = lerp( 60, 255, s);
    let g = lerp( 80, 240, s * s);
    let b = lerp(180, 255, 1 - s);
    stroke(r, g, b, map(s, 0, 1, 120, 255));
    strokeWeight(map(s, 0, 1, 1, 2.4));
    point(pt.x, pt.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initParticles();
}