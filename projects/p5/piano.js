var instr = 1;    // Which instrument is currently being played
var input1W = [];     // Controls the input on the piano white keys
var input1B = [];     // Controls the input on the piano black keys
var sound1W = [];     // Handles the sound files of the white piano keys
var sound1B = [];     // Handles the sound files of the black piano keys

// Piano Parameters
var noWhiteKeys = 10;
var pianoWidth = 600;
var pianoHeight = 200;
var keyMargin = 10;
var dx, tempY, tempHB, tempHW;
var xBlackStart, xWhiteStart; 

function preload() {
  // Preload the instrument sounds.
  let path1 = "p5/audiofiles/piano/processed/"

  // White key sounds
  sound1W[0] = loadSound(path1 + "C3.mp3");
  sound1W[1] = loadSound(path1 + "D3.mp3");
  sound1W[2] = loadSound(path1 + "E3.mp3");
  sound1W[3] = loadSound(path1 + "F3.mp3");
  sound1W[4] = loadSound(path1 + "G3.mp3");
  sound1W[5] = loadSound(path1 + "A3.mp3");
  sound1W[6] = loadSound(path1 + "B3.mp3");
  sound1W[7] = loadSound(path1 + "C4.mp3");
  sound1W[8] = loadSound(path1 + "D4.mp3");
  sound1W[9] = loadSound(path1 + "E4.mp3");

  // Black key sounds
  sound1B[0] = loadSound(path1 + "Db3.mp3");
  sound1B[1] = loadSound(path1 + "Eb3.mp3");
  sound1B[2] = loadSound(path1 + "Gb3.mp3");
  sound1B[3] = loadSound(path1 + "Ab3.mp3");
  sound1B[4] = loadSound(path1 + "Bb3.mp3");
  sound1B[5] = loadSound(path1 + "Db4.mp3");
  sound1B[6] = loadSound(path1 + "Eb4.mp3");
}

function setup() {
  // put setup code here
  var canvasWidth = 700;
  var canvasHeight = 400;

  var myCanvas = createCanvas(canvasWidth, canvasHeight);
  myCanvas.parent("P5JS_container");

  // set dims of parent accordingly
  $("#P5JS_container").css("width", canvasWidth + "px");
  $("#P5JS_container").css("height", canvasHeight + "px");

  // Initialize inputs as not being pressed
  for (let i = 0; i < noWhiteKeys; i++) {
    input1W[i] = false;
  }

  // Initialize piano parameters
  dx = (pianoWidth-2*keyMargin)/noWhiteKeys; // Spacing between keys
  xBlackStart = (width/2)-(pianoWidth/2) + 3*keyMargin/4 + 3*dx/4;
  xWhiteStart = (width/2)-(pianoWidth/2) + keyMargin;
  tempY = height/3 - pianoHeight/2 + keyMargin;
  tempHB = pianoHeight/2 + 2* keyMargin;
  tempHW = pianoHeight- 2* keyMargin;

  // Multiple keys are not working properly... see:
  // https://www.openprocessing.org/sketch/100827/
}

function draw() {
  // put drawing code here
  clear();
  background(220);

  drawInstrument();
}

function drawInstrument() {
  if (instr == 1) {
    drawPiano();
  }
}

function drawPiano() {

  fill(0);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/3, pianoWidth, pianoHeight);

  // Draw white keys
  let x = xWhiteStart;  // x-placing of first white key

  fill(255);
  rectMode(CORNER);

  for (let ctr = 0; ctr < noWhiteKeys; ctr++) {
    if (input1W[ctr]){
      fill(240, 0, 0);
    } else {
      fill(255);
    }
    rect(x,  tempY, dx-4, tempHW);
    x += dx;
  }

  // Overlay with black keys
  x = xBlackStart;  // x-placing of first black key
  let halfStepEF = true;            // Boolean to help arrange the half steps. Starts at C
  let count = 0, keyCount = 0;  // These help keep the system general and colored.
  fill(0);
  for (let ctr = 1; ctr < noWhiteKeys; ctr++) {
    if (count==2 && halfStepEF) {
      halfStepEF = false;
      count = 0;
    } else if (count==3 && !halfStepEF) {
      halfStepEF = true;
      count = 0;
    } else {
      if (input1B[keyCount]) {
        fill(240, 0, 0);
        stroke(0);
      } else {
        fill(0);
        noStroke()
      }
      rect(x,  tempY, dx/2, tempHB);

      // Make nice 3d looking effects lines
      stroke(100);
      rect(x + dx/8, tempY, dx/4, tempHB - 10);

      count++;
      keyCount++;
    }

    x += dx;
  }
}

