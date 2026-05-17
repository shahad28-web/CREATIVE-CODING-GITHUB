var data;

function preload() {
  data = loadTable("running.csv", "csv", "header");
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(0);

  // makes sure that there is content in the data
  if (data) {
    
    // get the amount of rows in the data
    let numRows = data.getRowCount();

    let miles = data.getColumn("Miles");
    let mood = data.getColumn("Mood");
    let smell = data.getColumn("Smell");

    // debug
    print(miles);
    print(mood);
    print(smell);

    for (let i = 0; i < numRows; i++) {
      let x = 100;
      let y = 100 + i * 20;
      let w = miles[i] * 50;
      let h = 10;
      
      // fill(255);
      
      if (mood[i] == 1) {
        fill('red');
      } else if (mood[i] == 5) {
        fill('green');
      } else {
        fill('blue');
      }
      
      if (smell[i] == 'Floral') {
        h = 5;
      }
      
      rect(x, y, w, h);
    }
  }
}
