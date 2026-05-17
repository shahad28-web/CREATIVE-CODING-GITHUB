
// - eyes follow mouse a little
// - natural blinking
// - mouth reacts to mouse distance (near = smile, far = surprised)


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(15);

  // --- Face Shape ---
  let cx = width / 2;
  let cy = height / 2;
  let faceR = 150;

  // subtle breathing (normal)
  let t = millis() * 0.001;
  let breathe = 1 + 0.015 * sin(t * 2.0);

  // neon-ish stroke (simple)
  stroke(255, 150, 200);
  strokeWeight(4);
  noFill();

  // face circle (centered)
  ellipse(cx, cy, faceR * 2 * breathe, faceR * 2 * breathe);

  // --- EYES (follow mouse slightly + blink) ---
  let eyeOffX = 55;
  let eyeY = cy - 55;
  let eyeR = 12;

  // look direction (small, clamped)
  let dx = constrain((mouseX - cx) * 0.04, -8, 8);
  let dy = constrain((mouseY - cy) * 0.04, -6, 6);

  // blink (quick + occasional)
  let blink = blinkAmount(t); // 0..1 (1 = open)

  // left eye
  ellipse(cx - eyeOffX + dx, eyeY + dy, eyeR * 2, eyeR * 2 * blink);
  // right eye
  ellipse(cx + eyeOffX + dx, eyeY + dy, eyeR * 2, eyeR * 2 * blink);

  // --- MOUTH (normal “reaction” to mouse distance) ---
  let d = dist(mouseX, mouseY, cx, cy);
  // map distance to expression: close -> smile, far -> surprised
  let surprised = constrain(map(d, 40, 260, 0, 1), 0, 1);

  let mouthY = cy + 55;

  if (surprised < 0.55) {
    // smile arc
    let smileAmt = map(surprised, 0, 0.55, 1, 0); // 1 strong smile -> 0 neutral
    drawSmile(cx, mouthY, 70, 35 * smileAmt);
  } else {
    // "O" mouth
    let oAmt = map(surprised, 0.55, 1, 18, 55);
    ellipse(cx, mouthY, 42, oAmt);
  }

  // tiny caption
  noStroke();
  fill(255, 200);
  textSize(12);
  text("eyes follow mouse • blink • mouth reacts to distance", 20, height - 18);
}

// Smooth smile using an arc drawn with points (still simple shapes vibe)
function drawSmile(x, y, w, h) {
  noFill();
  beginShape();
  for (let a = PI * 0.1; a <= PI * 0.9; a += 0.07) {
    let px = x + cos(a) * (w * 0.5);
    let py = y + sin(a) * h;
    vertex(px, py);
  }
  endShape();
}

// Returns 0..1 (1=open, 0=closed)
function blinkAmount(t) {
  // slow timer + quick blink window
  let cycle = (t * 0.35) % 1.0; // blinks about every ~3 seconds
  let b = 1;

  // blink happens near end of cycle
  if (cycle > 0.92) b = map(cycle, 0.92, 1.0, 1, 0);
  if (cycle < 0.04) b = min(b, map(cycle, 0.0, 0.04, 0, 1));

  // sharpen blink shape
  b = constrain(b, 0, 1);
  return pow(b, 2.2);
}