let hasUserClicked = false;

let circleX = 300;
let circleY = 400;

let nightSound;
let retroSound;
function preload() {
  nightSound = loadSound('assets/night.mp3');
  retroSound = loadSound('assets/retro.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textAlign(CENTER);
}

function draw() {

  background('lightgreen');
  //circle(circleX, circleY, 50);

  if (hasUserClicked == false) {
    text('hi, please click to start', width / 2, height / 2);
  } else {
    if (nightSound.isPlaying() == false) {
      nightSound.play()
    }

    let calculatedVolumeNight = map(
      mouseX,           // the changing number
      0,                //min expected number
      width,            //max expected number
      0,                //min output number
      1                 //max output number
     )

    if (retroSound.isPlaying() == false) {
        retroSound.play()
    }

    let distanceToCircle = dist(
      mouseX, mouseY,
      circleX, circleY
    )
    let calculatedVolumeRetro = map(
     distanceToCircle,  //the changing number
     0,                 //min expected number
     200,               //max expected number
     1,                 //min output number
     0                  //max output number
    )

    calculatedVolumeRetro = constrain(
      calculatedVolumeRetro, 0, 1
    )

    //volume needs a number beteen 0 - 1
    nightSound.setVolume(calculateVolumeNight, 2)
    retroSound.setVolume(calculateVolumeRetro, 2)
  }
}

function mouseClicked() {
  hasUserClicked = true;

}
