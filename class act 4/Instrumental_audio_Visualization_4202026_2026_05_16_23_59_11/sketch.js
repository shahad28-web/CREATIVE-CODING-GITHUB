let s = {};
let effects = [];

function preload() {
  s.a = loadSound('corona.mp3');
  s.s = loadSound('glimmer.mp3');
  s.d = loadSound('strike.mp3');
  s.f = loadSound('wipe.mp3');
  s.g = loadSound('piston.mp3');
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();

  for (let k in s) {
    s[k].setVolume(1);
  }
}

function draw() {
  background(0, 35);

  for (let i = effects.length - 1; i >= 0; i--) {
    let e = effects[i];

    fill(e.r, e.g, e.b, e.life * 4);

    if (e.type === "circle") {
      ellipse(e.x, e.y, e.size);
      e.x += e.vx;
      e.y += e.vy;
    }

    if (e.type === "square") {
      rect(e.x, e.y, e.size);
      e.size += 3;
    }

    if (e.type === "line") {
      stroke(e.r, e.g, e.b, e.life * 4);
      strokeWeight(4);
      line(e.x, 0, e.x + random(-80, 80), height);
      noStroke();
    }

    e.life--;

    if (e.life <= 0) {
      effects.splice(i, 1);
    }
  }

  fill(255);
  textSize(18);
  textAlign(CENTER);
  text("Press A S D F G", width / 2, 30);
}

function keyPressed() {
  let k = key.toLowerCase();

  if (s[k]) {
    if (s[k].isPlaying()) {
      s[k].stop();
    }

    s[k].play();
    makeEffect(k);
  }
}

function makeEffect(k) {
  let colors = {
    a: [255, 0, 0],
    s: [0, 255, 0],
    d: [0, 100, 255],
    f: [0, 255, 255],
    g: [255, 0, 255]
  };

  let types = {
    a: "circle",
    s: "circle",
    d: "line",
    f: "square",
    g: "square"
  };

  for (let i = 0; i < 20; i++) {
    effects.push({
      type: types[k],
      x: random(width),
      y: random(height),
      vx: random(-4, 4),
      vy: random(-4, 4),
      size: random(10, 40),
      r: colors[k][0],
      g: colors[k][1],
      b: colors[k][2],
      life: 60
    });
  }
}