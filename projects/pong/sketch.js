var playerturn = 0;
var mode = 0;
var playerSpeed = 2;

var player1 = {
  posX: 0,
  posY: 0,
  wth: 8,
  hgt: 0,
  velX: 0,
  velY: 0,
  goals: 0
};

var player2 = {
  posX: 0,
  posY: 0,
  wth: 8,
  hgt: 0,
  velX: 0,
  velY: 0,
  goals: 0
};

var b = {
  initVelX: -3.3,
  initVelY: 3.3,
  velX: 0,
  velY: 0,
  dimX: 8,
  dimY: 8
};

function setup() {
  // put setup code here
  var myCanvas = createCanvas(640, 360); // 640, 360
  myCanvas.parent("P5JS_container");
  
  background(0);


  b.posX = width/2-24;
  b.posY = height/2-24;

  b.velX = b.initVelX;
  b.velY = b.initVelY;

  player1.hgt = 90;
  player2.hgt = 90;

  player1.posY = height/2 - player1.hgt/2;
  player2.posY = height/2 - player2.hgt/2;
  player1.posX = 30;
  player2.posX = width - 40;

  // Set heights
  player1.hgt = 90;
  player2.hgt = 90;

  player1.goals = 0;
  player2.goals = 0;

}

function draw() {
  // put drawing code here
  clear();
  if (mode == 0) {
    background(0);
    stroke(255);
    fill(255);
    textSize(20)
    text("Original Pong Game Replica", width/3, 40);
    textSize(15);
    text("By Steinn Hauser Magnusson", width/3, 90);
    text("hausersteinn@gmail.com", width/3, 120);
    text("Made using p5js.", width/3, 150);
    text("Input:", width/3, 180);
    text("\t 1: (Player vs AI)", width/3, 210);
    text("\t 2: (Player vs Player)", width/3, 240);
  } else {
    
    background(0);

    stroke(255);
    line(width/2, 0, width/2, height);

    drawScore();
    textSize(10);
    text("Press [esc] to exit to main menu", 10, 20);
    drawBall();
    drawP1();
    drawP2();

    playerCollision();
    if (mode == 1) {
      calculateAI();
    }
    b.posX += b.velX;
    b.posY += b.velY;

    player1.posY += player1.velY;
    player2.posY += player2.velY;

    
    
    wallCollision();
    
  }
  
}

function drawBall() {
  fill(200);
  rect(b.posX, b.posY, b.dimX, b.dimY);
}

function drawP1() {
  fill(255);
  rect(player1.posX, player1.posY, player1.wth, player1.hgt);
}

function drawP2() {
  fill(255);
  rect(player2.posX, player2.posY, player2.wth, player2.hgt);
}

function wallCollision() {
  if ((b.posY <= 0) || ((b.posY+b.dimY) >= height)) {
    b.velY *= -1;
  }

  if ((b.posX <= 0) || ((b.posX+b.dimX) >= width)) {
    goal();
  }

  if (((player1.posY <= 0) && (player1.velY < 0)) || (((player1.posY+player1.hgt) >= height) && (player1.velY > 0))) {
    player1.velY = 0;
  }

  if (((player2.posY <= 0) && (player2.velY < 0)) || (((player2.posY+player2.hgt)) >= height) && (player2.velY > 0)) {
    player2.velY = 0;
  }
}

function keyPressed() {

  if (mode == 0) {
    if (key == '1') {
      mode = 1;
    }
    if (key == '2') {
      mode = 2;
    }
  } else {
    if (keyCode == UP_ARROW) {
      player1.velY = -playerSpeed;
    }
    if (keyCode == DOWN_ARROW) {
      player1.velY = playerSpeed;
    }
  
    // Should only be able to control player 2 in mode 2.
    if (mode == 2) {
      if (key == 'w') {
        player2.velY = -playerSpeed;
      }
      if (key == 's') {
        player2.velY = playerSpeed;
      }
    }
  
    // Exit to main menu function
    if (keyCode == ESCAPE) {
      mode = 0;
      setup();
    }
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    player1.velY = 0;
  }
  if (keyCode == DOWN_ARROW) {
    player1.velY = 0;
  }

  if (mode == 2) {
    if (key == 'w') {
      player2.velY = 0;
    }
    if (key == 's') {
      player2.velY = 0;
    }
  }
}

function goal() {

  // count where it scored
  if (b.posX > width/2) {
    player1.goals++;
  }
  if (b.posX < width/2) {
    player2.goals++;
  }

  // reset ball
  b.posX = width/2-24;
  b.posY = height/2-24;
  var xr = random();
  var yr = random();
  if (xr < 0.5) {
    b.velX = b.initVelX;
  } else {
    b.velX = -b.initVelX;
  }
  if (yr < 0.5) {
    b.velY = b.initVelY;
  } else {
    b.velY = -b.initVelY;
  }

  playerturn = 0;
}

function drawScore() {
  textSize(50);
  fill(255);
  text(player1.goals, width/2 - 70, 50);
  fill(255);
  text(player2.goals, width/2 + 34, 50);
}

function playerCollision() {
  // First, check bounces off the front end.

  // Player 1:
  var x1 = (((player1.posX + player1.wth) - b.posX) > 0) && ((b.posX + b.dimX - player1.posX) > 0);
  var y1 = (((player1.posY + player1.hgt) - b.posY) > 0) && ((player1.posY - (b.posY + b.dimY)) < 0);
  if ((x1 && y1) && (playerturn != 2)) {
    b.velX *= -1;
    playerturn = 2;
  }

  // Player 2:
  var x2 = ((player2.posX - (b.posX + b.dimX)) < 0) && ((player2.posX + player2.wth - b.posX) > 0);
  var y2 = (((player2.posY + player2.hgt) - b.posY) > 0) && ((player2.posY - (b.posY + b.dimY)) < 0);
  if ((x2 && y2) && (playerturn != 1)) {
    b.velX *= -1;
    playerturn = 1;
  }
}

function calculateAI() {
  // Function which sets player2.velY without an input.
  // Check first if we are anywhere by the edges. If so, we should send the racket inwards
  if ((height - (player2.posY + player2.hgt)) < 0) {
    player2.velY = -playerSpeed;
  } else if (player2.posY < 0) {
    player2.velY = playerSpeed;
  } else {

    // 1st simple way: Check middle of ball and middle of racket and follow accordingly
    // if ((b.posY + b.dimY/2) > (player2.posY + player2.hgt/2)) {
    //   player2.velY = playerSpeed;
    // } else {
    //   player2.velY = -playerSpeed;
    // }

    // 2nd simple way: Move in the same direction as the ball velocity
    if (b.velY > 0) {
      player2.velY = playerSpeed;
    } else {
      player2.velY = -playerSpeed;
    }

  }
} 