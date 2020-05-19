//Master class
class Collectible extends PhysicsObject {
  constructor(location, w, h, maxVelocity) {
    super(location, w, h, maxVelocity)
    //location on screen
    this.lastLocation = this.location.copy()
    //Powerup's width and height
    this.width = w
    this.height = h
    //As defult the powerup does not move
    this.moving = false
    //The acceleration of powerups
    this.acceleration.x = 2
    //The broken feature from blocks
    this.broken = false
  }

  //Draws a placeholder circle with the color of the collectible
  draw() {
    fill(this.color)
    noStroke()
    circle(this.location.x + this.width / 2, this.location.y + this.width / 2, this.width)
  }

  move() {
    this.lastLocation = this.location.copy()
    this.addForce(gravity)
    this.calculate()
    this.location.add(this.velocity)
    // this.velocity.mult(0)
    this.enviromentDetection();
  }

  enviromentDetection() {
    let top;
    let bottom;
    let left;
    let right;
    for (var i = 0; i < enviroment.length; i++) {
      let t = this.collision(enviroment[i]);

      if (t.bottom) {
        bottom = t;
      }
      if (t.top) {
        top = t;
      }
      if (t.left && enviroment[i].location.y < this.location.y) {
        left = t;
      }
      if (t.right && enviroment[i].location.y < this.location.y) {
        right = t;
      }
    }

    this.falling = true;
    if (left) {
      this.location.x = left.goToX;
      this.velocity.mult(-1)
    }
    if (right) {
      this.location.x = right.goToX;
      this.velocity.mult(-1)
    }
    if (bottom) {
      this.location.y = bottom.goToY;
      this.velocity.y = 0;
    }
    if (top) {
      // this.location.x = top.goToX;
      this.location.y = top.goToY;
      this.velocity.y = 0;
      this.falling = false;
    }

  }
}

class Shroom extends Collectible {
  constructor(location, width, height) {
    super(location, width, height)
    this.moving = true
    this.color = color("brown")
    this.kind = "Shroom"
    this.moving = false
  }
}

class OneUp extends Collectible {
  constructor(location, width, height) {
    super(location, width, height)
    this.moving = true
    this.color = color("green")
    this.kind = "1up"
  }
}

class StarMan extends Collectible {
  constructor(location, width, height) {
    super(location, width, height)
    this.moving = true
    this.color = color("yellow")
    this.kind = "StarMan"
  }
}
