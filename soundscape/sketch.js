let hasUserClicked = false;

let circleRetroX;
let circleRetroY;

let circleLofiX;
let circleLofiY;

let retroSound;
let lofiSound;
function preload() {
  retroSound = loadSound('assets/retro.mp3');
  lofiSound = loadSound('assets/lofi.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textAlign(CENTER);

  circleRetroX = random(width);
  circleRetroY = random(height);

  circleLofiX = random(width);
  circleLofiY = random(height);
}

function draw() {

  background('lightgreen');

  fill('babyblue')
  //circle(circleRetroX, circleRetroY, 50);

  fill('salmon')
  //circle(circleLofiX, circleLofiY, 50);

  if (hasUserClicked == false) {
    text('hi, please click to start', width / 2, height / 2);
  } else {

    if (retroSound.isPlaying() == false) {
        retroSound.play();
    }

    let distanceToCircle = dist(mouseX, mouseY, circleRetroX, circleRetroY);
    let calculateVolumeRetro = map(
     distanceToCircle,  //the changing number
     0,                 //min expected number
     200,               //max expected number
     1,                 //min output number
     0                  //max output number
    );
    calculateVolumeRetro = constrain(calculateVolumeRetro, 0, 1);
    //volume needs a number between 0 - 1
    retroSound.setVolume(calculateVolumeRetro);

if (lofiSound.isPlaying() == false) {
  lofiSound.play();
}

    let distanceLofi = dist(mouseX, mouseY, circleLofiX, circleLofiY);
    let calculateVolumeLofi = map(distanceLofi, 0, 200, 1,0);
    calculateVolumeLofi = constrain(calculateVolumeLofi, 0, 1);
    lofiSound.setVolume(calculateVolumeLofi);
  }
}

function mouseClicked() {
  hasUserClicked = true;

}
