function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
  textSize(100);
  background(220);
}

function draw() {
  for (let i = 0; i < 800; i = i + 1) {
    fill(
      178 + 177 * sin(i / 21 + frameCount/20),
      178 + 177 * cos(i / 21 + frameCount/31 ),
      178 + 177 * sin(i / 21 + frameCount/20 )
    );
      }

    translate(width/2, height/2);
    rotate( sin(frameCount / 0.02));
    stroke(0);
    text('creative coding', 0, 0,);
  
}