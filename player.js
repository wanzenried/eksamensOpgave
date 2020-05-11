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
    // this.enviromentDetection();


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
    let top;
    let bottom;
    let left;
    let right;
    for (var i = 0; i < enviroment.length; i++) {
      let t = this.collision(enviroment[i]);

      if(t.bottom){
        bottom = t;
      }
      if(t.top){
        top = t;
      }
      if(t.left && enviroment[i].location.y < this.location.y){
        left = t;
      }
      if(t.right && enviroment[i].location.y < this.location.y){
        right = t;
      }
    }

    if(top){
      // this.location.x = top.goToX;
      this.location.y = top.goToY;
      this.velocity.y = 0;
      this.falling = false;
    }
    if(left){
      this.location.x = left.goToX;
      this.velocity.x = 0;
    }
    if(right){
      this.location.x = right.goToX;
      this.velocity.x = 0;
    }
    if(bottom){
        this.location.y = bottom.goToY;
        this.velocity.y = 0;
        bottom.object.hit()
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
