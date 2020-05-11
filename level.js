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

  for (var i = 0; i < level.width; i++) {
    for (var j = 0; j < level.height; j++) {
      currentPixel = level.get(i, j)[0];

      switch (currentPixel) {
        case playerColour:
          playerLocation = createVector(i * unit, j * unit);
          break;
        case groundColour:
          enviroment.push(new Ground(createVector(i * unit, j * unit), unit, unit));

          break;
        case brickColour:
          enviroment.push(new Brick(createVector(i * unit, j * unit), unit, unit));
          break;
        case indestructibleColour:
          enviroment.push(new Brick(createVector(i * unit, j * unit), unit, unit));
          break;
        case mystery1Colour:
          enviroment.push(new Mystery(createVector(i * unit, j * unit), unit, unit,"coin"));
          break;
        case mystery2Colour:
          enviroment.push(new Mystery(createVector(i * unit, j * unit), unit, unit, "Shroom"));
          break;
        case mystery3Colour:
          enviroment.push(new Mystery(createVector(i * unit, j * unit), unit, unit, "StarMan"));
          break;
        case goombaColour:

          break;
        case koopaColour:

          break;
        case pipeColour:
          enviroment.push(new Brick(createVector(i * unit, j * unit), unit, unit));
          break;
        case flagColour:
          enviroment.push(new Brick(createVector(i * unit, j * unit), unit, unit));
          break;

      }

    }
  }
}
