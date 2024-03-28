let img;

// Load the image and create a p5.Image object.
function preload() {
  img = loadImage('./photo.jpg');
}



function setup(){
    createCanvas(windowWidth, windowHeight);
    image(img, 0, 0, width, height);
}

function draw(){

    noFill();
    strokeWeight(1);

    if(mouseX > width / 2 - 60){
        if(mouseX < width / 2 - 60 + 140){
            if(mouseY > 50){
                if(mouseY < 50 + 140){
                    circle(random(width), random(height), 50);
                }
            }
        }
    }
else{
    image(img, 0, 0, width, height);
}    
    rect(width / 2 - 60, 50, 140);

    // if(mouseX < width / 2 && mouseY < height / 2) {
    //     circle(mouseX, mouseY, 50);
    // }



    // if (mouseX > width / 2 && mouseY > height / 2) {
    //     square(mouseX, mouseY, 50);
    // }
    
}