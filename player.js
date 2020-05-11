class Player extends PhysicsObject {
  constructor(location, w, h, speed, maxVelocity, powerUpState = "smallMario") {
    super(location, w, h, maxVelocity);
    this.lastLocation = this.location.copy();
    this.powerUpState = powerUpState;
    this.speed = speed
    this.rightKey = config.keys.right
    this.leftKey = config.keys.left
    this.playerFriction = config.playerFriction
    this.jumpAcceleration = unit*(config.jumpAcceleration/100)
  }

  update() {
    this.lastLocation = this.location.copy()

    this.addForce(gravity);

    if (keyIsDown(this.rightKey)) { // d key
      this.acceleration.x += this.speed
    }
    if (keyIsDown(this.leftKey)) { // a key
      this.acceleration.x -= this.speed
    }

    let friction = this.velocity.copy()
    friction.mult(-1);
    friction.normalize();
    friction.mult(this.playerFriction);

    this.addForce(friction);
    this.calculate()

    this.location.add(this.velocity)

    this.enviromentDetection();
    this.collectibleDetection()

//sidescroll detection
    if (this.location.x > unit * 6) {
      this.location.x = unit * 6
      updateBlocks(this.velocity.x)
    }

//floor and back wall detection
    if (this.location.y > height - this.height) {
      this.location.y = height - this.height;
      this.velocity.y = 0;
      this.falling = false;
    }
    if (this.location.x < 0) {
      this.location.x = 0
      this.velocity.x = 0
    }



    return this;
  }

  jump() {
    if (!this.falling) {
      this.acceleration.y -= this.jumpAcceleration;
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
          enviroment[i].hit()
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
    for (var i = collectibles.length; i < -1; i--) {
      let t = this.collision(collectibles[i]);
      // console.log(t);
      if (t.collision) {
        console.log("HI");
        //collect item / powerup
        console.log("you touched an item");
        switch (collectibles[i].kind) {
          case "Shroom":
            console.log("U 8 a Shroom");
            break;
          default:

        }
        collectibles.splice(i,1)
      }
    }
  }

}
