function makeLevel() {
  // whitePix = [255, 255, 255]
  let playerColour = 25;
  let groundColour = 0;
  let brickColour = 50;
  let indestructibleColour = 75;
  let mystery1Colour = 100; //containing coins
  let mystery2Colour = 125; // containing regular powerups
  let mystery3Colour = 150; // containing starman
  let goombaColour = 175;
  let koopaColour = 200;
  let pipeColour = 225;
  let flagColour = 250;
  let triggerColour = 90;
  let controlColour = 10;

  for (var i = 0; i < level.width; i++) {
    blockArray[i] = [];
    for (var j = 0; j < level.height; j++) {
      blockArray[i][j] = false;
      currentPixel = level.get(i, j)[0];

      switch (currentPixel) {
        case playerColour:
          playerLocation = createVector(i * unit, j * unit);
          break;
        case groundColour:
          enviroment.push(new Ground(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));

          blockArray[i][j] = true;

          break;
        case brickColour:
          enviroment.push(new Brick(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case indestructibleColour:
          enviroment.push(new Indestructible(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case mystery1Colour:
          enviroment.push(new Mystery(createVector(i * unit, j * unit), unit, unit, "coin", createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case mystery2Colour:
          enviroment.push(new Mystery(createVector(i * unit, j * unit), unit, unit, "Shroom", createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case mystery3Colour:
          enviroment.push(new Mystery(createVector(i * unit, j * unit), unit, unit, "StarMan", createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case goombaColour:

          break;
        case koopaColour:

          break;
        case pipeColour:
          enviroment.push(new Pipe(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case flagColour:
          enviroment.push(new FlagPole(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));
          blockArray[i][j] = true;

          break;
        case triggerColour:
          enviroment.push(new WinTrigger(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));

          break;
        case controlColour:
          enviroment.push(new ControlsBlock(createVector(i * unit, j * unit), unit, unit, createVector(i, j)));

          break;

      }

    }
  }
}
