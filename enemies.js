class Enemy extends PhysicsObject {
  constructor(location, w, h, maxVelocity) {
    super(location, w, h, maxVelocity)
    //location on screen
    this.lastLocation = this.location.copy()
    //Powerup's width and height
    this.width = w
    this.height = h
    //As defult the powerup does not move
    this.moving = false
    //The acceleration of powerups
    this.acceleration.x = 2
  }

  draw() {
    image(this.graphic, this.location.x, this.location.y, unit, unit);
    return this
  }

}

class Goomba extends Enemy {
  constructor(location, width, height) {
    super(location, width, height)
    this.graphic = goombaImg
  }
}
