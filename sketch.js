let config;

function preload(){
  let path = '/config.json';
  config = loadJSON(path);
  if (config)
  console.log("config is loaded");
}

let gravity; //add ability to change via config file
let p;
let box = [];

// let sliders = [];

function setup() {
  // put setup code here
  gravity = createVector(0,config.gravity)
  createCanvas(0, 0)
  windowResized()
  // for (var i = 0; i < 3; i++) {
  //   sliders[i] = createSlider(0,100,50);
  //   sliders[i].position(10,10+30*i);
  //   sliders[i].style('width','80px');
  // }



  p = new player(createVector(100, 100), unit, unit, config.playerSpeed, config.playerMaxVelocity);
  box[0] = {
    location: createVector(3*unit, 11*unit),
    width: unit,
    height: unit
  };
  box[1] = {
    location: createVector(5*unit, 10*unit),
    width: unit,
    height: unit
  };
}

function draw() {
  // put drawing code here
  // gravity.y = sliders[0].value()/50;


  background(0);
  p.update().draw();
  fill(255,255,0)
  rect(box[0].location.x, box[0].location.y, box[0].width, box[0].height);
  rect(box[1].location.x, box[1].location.y, box[1].width, box[1].height);
}

function keyPressed() {
  if (keyCode == 32) {
    p.jump();
  }
}
