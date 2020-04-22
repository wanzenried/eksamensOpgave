class Block {
  constructor(location, size) {
    this.location = location.copy();
    this.width = size
    this.height = size
    this.drawed = true
    this.collide = true
  }

  draw() {
    fill(this.color)
    noStroke()
    square(this.location.x, this.location.y, unit)
    if (this.content && this.content != "empty") {
      textAlign(CENTER, CENTER)
      textSize(unit)
      fill(0)
      text("?", this.location.x + unit / 2, this.location.y + unit / 2)
      textAlign(LEFT, TOP)
    }
    return this
  }

}

class Brick extends Block {
  constructor(location, width, height) {
    super(location, width, height)
    this.color = 125
  }

  hit() {
    if (player.powerUpState != "smallMario") {
      this.drawed = false
      this.collide = false
    }
  }
}

class Mystery extends Block {
  constructor(location, width, height, content = "coin") {
    super(location, width, height)
    this.color = color(255, 255, 0)
    this.content = content
  }

  hit() {
    switch (this.content) {
      case "coin":
        console.log("coin");
        break;
      case "Shroom":
        console.log("Shroom");
        break;
      case "1up":
        console.log("1up");
        break;

      default:

    }
    this.content = "empty"
  }

}