function keyPressed() {
  if(instr == 1) {
    // White key inputs
    if (keyCode == 220) {
      input1W[0] = true;
      sound1W[0].play();
    }
    if (keyCode == 90) {
      input1W[1] = true;
      sound1W[1].play();
    }
    if (keyCode == 88) {
      input1W[2] = true;
      sound1W[2].play();
    }
    if (keyCode == 67) {
      input1W[3] = true;
      sound1W[3].play();
    }
    if (keyCode == 86) {
      input1W[4] = true;
      sound1W[4].play();
    }
    if (keyCode == 66) {
      input1W[5] = true;
      sound1W[5].play();
    }
    if (keyCode == 78) {
      input1W[6] = true;
      sound1W[6].play();
    }
    if (keyCode == 77) {
      input1W[7] = true;
      sound1W[7].play();
    }
    if (keyCode == 188) {
      input1W[8] = true;
      sound1W[8].play();
    }
    if (keyCode == 190) {
      input1W[9] = true;
      sound1W[9].play();
    }

    // Black key inputs
    if (keyCode == 65) {
      input1B[0] = true;
      sound1B[0].play();
    }
    if (keyCode == 83) {
      input1B[1] = true;
      sound1B[1].play();
    }
    if (keyCode == 70) {
      input1B[2] = true;
      sound1B[2].play();
    }
    if (keyCode == 71) {
      input1B[3] = true;
      sound1B[3].play();
    }
    if (keyCode == 72) {
      input1B[4] = true;
      sound1B[4].play();
    }
    if (keyCode == 75) {
      input1B[5] = true;
      sound1B[5].play();
    }
    if (keyCode == 76) {
      input1B[6] = true;
      sound1B[6].play();
    }
  }
}


function keyReleased() {
  if (instr == 1){
    // White key releases
    if (keyCode == 220) {
      input1W[0] = false;
      sound1W[0].stop();
    }
    if (keyCode == 90) {
      input1W[1] = false;
      sound1W[1].stop();
    }
    if (keyCode == 88) {
      input1W[2] = false;
      sound1W[2].stop();
    }
    if (keyCode == 67) {
      input1W[3] = false;
      sound1W[3].stop();
    }
    if (keyCode == 86) {
      input1W[4] = false;
      sound1W[4].stop();
    }
    if (keyCode == 66) {
      input1W[5] = false;
      sound1W[5].stop();
    }
    if (keyCode == 78) {
      input1W[6] = false;
      sound1W[6].stop();
    }
    if (keyCode == 77) {
      input1W[7] = false;
      sound1W[7].stop();
    }
    if (keyCode == 188) {
      input1W[8] = false;
      sound1W[8].stop();
    }
    if (keyCode == 190) {
      input1W[9] = false;
      sound1W[9].stop();
    }

    // Black key releases
    if (keyCode == 65) {
      input1B[0] = false;
      sound1B[0].stop();
    }
    if (keyCode == 83) {
      input1B[1] = false;
      sound1B[1].stop();
    }
    if (keyCode == 70) {
      input1B[2] = false;
      sound1B[2].stop();
    }
    if (keyCode == 71) {
      input1B[3] = false;
      sound1B[3].stop();
    }
    if (keyCode == 72) {
      input1B[4] = false;
      sound1B[4].stop();
    }
    if (keyCode == 75) {
      input1B[5] = false;
      sound1B[5].stop();
    }
    if (keyCode == 76) {
      input1B[6] = false;
      sound1B[6].stop();
    }
  }
}