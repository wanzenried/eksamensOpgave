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
let score = 0

// let sliders = [];

function setup() {
  // put setup code here
  gravity = createVector(0, config.gravity);
  createCanvas(0, 0)
  windowResized()
  makeLevel()
  // for (var i = 0; i < 3; i++) {
  //   sliders[i] = createSlider(60,70,0);
  //   sliders[i].position(10,10+30*i);
  //   sliders[i].style('width','80px');
  // }



  //define new player
  player = new Player(playerLocation, unit, unit, config.playerSpeed, config.playerMaxVelocity);

  //Make testboxes
  /*enviroment.push(new Brick(createVector((9) * unit, 11 * unit), unit, unit))
  for (var i = 0; i < 12; i++) {
    if (i % 2 === 0)
      enviroment[i] = new Brick(createVector((3) * unit, i * unit), unit, unit)
    else
      enviroment[i] = new Mystery(createVector((3) * unit, i * unit), unit, unit)
  }*/
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
  // testjumpAcceleration = sliders[0].value();

  background(0, 50, 200);

  //stopline
  stroke(255)
  line(unit * 7, 0, unit * 7, height)
  noStroke()
  player.update().draw();

  //Draw boxes
  for (var i = 0; i < enviroment.length; i++) {
    if (enviroment[i].drawed)
      enviroment[i].draw()
  }
  for (var i = 0; i < collectibles.length; i++) {
    collectibles[i].draw()
    if (collectibles[i].moving)
      collectibles[i].move()
  }
  for (var i = collectibles.length - 1; i > -1; i--) {
    if (collectibles[i].location.x < -collectibles[i].width || collectibles[i].location.y > height)
    collectibles.splice(i,1)
  }


}

function keyPressed() {
  if (keyCode == config.keys.up) {
    player.jump();
  }
}
