//Parent class for all object needed to have physics, easy usage guide can be found here:
//https://www.w3schools.com/jsref/jsref_class_extends.asp

class PhysicsObject {
  constructor(location, w, h, maxVelocity) {
    this.location = location.copy();
    this.width = w;
    this.height = h;
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.maxVelocity = maxVelocity;
    this.falling = false;

  }
  collision(object) {

    //cornerpoints of the calling objects hitbox
    let l1 = createVector(this.location.x, this.location.y);
    let r1 = createVector(l1.x + this.width, l1.y + this.height);
    //cornerpoints of the calling objects hitbox last frame
    let l2 = createVector(this.lastLocation.x, this.lastLocation.y);
    let r2 = createVector(l2.x + this.width, l2.y + this.height);
    //cornerpoints of the object being checkeds hitbox
    let l3 = createVector(object.location.x, object.location.y);
    let r3 = createVector(l3.x + object.width, l3.y + object.height);

    //create return parameters:
    let returnParams = {
      object: object,
      collision: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      goToX: 0,
      goToY: 0
    };
    if (object.broken)
    return returnParams

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

    let f = l2.copy();

    f.sub(l3);


    let angle = f.heading();


    //top detection
    if (angle >= -(3*QUARTER_PI) && angle <= -QUARTER_PI) {
      returnParams.top = true;
      returnParams.goToX = l1.x;
      returnParams.goToY = l3.y - this.height;
      return returnParams;
    }
    //left detection
    else if ((angle > (3*QUARTER_PI) && angle <= PI)||(angle >= -(PI) &&angle < -(3*QUARTER_PI))) {
      returnParams.left = true;
      returnParams.goToX = l3.x - this.width;
      returnParams.goToY = l1.y;
      return returnParams;
    }

    //right Detection
    else if (angle > -QUARTER_PI && angle < QUARTER_PI) {
      returnParams.right = true;
      returnParams.goToX = r3.x;
      returnParams.goToY = l1.y;
      return returnParams;
    }
    //bottom Detection
    else if (angle >= QUARTER_PI && angle <= (3*QUARTER_PI)) {
        returnParams.bottom = true;
        returnParams.goToX = l1.x;
        returnParams.goToY = r3.y;
        return returnParams;


    } else {
      returnParams.collision = false;
      return returnParams;
    }
}

  addForce(force) {
    this.acceleration.add(force);
  }

  calculate() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    if (this.velocity.x < 0.1 && this.velocity.x > -0.1) this.velocity.x = 0
    this.acceleration.mult(0);
  }
}
