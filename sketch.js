let config;
let level

function preload() {
  let path = '/config.json';
  config = loadJSON(path);
  if (config)
    console.log("config is loaded");
    level = loadImage("/bitmap test.png")
    if (level)
    console.log("level is loaded");
}


let gravity; //add ability to change via config file
let player;
let hostiles = [];
let enviroment = [];
let collectibles = [];

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
  player = new Player(createVector(width / 10, 0), unit, unit, config.playerSpeed, config.playerMaxVelocity);

  //Make testboxes
  enviroment.push(new Brick(createVector((9) * unit, 11 * unit), unit, unit))
  for (var i = 1; i < 100; i++) {
    if (i % 2 === 0)
      enviroment[i] = new Brick(createVector((i * 3) * unit, 9 * unit), unit, unit)
    else
      enviroment[i] = new Mystery(createVector((i * 3) * unit, 9 * unit), unit, unit)
  }
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

  background(0,50,200);

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


}

function keyPressed() {
  if (keyCode == config.keys.up) {
    player.jump();
  }
}
