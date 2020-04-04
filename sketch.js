let gravity; //add ability to change via config file
let p;

// let sliders = [];

function setup() {
  // put setup code here
  gravity = createVector(0, 1);
  createCanvas(600, 600);

  // for (var i = 0; i < 3; i++) {
  //   sliders[i] = createSlider(0,100,50);
  //   sliders[i].position(10,10+30*i);
  //   sliders[i].style('width','80px');
  // }




  p = new player(createVector(100, 100), 10, 30, 1, 20);
}

function draw() {
  // put drawing code here
  // gravity.y = sliders[0].value()/50;


  background(0);
  p.update().draw();
}

function keyPressed() {
  if (keyCode == 32) {
    p.jump();
  }
}
