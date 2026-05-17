var light, black;

function preload() {
  light = loadFont("Chivo-Light.ttf")
  black = loadFont("Chivo-Black.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill(255);
  noStroke();
  
  let alternate = true;
  for (let y = 0; y <= height; y += 50) {
    for (let x = 0; x <= width; x += 50) {
      push();
      translate (x,y);
      let angle = map(mouseX, 0, width, -180, 180); // mouseX horizontal position to a -180 to 180 degrees
      rotate(180);
      
      if(alternate) {
        rotate(-angle); // rotate in the opposite direction
        textFont(black);
        textSize(12);
        text('creative', 0, 0);
      }
      else {
        rotate(angle);
        textFont(light);
        textSize(12);
        text('coding', 0, 0);
      }
      pop();
      
      alternate = !alternate; // alternate = not true
    }
  }
}