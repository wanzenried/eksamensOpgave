//Master block class
class Block {
  constructor(location, size) {
    this.location = location.copy();
    this.width = size
    this.height = size

    //used to remove blocks
    this.drawed = true
    this.collide = true
  }

  draw() {
    // fill(this.color)
    // noStroke()
    // square(this.location.x, this.location.y, unit)

    image(this.graphic,this.location.x,this.location.y,unit,unit);

    //For Mystery blocks ?, makes them if the block have content
    if (this.content) {
      textAlign(CENTER, CENTER)
      textSize(unit)
      fill(0)
      text("?", this.location.x + unit / 2, this.location.y + unit / 2)
    }
    return this
  }

  hit(){
    return 0;
  }

}

//Brick is an breakable block
class Brick extends Block {
  constructor(location, width, height) {
    super(location, width, height)
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
      //Sets the block to not show and not to collide
      this.drawed = false
      this.collide = false
    }
  }
}

//Mystery is a block which contains some thing that gets released when hit from the bottom
class Mystery extends Block {
  // defualt content is set to coin
  constructor(location, width, height, content = "coin") {
    super(location, width, height)
    this.color = color(255, 255, 0)
    this.content = content
    this.graphic = mysteryImg;
  }

  //hit get activated in player class
  hit() {
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
  constructor(location,width,height) {
    super(location,width,height);
    this.graphic = groundImg;

  }

  // draw(){
  //   image(groundImg,this.location.x,this.location.y,unit,unit);
  // }
}

class Pipe extends Block {
  constructor(location,width,height) {
    super(location,width,height);
    this.graphic = pipeImg;
  }

  // draw(){
  //   image(pipeImg,this.location.x,this.location.y,unit,unit);
  // }
}

class Indestructible extends Block {
  constructor(location,width,height){
    super(location,width,height);
    this.graphic = indestructibleImg;
  }
}
