let segments = 12;
let hueValue = 0;
let brushSize = 4;
let mirrorMode = true;
let rotationOffset = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  background(0);
}

function draw() {
  
  noStroke();
  fill(0, 0, 0, 10);
  rect(0, 0, width, height);


  rotationOffset += 0.1;
}

function mouseDragged() {
  translate(width / 2, height / 2);

  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  let pmx = pmouseX - width / 2;
  let pmy = pmouseY - height / 2;

  for (let i = 0; i < segments; i++) {
    push();

    rotate(i * 360 / segments + rotationOffset);

    stroke((hueValue + i * 10) % 360, 80, 100, 80);
    strokeWeight(brushSize);

 
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color((hueValue + i * 10) % 360, 100, 100);

    line(mx, my, pmx, pmy);

    if (mirrorMode) {
      scale(1, -1);
      line(mx, my, pmx, pmy);
    }

    pop();
  }

  hueValue += 2;
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    segments++;
  }
  if (keyCode === DOWN_ARROW && segments > 2) {
    segments--;
  }
  if (key === 'm' || key === 'M') {
    mirrorMode = !mirrorMode;
  }
  if (key === '+') {
    brushSize++;
  }
  if (key === '-' && brushSize > 1) {
    brushSize--;
  }
  if (key === 'c' || key === 'C') {
    background(0);
  }
}