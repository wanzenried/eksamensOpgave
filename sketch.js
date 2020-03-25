// constants:

let gravity;

// end of constants

let canvasX = 600;
let canvasY = 600;
let boxes = [];
let player;



function setup() {
  // put setup code here
  createCanvas(canvasX, canvasY);


  gravity = createVector(0,0.1);


  boxes[0] = new groundRect(300, 500, 400, 600);
  boxes[1] = new groundRect(500,400,600,500);
  player = new KeyboardPlayer(createVector(150,100));
}

function draw() {
  // put drawing code here
  background(0);
  drawGrid(10, 10, 255, 1);
  boxes[0].draw();
  boxes[1].draw();
  player.update().draw();
}
