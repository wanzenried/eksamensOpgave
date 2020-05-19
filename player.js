class Player extends PhysicsObject {
  constructor(location, w, h, speed, maxVelocity, powerUpState = "smallMario") {
    super(location, w, h, maxVelocity);
    this.lastLocation = this.location.copy();
    this.powerUpState = powerUpState;
    this.speed = speed
    this.rightKey = config.keys.right
    this.leftKey = config.keys.left
    this.playerFriction = config.playerFriction
    this.jumpAcceleration = config.jumpAcceleration
  }

  update() {
    this.lastLocation = this.location.copy()

    this.addForce(gravity);
    if (keyIsDown(69))
    this.speed = 0.4
    else
    this.speed = config.playerSpeed

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
    // this.enviromentDetection();

    if (collectibles.length > 0)
      this.collectibleDetection()

    this.enviromentDetection();

    //sidescroll detection
    if (this.location.x > unit * 6) {
      this.location.x = unit * 6
      updateBlocks(this.velocity.x)
    }

    //floor and back wall detection
    if (this.location.y > height - this.height) {
      this.location.y = height - this.height;
      dead = true;
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
    // fill(255, 0, 0);
    // rect(this.location.x, this.location.y, this.width, this.height);
    image(playerImg, this.location.x, this.location.y, unit, unit);
  }

  enviromentDetection() {
    let top;
    let bottom;
    let left;
    let right;
    for (var i = 0; i < enviroment.length; i++) {
      let t = this.collision(enviroment[i]);

      if (t.bottom &&
        blockArray[enviroment[i].trueLocation.x][enviroment[i].trueLocation.y + 1] == false) {
        bottom = t;
      }
      if (t.top &&
        blockArray[enviroment[i].trueLocation.x][enviroment[i].trueLocation.y - 1] == false) {
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
      this.velocity.x = 0;
    }
    if (right) {
      this.location.x = right.goToX;
      this.velocity.x = 0;
    }
    if (bottom) {
      this.location.y = bottom.goToY;
      this.velocity.y = 0;
      bottom.object.hit()
    }
    if (top) {
      // this.location.x = top.goToX;
      this.location.y = top.goToY;
      this.velocity.y = 0;
      this.falling = false;
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
          if(powerUpState == "smallMario"){
            dead = true;
          }

        }
        if (t.left || t.right) {
          // damage the player
          console.log("player takes damage");
          if(powerUpState == "smallMario"){
            dead = true;
          }
        }
        break;
      }

    }
  }

  collectibleDetection() {
    for (var i = collectibles.length - 1; i > -1; i--) {
      let t = this.collision(collectibles[i]);
      // console.log(t);
      if (t.collision) {
        switch (collectibles[i].kind) {
          case "Shroom":
            console.log("U 8 a sHroooom");
            break;
          case "1up":
            console.log("U GIT 1 liFe");
            break;
          case "StarMan":
            console.log("RUN!!! MAN, RUUNNN!!!");
            break;
        }
        collectibles.splice(i, 1)
      }
    }
  }

}
