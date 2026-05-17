const poem = [
  "In the space between seconds,",
  "where silence holds its breath —",
  "a word arrives like light",
  "through a crack in the dark.",
  "",
  "Each letter is a seed",
  "dropped into the air,",
  "finding root in nothing,",
  "blooming without ground.",
  "",
  "We read and we become",
  "what the words make room for,",
  "brief and whole and gone —",
  "like rain upon a mirror."
];

let mode = "rain";

const SPAWN_EVERY = 18;  
const LINE_H      = 32; 
const FONT_SIZE   = 17;

let words     = [];   
let allWords  = [];  
let wordIndex = 0;
let frameCount_ = 0;
let paused    = false;

function buildWordList() {
  allWords = [];
  let lineY = 0;
  for (let li = 0; li < poem.length; li++) {
    if (poem[li] === "") { lineY++; continue; }
    const parts = poem[li].split(" ");
    for (let wi = 0; wi < parts.length; wi++) {
      allWords.push({
        text:       parts[wi],
        line:       lineY,
        wordInLine: wi,
        lineStr:    poem[li],
        lineParts:  parts
      });
    }
    lineY++;
  }
}

function getTarget(wd) {
  const totalLines = 14;
  const startY = height / 2 - (totalLines * LINE_H) / 2;
  const ty = startY + wd.line * LINE_H;

  textSize(FONT_SIZE);
  const totalW = textWidth(wd.lineStr);
  let cx = width / 2 - totalW / 2;
  for (let i = 0; i < wd.wordInLine; i++) {
    cx += textWidth(wd.lineParts[i]) + textWidth(" ");
  }
  return { x: cx + textWidth(wd.text) / 2, y: ty };
}


function spawnWord(wd) {
  const target = getTarget(wd);
  const hue    = map(wd.line, 0, 13, 160, 320); // cool blue → warm pink

  const w = {
    text: wd.text,
    tx: target.x, ty: target.y,
    x:  target.x, y:  target.y,
    vx: 0, vy: 0,
    rot: 0, rotV: 0,
    alpha: 0,
    settled: false,
    size: FONT_SIZE,
    hue,
    // glitch-mode extras
    glitching:      false,
    glitchDuration: 0,
    glitchCounter:  0
  };

  if (mode === "rain") {
    w.x    = target.x + random(-70, 70);
    w.y    = random(-100, -10);
    w.vy   = random(2, 5);
    w.rot  = random(-0.4, 0.4);
    w.rotV = random(-0.025, 0.025);
    w.size = random(10, 15);

  } else if (mode === "spiral") {
    const angle  = random(TWO_PI);
    const radius = random(200, 370);
    w.x    = width  / 2 + cos(angle) * radius;
    w.y    = height / 2 + sin(angle) * radius;
    w.rot  = angle;
    w.size = random(11, 17);

  } else {
    w.x             = target.x;
    w.y             = target.y;
    w.glitching     = true;
    w.glitchDuration = floor(random(8, 22));
  }

  words.push(w);
}

const GLITCH_CHARS = "!@#$%^&*<>?~|{}[]";

function updateWord(w) {
  if (w.settled) return;

  if (mode === "rain") {
    const dx = w.tx - w.x;
    const dy = w.ty - w.y;
    w.x   += dx * 0.04 + w.vy * 0.25;
    w.y   += dy * 0.04 + w.vy * 0.25;
    w.vy  *= 0.88;
    w.rot  += w.rotV;
    w.rotV *= 0.92;
    w.alpha = min(255, w.alpha + 12);
    if (dist(w.x, w.y, w.tx, w.ty) < 1.5) { w.settled = true; w.rot = 0; }

  } else if (mode === "spiral") {
    const dx = w.tx - w.x;
    const dy = w.ty - w.y;
    w.x  += dx * 0.05;
    w.y  += dy * 0.05;
    w.rot *= 0.88;
    w.alpha = min(255, w.alpha + 8);
    if (dist(w.x, w.y, w.tx, w.ty) < 1.5) { w.settled = true; w.rot = 0; }

  } else { // glitch
    w.alpha = min(255, w.alpha + 16);
    if (w.glitching) {
      w.glitchCounter++;
      if (w.glitchCounter >= w.glitchDuration) w.glitching = false;
    }
    if (w.alpha >= 200) w.settled = true;
  }
}

function drawWord(w) {
  push();
  translate(w.x, w.y);
  rotate(w.rot);
  colorMode(HSB, 360, 100, 100, 255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(w.size || FONT_SIZE);

  if (w.glitching) {
    fill(130, 90, 100, w.alpha * 0.8);
    let g = "";
    for (let i = 0; i < w.text.length; i++) {
      g += random() > 0.45
        ? w.text[i]
        : GLITCH_CHARS[floor(random(GLITCH_CHARS.length))];
    }
    text(g, 0, 0);
  } else {
    const sat = w.settled ? 55 : 82;
    const bri = w.settled ? 90 : 100;
    fill(w.hue, sat, bri, w.alpha);
    text(w.text, 0, 0);
  }

  colorMode(RGB);
  pop();
}

function resetPoem() {
  words      = [];
  wordIndex  = 0;
  frameCount_ = 0;
  buildWordList();
}

function setup() {
  createCanvas(660, 420);
  textFont("Georgia");
  buildWordList();
}

function draw() {
  if (paused) return;
  frameCount_++;

  background(13, 13, 20, 28);

  if (frameCount_ % SPAWN_EVERY === 0 && wordIndex < allWords.length) {
    spawnWord(allWords[wordIndex++]);
  }

  for (const w of words) {
    updateWord(w);
    drawWord(w);
  }

  colorMode(RGB);
  fill(255, 255, 255, 60);
  noStroke();
  textSize(11);
  textFont("monospace");
  textAlign(LEFT, TOP);
  text(`mode: ${mode}   [R] restart  [P] pause  [1] rain  [2] spiral  [3] glitch`, 12, 10);
  textFont("Georgia");
}


function keyPressed() {
  if (key === 'r' || key === 'R') resetPoem();
  if (key === 'p' || key === 'P') paused = !paused;
  if (key === '1') { mode = "rain";   resetPoem(); }
  if (key === '2') { mode = "spiral"; resetPoem(); }
  if (key === '3') { mode = "glitch"; resetPoem(); }
}