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
    // fill(this.color)
    // noStroke()
    // square(this.location.x, this.location.y, unit)

    image(this.graphic, this.location.x, this.location.y, unit, unit);

    //For Mystery blocks ?, makes them if the block have content
    if (this.content) {
      textAlign(CENTER, CENTER)
      textSize(unit)
      fill(0)
      text("?", this.location.x + unit / 2, this.location.y + unit / 2)
    }
    return this
  }

  hit() {
    return 0;
  }

}

//Brick is an breakable block
class Brick extends Block {
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation)
    this.color = 125
    this.graphic = brickImg;
  }

  // draw(){
  //   image(brickImg,this.location.x,this.location.y,unit,unit);
  // }

  //hit get activated in player class
  hit() {
    //Makes sure that small Mario can not break the brick
    if (player.powerUpState != "smallMario") {
      //Sets the block to be broken. The block will not show and collide
      this.broken = true
    }
  }
}

//Mystery is a block which contains a collectible that gets released when hit from the bottom
class Mystery extends Block {
  /*This block has a screenlocation, width, height, content in form of a coin or powerup
  and a truelocation in the level 2D array*/
  constructor(location, width, height, content, trueLocation) {
    super(location, width, height, trueLocation)
    this.color = color(255, 255, 0)
    this.content = content
    this.graphic = mysteryImg;
  }

  //hit get activated in player class
  hit() {
    //
    switch (this.content) {
      case "coin":
        console.log("coin");
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

class Ground extends Block {
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = groundImg;

  }

  // draw(){
  //   image(groundImg,this.location.x,this.location.y,unit,unit);
  // }
}

class Pipe extends Block {
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = pipeImg;
  }

  // draw(){
  //   image(pipeImg,this.location.x,this.location.y,unit,unit);
  // }
}

class Indestructible extends Block {
  constructor(location, width, height, trueLocation) {
    super(location, width, height, trueLocation);
    this.graphic = indestructibleImg;
  }
}
