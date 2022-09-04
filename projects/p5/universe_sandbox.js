var mode = 0;         // Dictates modes (menu, gamescreen etc)
var starsSet = false; // Helps with setting a random background once each time.
var overCanvas1;      // Canvas which layers over with background
var constG = 2;       // Gravitational constant
var sunSet = false    // Helps set up the sun in mode 1

var planets = [];     // Object list of planets in the system
var noPlanets = 0;    // Number of planets in the system.

var collisionCheckbox = false;  // Dictates collision between objects
var boundsCheckbox = false;     // Dictates whether or not the boundaries of the box are set.

var massSlider;       // Slider used to create masses
var GUISet = false;   // Helps set up the GUI on the first draw
var paragraph;        // Helps remove GUI when exiting to main screen.

var tempX, tempY;     // Helps save the mouse cursor placement for planet creation
var newPlanet = null; // Allow the newPlanet object to be accessed globally

function setup() {
  // put setup code here
  var canvasWidth = 720;
  var canvasHeight = 420;

  var myCanvas = createCanvas(canvasWidth, canvasHeight);
  myCanvas.parent("P5JS_container");

  // set dims of parent accordingly
  $("#P5JS_container").css("width", canvasWidth + "px");
  $("#P5JS_container").css("height", canvasHeight + "px");


  background(0);

  overCanvas1 = createGraphics(720, 420);
  overCanvas1.clear();
  createBackground();

  // reset the variables
  planets = [];
  noPlanets = 0;
  sunSet = false;

  
}

function draw() {
  // put drawing code here

  if (mode == 0) {
    menuScreen();
  } else {

    if ((mode == 1) && (!sunSet)) {
      // Set a massive sun in the middle 
      planets[noPlanets] = new Planet(width/2, height/2);
      planets[noPlanets].mov = false; // renders this object immovable
      noPlanets++;
      sunSet = true;
    }

    background(0);
    createBackground();
    
    createGUI();

    updatePlanets();

    drawPlanets();

    // Draw the trajectory line
    if (mouseIsPressed && newPlanet) {
      stroke(255);
      line(tempX, tempY, mouseX, mouseY);
    }

  }
}

function createBackground() {
  fill(255);
  noStroke();
  let starNo = 50;
  
  if (!starsSet) {
    for (let i = 0; i < starNo; i++) {
      overCanvas1.ellipse(random(width), random(height), 3, 3);
    }
    starsSet = true;
  }

  image(overCanvas1, 0, 0);
}

function menuScreen() {
  /* Initialize the text */

  textSize(32);
  stroke(0);
  text("Universe Sandbox replica", 160, 80);
  textSize(16);
  text("by Steinn Hauser", 160, 120);
  text("hausersteinn@gmail.com", 160, 150);

  text("Made using the p5js library for JavaScript", 160, 210);

  fill(0);
  stroke(255);

  let ys = (mouseY > 270 && mouseY < 320);
  let x1 = (mouseX > 160 && mouseX < 240);
  let x2 = (mouseX > 250 && mouseX < 330);
  let x3 = (mouseX > 340 && mouseX < 420);
  let x4 = (mouseX > 430 && mouseX < 510);

  if (x1 && ys) {
    fill(40);
  } else {
    fill(0);
  }
  rect(160, 270, 80, 50);

  if (x2 && ys) {
    fill(40);
  } else {
    fill(0);
  }
  rect(250, 270, 80, 50);

  if (x3 && ys) {
    fill(40);
  } else {
    fill(0);
  }
  rect(340, 270, 80, 50);

  if (x4 && ys) {
    fill(40);
  } else {
    fill(0);
  }
  rect(430, 270, 80, 50);

  textSize(10);
  noStroke();
  fill(255);
  text("1", 198, 298);
  text("2", 290, 298);
  text("3", 380, 298);
  text("4", 470, 298);

}

