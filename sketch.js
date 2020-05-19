let config;
let level;
let brickImg;
let playerImg;
let groundImg;
let pipeImg;
let mysteryImg;
let mysteryEmptyImg;
let indestructibleImg;
let flagPoleImg;

function preload() {
  let path = '/config.json';
  config = loadJSON(path);
  if (config)
    console.log("config is loaded");
  level = loadImage("/map.bmp");
  if (level)
    console.log("level is loaded");
  brickImg = loadImage("/graphics/brick.bmp");
  playerImg = loadImage("/graphics/player.bmp");
  groundImg = loadImage("/graphics/ground.bmp");
  pipeImg = loadImage("/graphics/pipe.bmp");
  mysteryImg = loadImage("/graphics/mystery.bmp");
  mysteryEmptyImg = loadImage("/graphics/mystery_empty.bmp");
  indestructibleImg = loadImage("/graphics/indestructible.bmp");
  flagPoleImg = loadImage("/graphics/flagPole.bmp");
}


let gravity; //add ability to change via config file
let player;
let hostiles = [];
let enviroment = [];
let collectibles = [];
let playerLocation;
let blockArray = [];

let dead = false;
let wonGame = false;
let score = 0
let unit
let startTime


function setup() {
  // put setup code here
  gravity = createVector(0, config.gravity);
  createCanvas(0, 0)
  windowSize()
  unit = width / 16
  makeLevel()

  //define new player
  player = new Player(playerLocation, unit, unit, config.playerSpeed, config.playerMaxVelocity);


  dead = false;
  wonGame = false;

  dead = false;
  startTime = millis()
}

//Update boxes location when sidescrolling
function updateBlocks(move) {
  for (var i = 0; i < enviroment.length; i++) {
    enviroment[i].location.x -= move
  }
  for (var i = 0; i < collectibles.length; i++) {
    collectibles[i].location.x -= move
  }
}

function draw() {
  // put drawing code here

if(!dead && !wonGame){

  background(0, 50, 200);

  //Draw boxes
  for (var i = 0; i < enviroment.length; i++) {
    if (!enviroment[i].broken)
      enviroment[i].draw()
  }
  player.update().draw();

  //Drawes and updates collectibles
  for (var i = 0; i < collectibles.length; i++) {
    collectibles[i].draw()
    if (collectibles[i].moving)
      collectibles[i].move()
  }
  //Removes collectibles when they leave the screen
  for (var i = collectibles.length - 1; i > -1; i--) {
    if (collectibles[i].location.x < -collectibles[i].width || collectibles[i].location.y > height)
    collectibles.splice(i,1)
  }


  // console.log(millis()-startTime);
  time = ceil(200 - (millis()-startTime)/1000)
  fill(255)
  textSize(unit)
  text("Score: " + score, unit, unit)
  text("Time: " + time, 7 * unit, unit)


} else if(dead){

  deathScreen();
} else if(wonGame){
  wonScreen();
}


}

function keyPressed() {
  //Checks if the jumpbutton it pressed
  if (keyCode == config.keys.up) {
    player.jump();
  }
  if (keyCode == 82 && (dead || wonGame)){
      reset();
  }
}

function reset(){
  hostiles = [];
  enviroment = [];
  collectibles = [];
  blockArray = [];
  score = 0;
  setup();
}



function deathScreen(){
  background(0,0,0,15);
  textSize(width/10);
  textAlign(CENTER,CENTER);
  fill(225,2,31,25);
  text("YOU  DIED",width/2,height/2);
  textSize(width/25);
  fill(95,2,31,25);
  text("press r to restart", width/2,height/3*2)
}

function wonScreen(){
  background(255);
  textSize(width/10);
  textAlign(CENTER,CENTER);

  fill(255,105,180)

  text("WINNER WINNER",width/2,height/2-height/10)
  text("CHICKEN DINNER", width/2,height/2+height/10)
  textSize(width/25);
  fill(95,2,31);
  text("press r to play again", width/2,height/7*5)
}
