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

for (var i = 0; i < 2; i++) {

    let t = this.collision(box[i]);
    if (t.collision) {
      if (t.top) {
        this.location.x = t.goToX;
        this.location.y = t.goToY;
        this.velocity.y = 0;
        this.onGround = true;
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
      this.onGround = false;
    }
  }

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

  collision(object) {
    //cornerpoints of the characters hitbox
    let l1 = createVector(this.location.x, this.location.y);
    let r1 = createVector(l1.x + this.width, l1.y + this.height);
    //cornerpoints of the characters hitbox last frame
    let l2 = createVector(this.lastLocation.x, this.lastLocation.y);
    let r2 = createVector(l2.x + this.width, l2.y + this.height);
    //cornerpoints of the objects hitbox
    let l3 = createVector(object.location.x, object.location.y);
    let r3 = createVector(l3.x + object.width, l3.y + object.height);

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
    if (l1.x > r3.x || l3.x > r1.x) {
      returnParams.collision = false;
      return returnParams;
    }
    //if one of the rectangles is above the other rectangle, they do not touch
    if (l1.y > r3.y || l3.y > r1.y) {
      returnParams.collision = false;
      return returnParams;
    }

    returnParams.collision = true;
    //website used for understanding the above code:
    //https://www.geeksforgeeks.org/find-two-rectangles-overlap/

    //check which side of the object the character hit:

    //object top check:
    if (r2.y < l3.y) {
      returnParams.top = true;
      returnParams.goToX = l1.x;
      returnParams.goToY = l3.y - this.height - 0.01;
      return returnParams;
    }

    //object bottom check:
    if (l2.y > r3.y) {
      returnParams.bottom = true;
      returnParams.goToX = l1.x;
      returnParams.goToY = r3.y + 0.01;
      return returnParams;
    }

    //object left side check:
    if (l3.x > r2.x) {
      returnParams.left = true;
      returnParams.goToX = l3.x - this.width - 0.01;
      returnParams.goToY = l1.y;
      return returnParams;
    }

    //object right side check:
    if (l2.x > r3.x) {
      returnParams.right = true;
      returnParams.goToX = r3.x + 0.01;
      returnParams.goToY = l1.y;
      return returnParams;
    }

    returnParams.collision = false;
    return returnParams;


  }

  draw() {
    fill(255, 0, 0);
    rect(this.location.x, this.location.y, this.width, this.height);
  }

}
