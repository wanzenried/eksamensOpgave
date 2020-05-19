let config;
let level;
let brickImg;
let playerImg;
let groundImg;
let pipeImg;
let mysteryImg;
let mysteryEmptyImg;
let indestructibleImg;

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
}


let gravity; //add ability to change via config file
let player;
let hostiles = [];
let enviroment = [];
let collectibles = [];
let playerLocation;
let blockArray = [];

function setup() {
  // put setup code here
  gravity = createVector(0, config.gravity);
  createCanvas(0, 0)
  windowResized()
  makeLevel()

  //define new player
  player = new Player(playerLocation, unit, unit, config.playerSpeed, config.playerMaxVelocity);
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
  background(0, 50, 200);

  //stopline
  stroke(255)
  line(unit * 7, 0, unit * 7, height)
  noStroke()
  player.update().draw();

  //Draw boxes
  for (var i = 0; i < enviroment.length; i++) {
    if (!enviroment[i].broken)
      enviroment[i].draw()
  }

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
}

function keyPressed() {
  //Checks if the jumpbutton it pressed
  if (keyCode == config.keys.up) {
    player.jump();
  }
}
