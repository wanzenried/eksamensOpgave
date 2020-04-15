class player extends PhysicsObject {
  constructor(location, w, h, speed, maxVelocity, powerUpState = "smallMario") {
    super(location,w,h, maxVelocity);
    this.lastLocation = this.location.copy();
    this.powerUpState = powerUpState;
    this.speed = speed
  }

  update() {
    this.addForce(gravity);

    if (keyIsDown(68)) { // d key
      this.acceleration.x += this.speed
    }
    if (keyIsDown(65)) { // a key
      this.acceleration.x -= this.speed
    }

    let friction = this.velocity.copy()
    friction.mult(-1);
    friction.normalize();
    friction.mult(0.1);
    addForce(friction);

    this.location.add(this.velocity)
    if (this.velocity.x < 0.0001 && this.velocity.x > -0.0001) this.velocity.x = 0

for (var i = 0; i < 2; i++) {

    let t = this.collision(box[i]);
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

      }
      if (t.left || t.right) {
        this.location.x = t.goToX;
        this.location.y = t.goToY;
        this.velocity.x = 0;
      }
      break;
    } else {
      this.falling = true;
    }
  }

    if (this.location.y > height - this.height) {
      this.location.y = height - this.height;
      this.velocity.y = 0;
      this.falling = false;
    }

    this.lastLocation = this.location.copy()

    return this;
  }

  jump() {
    if (!this.falling) {
      this.acceleration.y -= 20;
      this.falling = true;
    }
  }

  draw() {
    fill(255, 0, 0);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

}
