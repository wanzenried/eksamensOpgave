class Player extends PhysicsObject {
  constructor(location, w, h, speed, maxVelocity, powerUpState = "smallMario") {
    super(location, w, h, maxVelocity);
    this.lastLocation = this.location.copy();
    this.powerUpState = powerUpState;
    this.speed = speed
  }

  update() {
    this.addForce(gravity);

    if (keyIsDown(config.keys.right)) { // d key
      this.acceleration.x += this.speed
    }
    if (keyIsDown(config.keys.left)) { // a key
      this.acceleration.x -= this.speed
    }

    let friction = this.velocity.copy()
    friction.mult(-1);
    friction.normalize();
    friction.mult(0.1);

    this.addForce(friction);
    this.calculate()

    this.location.add(this.velocity)

    this.enviromentDetection();

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
  }

  hostileDetection() {
    for (var i = 0; i < hostiles.length; i++) {
      let t = this.collision(hostiles[i]);
      if (t.collision) {
        if (t.top) {
          // damage the hostile
          console.log("hostile takes damage");
        }
        if (t.bottom) {
          // damage the player
          console.log("player takes damage");

        }
        if (t.left || t.right) {
          // damage the player
          console.log("player takes damage");
        }
        break;
      }

    }
  }

  collectibleDetection() {
    for (var i = 0; i < collectibles.length; i++) {
      let t = this.collision(collectibles[i]);
      if(t.collision){
        //collect item / powerup
        console.log("you touched an item");
      }
    }
  }

}
