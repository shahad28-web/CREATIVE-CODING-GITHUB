var numbers = [15, 30, 50, 100, 75, 120];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Hue, Saturation and Brightness
  // hues = 0 - 360
  colorMode(HSB, 360, 100, 100, 100);

  // set the background to white with 0 hues, 0 saturation, brightness 100 = color white
  background(0, 0, 100);

  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i]; // get the current number from the array
    

    fill(n, 100, 100); // hue // saturation 100 // brightness 100

    rect(i * 20, height - n, 20, n);
  }
}
