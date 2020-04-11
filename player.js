class player {
  constructor(location, w, h, speed, maxVelocity, powerUpState = "smallMario") {
    this.location = location;
    this.lastLocation = location;
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
    this.lastLocation = this.location.copy()

    return this;
  }

  jump() {
    if (this.onGround) {
      this.acceleration.y -= 20;
      this.onGround = false;
    }
  }

  //check for collision with any object that has location, width and height
  //returns which side of the object the collision was on, if any
  /*collision(object) {
    let x1 = object.location.x;
    let x2 = x1 + object.width;
    let y1 = object.location.y;
    let y2 = y1 + object.height;

    let returnParams = {
      collision: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      gotox: 0,
      gotoY: 0
    };

    if (this.location.x > x1 &&
      this.location.x < x2 &&
      this.location.y > y1 &&
      this.location.y < y2) {

      returnParams.collision = true;
      returnParams.top = (this.lastLocation.y < y1);
      returnParams.left = (this.lastLocation.x < x1);
      returnParams.right = (this.lastLocation.x > x2);
      returnParams.bottom = (this.lastLocation.y > y2);
    }
    return returnParams;

  }*/

  collision(object){
    let l1 = createVector(this.location.x,this.location.y);
    let r1 = createVector(l1.x + this.width,l1.y+this.height);
    let l2 = createVector(object.location.x,object.location.y);
    let r2 = createVector(l2.x + object.width,l2.y + object.height);

    //create return parameters:
    let returnParams = {
      collision: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      goToX: 0,
      goToY: 0
    };

    //first check if the two rectangular hitboxes touch:



    //if one of the rectangles is on the left of the other rectangles, they do not touch
    if (l1.x > r2.x || l2.x > r1.x) {
      returnParams.collision = false;
      return returnParams;
    }
    //if one of the rectangles is above the other rectangle, they do not touch
    if (l1.y < r2.y || l2.y < r1.y) {
      returnParams.collision = false;
      return returnParams;
    }

    //https://www.geeksforgeeks.org/find-two-rectangles-overlap/

    

  }

  draw() {
    fill(255, 0, 0);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

}
