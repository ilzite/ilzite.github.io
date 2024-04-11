let hasUserClicked = false;

let circleX = 300;
let circleY = 400;

let riverSound;
let metalSound;
function preload() {
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
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
    if (riverSound.isPlaying() == false) {
      riverSound.play()
    }

    let calculateVolumeRiver = map(
      mouseX,           // the changing number
      0,                //min expected number
      width,            //max expected number
      0,                //min output number
      1                 //max output number
     )

    if (metalSound.isPlaying() == false) {
        metalSound.play()
    }

    let distanceToCircle = dist(
      mouseX, mouseY,
      circleX, circleY
    )
    let calculateVolumeMetal = map(
     distanceToCircle,  //the changing number
     0,                 //min expected number
     200,               //max expected number
     1,                 //min output number
     0                  //max output number
    )

    calculatedVolumeMetal = constrain(
      calculatedVolumeMetal, 0, 1
    )

    //volume needs a number beteen 0 - 1
    riverSound.setVolume(calculateVolumeRiver, 2)
    metalSound.setVolume(calculateVolumeMetal, 2)
  }
}

function mouseClicked() {
  hasUserClicked = true;

}
