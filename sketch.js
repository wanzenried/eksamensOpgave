let gravity; //add ability to change via config file
let p;

function setup() {
  // put setup code here
  gravity = createVector(0,1);
  createCanvas(600,600);
  console.log(width);
  p = new player(createVector(100,100),10,10,1);
}

function draw() {
  // put drawing code here
  background(0);
  p.update().draw();
}

function keyPressed(){
  if (keyCode == 32) {
    console.log("t");
    p.jump();
  }
}
