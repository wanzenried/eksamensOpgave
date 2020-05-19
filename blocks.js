//Master block class
class Block {
  constructor(location, width, height, trueLocation) {
    //location on screen
    this.location = location.copy();
    //Block's width and height
    this.width = width
    this.height = height
    //The true location in level 2D array
    this.trueLocation = trueLocation;

    //Boolean for if the block is broken. If true makes the block invisible and non-collidable
    this.broken = false
  }

  draw() {
    image(this.graphic, this.location.x, this.location.y, unit, unit);

    //For Mystery blocks ?, makes them if the block have content
    // if (this.content) {
    //
    // }
    return this
  }

  hit() {
    return 0;
  }

}

//Brick is an breakable block
class Brick extends Block {
  //This block has a screenlocation, width, height, truelocation in the level 2D array,and a graphic
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation)
    this.graphic = brickImg;
  }

  //hit get activated in player class
  hit() {
    //Makes sure that small Mario can not break the brick
    if (player.powerUpState != "smallMario") {
      //Sets the block to be broken. The block will not be drawen or collide
      this.broken = true
    }
  }
}

//Mystery is a block which contains a collectible that gets released when hit from the bottom
class Mystery extends Block {
  /*This block has a screenlocation, width, height, content in form of a coin or powerup,
  truelocation in the level 2D array and a graphic*/
  constructor(location, width, height, content, trueLocation) {
    super(location, width, height, trueLocation)
    this.content = content
    this.graphic = mysteryImg;
  }

  //hit get activated in player class
  hit() {
    //The block does different things when hit depending on the content
    switch (this.content) {
      case "coin":
        console.log("coin");
        score += 200
        break;
      case "Shroom":
        console.log("Shroom");
        collectibles.push(new Shroom(createVector(this.location.x, this.location.y - unit), unit, unit))
        break;
      case "1up":
        collectibles.push(new OneUp(createVector(this.location.x, this.location.y - unit), unit, unit))
        break;
      case "StarMan":
        collectibles.push(new StarMan(createVector(this.location.x, this.location.y - unit), unit, unit))
        break;
    }
    //removes content
    this.content = false
  }
}

//Is the blocks that makes the ground
class Ground extends Block {
  //This block has a screenlocation, width, height, truelocation in the level 2D array,and a graphic
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = groundImg;

  }
}

//The pips that stick up through the map
class Pipe extends Block {
  //This block has a screenlocation, width, height, truelocation in the level 2D array,and a graphic
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = pipeImg;
  }
}

//Indestructible block which makes up the stairs
class Indestructible extends Block {
  //This block has a screenlocation, width, height, truelocation in the level 2D array,and a graphic
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = indestructibleImg;
  }
}

class FlagPole extends Block {

  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = flagPoleImg;

  }
  draw() {
    image(this.graphic, this.location.x, this.location.y - 6 * unit, unit * 2, unit * 7);

  }
}

class WinTrigger extends Block {
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.isTrigger = true;
  }
  draw() {
    return
  }
}
