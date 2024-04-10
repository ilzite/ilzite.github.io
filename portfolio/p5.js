let img;
 
// Load the image and create a p5.Image object.
function preload() {
    img = loadImage("./spot.png");
}
 
function setup() {
    createCanvas(windowWidth, windowHeight);
}
 
function draw() {
    background(0);
 
    image(img, mouseX, mouseY);
 
    noFill();
    circle(100, 100, 60);
}