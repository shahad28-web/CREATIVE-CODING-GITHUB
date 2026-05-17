var mic;
var colors = ["#ff99c8", "#ff9b54", "#fcf6bd", "#d0f4de", "#a9def9", "#e4c1f9"];

function setup() {
  createCanvas(500, 500);
  background(100);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var micLevel = mic.getLevel() * height * 10;
  fill(random(colors));
  
  circle(mouseX, mouseY, micLevel);
}