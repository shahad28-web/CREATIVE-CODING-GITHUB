var letters = [
  [0, 1, 1, 0,
  1, 0, 0, 1,
  1, 1, 1, 1,
  1, 0, 0, 1,
  1, 0, 0, 1], // A
  [1, 1, 1, 0,
   1, 0, 0, 1,
   1, 1, 1, 1,
   1, 0, 0, 1,
   1, 1, 1, 0], // B
  [1, 1, 1, 1,
   1, 0, 0, 1,
   1, 0, 0, 0,
   1, 0, 0, 1,
   1, 1, 1, 1], // C
  [1, 1, 1, 0,
   1, 0, 0, 1,
   1, 0, 0, 1,
   1, 0, 0, 1,
   1, 1, 1, 0], // D
];

var blockSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);
  fill(0); // rect/square color to black
  
  // outer loop - iterates through each letter in the 'letters' array
  for(var i = 0; i < letters.length; i++) {
    var xPos = 0,
        yPos = 0;
    
    // inner loop - iterates through the 20 numbers inside the current letter's array
    
    for(var j = 0; j < letters[i].length; j++) {
      // if the current number is 1, draws the square
      if (letters[i][j] == 1) {
        rect(xPos, yPos, blockSize, blockSize);
      }
      // moves to the right for the next number in the grid
      xPos += blockSize;
      
      // drawing the letter
      if (j % 4 == 3) { // 4 units index of our array
      xPos = 0;
      yPos += blockSize; // moves yPos down to the next row
      }
    }
    translate(blockSize * 6, 0); // prevent the letters from being drawn on top of each other
  }
}
