class player {
  constructor(location, w, h, speed, maxVelocity, powerUpState = "smallMario") {
    this.location = location;
    this.width = w;
    this.height = h;
    this.powerUpState = powerUpState;
    this.acceleration = createVector(0, 0);
    this.maxVelocity = maxVelocity;
    this.velocity = createVector(0, 0);
    this.speed = speed
    this.onGround = false;
  }

  update() {
    this.acceleration.add(gravity);

    if (keyIsDown(68)) { // d key
      this.acceleration.x += this.speed
    }
    if (keyIsDown(65)) { // a key
      this.acceleration.x -= this.speed
    }
    // if (keyIsDown(32) && this.onGround) {
    //   this.acceleration.y -= 20;
    //   this.onGround = false;
    // }
    this.velocity.add(this.acceleration);




    this.acceleration.mult(0);


    let friction = this.velocity.copy()
    friction.mult(-1);
    friction.normalize();
    friction.mult(0.1);
    this.velocity.add(friction);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity)
    if (this.velocity.x < 0.0001 && this.velocity.x > -0.0001) this.velocity.x = 0

    if (this.location.y > height - this.height) {
      this.location.y = height - this.height;
      this.velocity.y = 0;
      this.onGround = true;
    }

console.log(this.velocity);
    return this;
  }

  jump() {
    if (this.onGround) {
      this.acceleration.y -= 20;
      this.onGround = false;
    }
  }

  draw() {
    fill(255, 0, 0);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

}