function mousePressed() {
  // Menu Screen button presses:
  if (mode == 0) {
    // Button boundaries
    let ys = (mouseY > 270 && mouseY < 320);
    let x1 = (mouseX > 160 && mouseX < 240);
    let x2 = (mouseX > 250 && mouseX < 330);
    let x3 = (mouseX > 340 && mouseX < 420);
    let x4 = (mouseX > 430 && mouseX < 510);
    if (ys && x1) {
      mode = 1;
    } else if (ys && x2) {
      mode = 2;
    } else if (ys && x3) {
      mode = 3;
    } else if (ys && x4) {
      mode = 4;
    }
  } else {
    // Otherwise, ingame, the mouse should share similar functionality.
    tempX = mouseX;
    tempY = mouseY;
    newPlanet = new Planet(mouseX, mouseY);

    // Not move this planet until the cursor is released
    newPlanet.mov = false;

    planets[noPlanets] = newPlanet;
    noPlanets++;
    
  }
}

function mouseReleased() {
  /* Release the newPlanet object and give it the velocity according to the difference
   * between the parameters mouseX, mouseY and tempX, tempY */

  if (newPlanet == null) {
    // Avoid registering in the first release after main menu
  } else {
    newPlanet.velX = (tempX - mouseX)/100;
    newPlanet.velY = (tempY - mouseY)/100;
    newPlanet.mov = true;
  }
}

function keyPressed() {

  if (keyCode == ESCAPE) {
    mode = 0;
    starsSet = false;
    GUISet = false;
    newPlanet = null;

    // remove the set GUI
    paragraph.remove();
    massSlider.remove();
    boundsCheckbox.remove();
    collisionCheckbox.remove();
    setup();
  }
}

function drawPlanets() {
  // Move through the planets list and draw them.
  fill(255);
  noStroke();

  for (var i = 0; i < planets.length; i++) {
    ellipse(planets[i].posX, planets[i].posY, planets[i].mass, planets[i].mass);
  }
}

function updatePlanets() {
  // Loops through the planets list and calculates the forces exerted
  for (var i = 0; i < planets.length; i++) {
    // Reset the acceleration before calculating the new ones
    planets[i].accX = 0;
    planets[i].accY = 0;
    for (var j = 0; j < planets.length; j++) {
      if ((j == i) || (planets[i].posX + planets[i].posY > 1e4)) {
        // Skip itself and also planets which have gone very far away.
      } else {
        // Otherwise calculate the force contribution from planet j
        planets[i].calculateForce(planets[j]);
      }
    }

    // Update the position depending on the velocities.
    if (planets[i].mov) {
      planets[i].posX += planets[i].velX;
      planets[i].posY += planets[i].velY;
    }

    // Update the velocity depending on the acceleration
    planets[i].velX += planets[i].accX;
    planets[i].velY += planets[i].accY;


    // If the boundaries are on, and the planet is on the boundary, switch the velocity accordingly.
    if (boundsCheckbox.checked()) {
      // left and right boundaries
      if ((planets[i].posX - planets[i].radius < 0) || (planets[i].posX + planets[i].radius > width)) {
        planets[i].velX *= -1;
      }
      // top and bottom boundaries
      if ((planets[i].posY - planets[i].radius < 0) || (planets[i].posY + planets[i].radius > height)) {
        planets[i].velY *= -1;
      }
    }
  }
}

function Planet(posX=100, posY=100, velX=0.8, velY=0.1, mass=20, mov=true) {
  // Constructor for a planet object
  this.posX = posX;
  this.posY = posY;
  this.velX = velX;
  this.velY = velY;
  this.mass = mass;
  this.radius = mass; // set the radius to equal the mass for the time being
  this.mov  = mov;

  var diffX, diffY, r2, acceleration;


  this.calculateForce = function(otherPlanet) {
    diffX = this.posX - otherPlanet.posX;
    diffY = this.posY - otherPlanet.posY;
    r2 = diffX * diffX + diffY * diffY;
    acceleration = constG * otherPlanet.mass / r2;

    this.accX += acceleration * (otherPlanet.posX - this.posX) / sqrt(r2);
    this.accY += acceleration * (otherPlanet.posY - this.posY) / sqrt(r2);
  }
}

function createGUI() {
  textSize(10);
  text("Press [esc] to exit to main menu", 10, 20);

  if (!GUISet) {
    paragraph = createP("Set Mass (not yet implemented):").parent("P5JS_inputs");
    massSlider = createSlider(0, 100, 50).parent("P5JS_inputs");
    
    boundsCheckbox = createCheckbox("Bouncy Boundaries", false).parent("P5JS_inputs");
    collisionCheckbox = createCheckbox("Collision Activation (not yet implemented)", false).parent("P5JS_inputs");

    GUISet = true;
  }

}
