var numbers = [13, 25, 36, 45, 23];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Hue, Saturation and Brightness
  // hues = 0 - 360
  colorMode(HSB, 360, 100, 100, 100);

  // set the background to white with 0 hues, 0 saturation, brightness 100 = color white
  background(0, 0, 100);

  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i]; // get the current number from the array
    var w = width / numbers.length;
    var x = map(i, 0, numbers.length, 0, width);
    var h = map(n, 0, max(numbers), 0, height);
    var y = height - h;
    var c = map(n, 0, max(numbers), 0, 360);

    if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < height) {
      fill((c + 180) % 360, 100, 100);
      rect(x, y, w, h);
      
      fill(0);
      textAlign(CENTER);
      textSize(16);
      text(n, x + w/2, y - 10);
    } else {
      fill(c, 100, 100); // hue // saturation 100 // brightness 100
    rect(x, y, w, h);

    // rect(i * 20, height - n, 20, n);
    }
  }
}
