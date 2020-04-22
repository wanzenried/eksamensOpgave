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
      collision: false,
      top: false,
      bottom: false,
      left: false,
      right: false,
      goToX: 0,
      goToY: 0
    };
    if (!object.collide)
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

    //if the above code has not been triggered, then the hitboxes much touch

    returnParams.collision = true;
    //website used for understanding the above code:
    //https://www.geeksforgeeks.org/find-two-rectangles-overlap/

    //check which side of the object the character hit:

    // new solution:
    let distArr = [];
    distArr[0] = abs(r1.y - l3.y); // top
    distArr[1] = abs(r3.y - l1.y); // bottom
    distArr[2] = abs(r1.x - l3.x); // left
    distArr[3] = abs(r3.x - l1.x); // right
    let shortest = distArr[0];
    let number = 0;
    for (var i = 0; i < distArr.length; i++) {
      if (distArr[i] < shortest) {
        shortest = distArr[i];
        number = i;
      }
    }

    switch (number) {
      case 0: //top
        returnParams.top = true;
        returnParams.goToX = l1.x;
        returnParams.goToY = l3.y - this.height;
        return returnParams;
        break;
      case 1: //bottom
        returnParams.bottom = true;
        returnParams.goToX = l1.x;
        returnParams.goToY = r3.y;
        return returnParams;
        break;

      case 2: //left
        returnParams.left = true;
        returnParams.goToX = l3.x - this.width;
        returnParams.goToY = l1.y;
        return returnParams;
        break;

      case 3: //right
        returnParams.right = true;
        returnParams.goToX = r3.x;
        returnParams.goToY = l1.y;
        return returnParams;
        break;

      default:
        returnParams.collision = false;
        return returnParams;

    }
    /*
        //Old solution:
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
    */

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
