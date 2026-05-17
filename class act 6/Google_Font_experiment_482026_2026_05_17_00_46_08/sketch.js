var font;

function preload() {
  font = loadFont("Sekuya-Regular.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  fill(0, 100); // black, alpha
  noStroke();
  
  // textToPoints - converts text to array of points
  // arguements('message', x, y, fontSize, {option})
  // sampleFactor: 0.1 - 1.0
  points = font.textToPoints('coding', 100, 100, 100, {sampleFactor: 0.5});
  
  for (var i = 0; i < points.length; i++) {
    var p = points[i]; // get the current point's data
    
    ellipse(p.x, p.y, random(2, 15), random(2,15));
  }
}

function draw() {
  
}