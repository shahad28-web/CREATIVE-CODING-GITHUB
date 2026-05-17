function setup() {
  createCanvas(400, 400);
  background(220);  
}

function draw() {
  lineWidth = random(1, 3);
  
  ellipse(mouseX, mouseY, 50);

  if (mouseX > 200 && mouseY < 200) {
    fill("red");
  } else if (mouseX > 0 && mouseY < 200) {
    fill("green");
  } else if (mouseX > 200 && mouseY < 400) {
    fill("yellow");
  } else if (mouseX > 0 && mouseY < 400) {
    fill("blue");
  }
}