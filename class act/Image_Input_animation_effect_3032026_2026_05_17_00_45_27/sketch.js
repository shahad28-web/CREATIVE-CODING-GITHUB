var numFrames = 6;
var frame = 0;
var images = new Array(numFrames); // stores multi pieces of data of the same type together

function preload() {
    images[0] = loadImage("dove01.png");
    images[1] = loadImage("dove02.png");
    images[2] = loadImage("dove03.png");
    images[3] = loadImage("dove04.png");
    images[4] = loadImage("dove05.png");
    images[5] = loadImage("dove06.png");
}

function setup() {
    createCanvas(400, 400);
    frameRate(5);
}

function draw() {
    background(255);
    frame++;
    if (frame >= numFrames) frame = 0;
    image(images[frame], mouseX - 75, mouseY - 100); // it shows the current image (frame) at the mouse position, adjusted so the image is centered on the cursor
}