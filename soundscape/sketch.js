let hasUserClicked = false;

let circleX;
let circleY;

let retroSound;
function preload() {
  retroSound = loadSound('assets/retro.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textAlign(CENTER);

circleX = random(width);
circleY = random(height);
}

function draw() {

  background('lightgreen');
  //circle(circleX, circleY, 50);

  if (hasUserClicked == false) {
    text('hi, please click to start', width / 2, height / 2);
  } else {
    if (retroSound.isPlaying() == false) {
        retroSound.play();
    }

    let distanceToCircle = dist(
      mouseX, mouseY,
      circleX, circleY
    );

    let calculateVolumeRetro = map(
     distanceToCircle,  //the changing number
     0,                 //min expected number
     200,               //max expected number
     1,                 //min output number
     0                  //max output number
    );

    calculateVolumeRetro = constrain(
      calculateVolumeRetro, 0, 1
    );

    //volume needs a number between 0 - 1
    retroSound.setVolume(calculateVolumeRetro);
  }
}

function mouseClicked() {
  hasUserClicked = true;

}
