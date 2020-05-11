class Collectible extends PhysicsObject {
  constructor(location, w, h, maxVelocity) {
    super(location, w, h, maxVelocity)
    this.lastLocation = this.location.copy()
    this.width = w
    this.height = h
    this.moving = false
    this.acceleration.x = 2
  }

  draw() {
    fill(this.color)
    // fill(255)
    noStroke()
    circle(this.location.x , this.location.y , this.width)
  }

  move() {
    this.lastLocation = this.location.copy()
    this.addForce(gravity)
    this.calculate()
    this.location.add(this.velocity)
    // this.velocity.mult(0)
    if (this.location.y > height - this.height) {
      this.location.y = height - this.height;
      this.velocity.y = 0;
    }
    this.enviromentDetection();
  }

  enviromentDetection() {
    for (var i = 0; i < enviroment.length; i++) {

      let t = this.collision(enviroment[i]);
      if (t.collision) {
        if (t.top) {
          this.location.x = t.goToX;
          this.location.y = t.goToY;
          this.velocity.y = 0;
          this.falling = false;
        }
        if (t.bottom) {
          this.location.x = t.goToX;
          this.location.y = t.goToY;
          this.velocity.y = 0;
          enviroment[i].hit()
        }
        if (t.left || t.right) {
          this.location.x = t.goToX;
          this.location.y = t.goToY;
          this.velocity.mult(-1)
        }
        break;
      } else {
        this.falling = true;
      }
    }
  }

}

class Shroom extends Collectible {
  constructor(location, width, height) {
    super(location, width, height)
    this.moving = true
    this.color = color("brown")
    this.kind = "Shroom"
  }
}
